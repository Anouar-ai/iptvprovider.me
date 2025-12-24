/**
 * Google Ads & GA4 Conversion Tracking - Production Ready
 * 
 * Implements purchase conversion tracking for Google Ads optimization
 * 
 * Features:
 * - Purchase event with all required parameters
 * - UTM attribution
 * - Enhanced Conversions (email/phone hashing)
 * - No duplicate events
 * - GDPR-safe
 */

import { getCurrentUTM, type UTMParams } from './utm';

export interface PurchaseEventParams {
  transaction_id: string;      // Unique order ID
  value: number;                // Total purchase value
  currency?: string;            // ISO currency code (default: USD)
  items?: PurchaseItem[];       // Optional: product details
  email?: string;               // For Enhanced Conversions
  phone?: string;               // For Enhanced Conversions
}

export interface PurchaseItem {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
}

/**
 * Hash email or phone for Enhanced Conversions (SHA-256)
 * GDPR-safe: hashed on client before sending
 * Uses native Web Crypto API - no external dependencies
 */
async function hashUserData(value: string): Promise<string> {
  const normalized = value.toLowerCase().trim();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Track Purchase Conversion
 * 
 * Call this ONLY on successful payment confirmation page
 * 
 * @param params - Purchase event parameters
 * 
 * Example:
 * ```ts
 * await trackPurchase({
 *   transaction_id: 'order_12345',
 *   value: 90.00,
 *   currency: 'USD',
 *   email: 'customer@example.com'
 * });
 * ```
 */
export async function trackPurchase(params: PurchaseEventParams): Promise<void> {
  if (typeof window === 'undefined') return;

  const {
    transaction_id,
    value,
    currency = 'USD',
    items = [],
    email,
    phone
  } = params;

  // Validation
  if (!transaction_id || !value) {
    console.error('trackPurchase: transaction_id and value are required');
    return;
  }

  // Duplicate protection - check if already tracked
  const trackedKey = `purchase_tracked_${transaction_id}`;
  if (sessionStorage.getItem(trackedKey)) {
    console.log(`[Purchase] Already tracked: ${transaction_id}, skipping duplicate`);
    return;
  }

  // Mark as tracked immediately to prevent race conditions
  sessionStorage.setItem(trackedKey, 'true');

  // Get current UTM parameters
  const utm: UTMParams = getCurrentUTM();

  // Detect first purchase
  const hasPreviousPurchase = localStorage.getItem('iptv_has_purchased') === 'true';
  const first_purchase = !hasPreviousPurchase;

  // Ensure items array is always populated
  const eventItems = items.length > 0 ? items : [{
    item_id: 'iptv_subscription',
    item_name: 'IPTV Subscription',
    price: value,
    quantity: 1
  }];

  // Build GA4 event parameters
  const eventParams: Record<string, any> = {
    transaction_id,
    value,
    currency,
    items: eventItems,
    first_purchase,
    // UTM attribution
    ...utm,
  };

  // Track in GA4
  if ((window as any).gtag) {
    (window as any).gtag('event', 'purchase', eventParams);
    console.log('[GA4] Purchase event sent:', eventParams);
  }

  // Track in GTM dataLayer
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id,
        value,
        currency,
        items: eventItems,
      },
      ...utm,
    });
    console.log('[GTM] Purchase event pushed to dataLayer');
  }

  // Enhanced Conversions (hashed user data)
  if (email || phone) {
    const enhancedParams: Record<string, any> = {};
    
    if (email) {
      enhancedParams.sha256_email_address = await hashUserData(email);
    }
    
    if (phone) {
      enhancedParams.sha256_phone_number = await hashUserData(phone);
    }

    // Send enhanced conversion data
    if ((window as any).gtag) {
      (window as any).gtag('set', 'user_data', enhancedParams);
      console.log('[GA4] Enhanced Conversions data sent (hashed)');
    }
  }

  // Google Ads Conversion Tag (if configured)
  // Replace 'AW-CONVERSION_ID' with your actual conversion ID from Google Ads
  if ((window as any).gtag) {
    // Uncomment and replace with your conversion ID:
    // (window as any).gtag('event', 'conversion', {
    //   'send_to': 'AW-XXXXXXXXX/CONVERSION_LABEL',
    //   'value': value,
    //   'currency': currency,
    //   'transaction_id': transaction_id
    // });
  }

  // Mark as purchased for future first_purchase detection
  localStorage.setItem('iptv_has_purchased', 'true');
}

/**
 * Track WhatsApp Lead (micro-conversion)
 * 
 * Call when user clicks WhatsApp button
 * This helps Google Ads learn from users who show intent
 */
export function trackWhatsAppLead(params: {
  value?: number;
  source?: string;
  campaign?: string;
}): void {
  if (typeof window === 'undefined') return;

  const utm = getCurrentUTM();

  const eventParams = {
    event_category: 'engagement',
    event_label: 'whatsapp_lead',
    value: params.value || 0,
    ...utm,
  };

  // Track in GA4
  if ((window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', eventParams);
  }

  // Track in GTM
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'generate_lead',
      ...eventParams,
    });
  }
}

/**
 * Track Begin Checkout
 * 
 * Call when user initiates checkout process
 */
export function trackBeginCheckout(params: {
  value: number;
  currency?: string;
  items?: PurchaseItem[];
}): void {
  if (typeof window === 'undefined') return;

  const utm = getCurrentUTM();

  const eventParams = {
    currency: params.currency || 'USD',
    value: params.value,
    items: params.items || [],
    ...utm,
  };

  if ((window as any).gtag) {
    (window as any).gtag('event', 'begin_checkout', eventParams);
  }

  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'begin_checkout',
      ecommerce: eventParams,
    });
  }
}

/**
 * Initialize conversion tracking on app load
 */
export function initializeConversionTracking(): void {
  if (typeof window === 'undefined') return;

  // Ensure GTM is loaded
  if (!(window as any).dataLayer) {
    (window as any).dataLayer = [];
  }

  console.log('[Tracking] Conversion tracking initialized');
}

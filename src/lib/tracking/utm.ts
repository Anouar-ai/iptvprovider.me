/**
 * UTM Tracking System - Production Ready
 * 
 * Handles UTM parameter capture, persistence, and propagation
 * across page navigation, redirects, and external links (WhatsApp, Stripe, PayPal)
 * 
 * Features:
 * - Captures all 5 standard UTM parameters
 * - Persists to localStorage (primary) and cookies (fallback)
 * - 30-day retention
 * - Survives redirects and external flows
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_STORAGE_KEY = 'iptv_utm_params';
const UTM_COOKIE_NAME = 'iptv_utm';
const UTM_EXPIRY_DAYS = 30;

/**
 * Extract UTM parameters from URL
 */
export function getUTMFromURL(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};

  const utmKeys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term'
  ];

  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });

  return Object.keys(utmParams).length > 0 ? utmParams : {};
}

/**
 * Save UTM parameters to localStorage and cookie
 */
export function saveUTM(params: UTMParams): void {
  if (typeof window === 'undefined') return;

  // Save to localStorage (primary)
  try {
    const existingUTM = getStoredUTM();
    const mergedUTM = { ...existingUTM, ...params };
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(mergedUTM));
  } catch (e) {
    console.warn('Failed to save UTM to localStorage:', e);
  }

  // Save to cookie (fallback)
  try {
    const cookieValue = JSON.stringify(params);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + UTM_EXPIRY_DAYS);
    
    document.cookie = `${UTM_COOKIE_NAME}=${encodeURIComponent(cookieValue)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  } catch (e) {
    console.warn('Failed to save UTM to cookie:', e);
  }
}

/**
 * Retrieve stored UTM parameters (localStorage first, then cookie)
 */
export function getStoredUTM(): UTMParams {
  if (typeof window === 'undefined') return {};

  // Try localStorage first
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to read UTM from localStorage:', e);
  }

  // Fallback to cookie
  try {
    const cookies = document.cookie.split(';');
    const utmCookie = cookies.find(c => c.trim().startsWith(`${UTM_COOKIE_NAME}=`));
    
    if (utmCookie) {
      const value = utmCookie.split('=')[1];
      return JSON.parse(decodeURIComponent(value));
    }
  } catch (e) {
    console.warn('Failed to read UTM from cookie:', e);
  }

  return {};
}

/**
 * Initialize UTM tracking on page load
 * Call this in useEffect on app initialization
 */
export function initializeUTMTracking(): UTMParams {
  const urlUTM = getUTMFromURL();
  
  if (Object.keys(urlUTM).length > 0) {
    saveUTM(urlUTM);
    return urlUTM;
  }

  return getStoredUTM();
}

/**
 * Get current UTM parameters (URL first, then stored)
 */
export function getCurrentUTM(): UTMParams {
  const urlUTM = getUTMFromURL();
  if (Object.keys(urlUTM).length > 0) {
    return urlUTM;
  }
  return getStoredUTM();
}

/**
 * Clear stored UTM parameters
 * Use this after successful conversion or for testing
 */
export function clearUTM(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear UTM from localStorage:', e);
  }

  try {
    document.cookie = `${UTM_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } catch (e) {
    console.warn('Failed to clear UTM from cookie:', e);
  }
}

/**
 * Append UTM parameters to a URL
 * Use this for WhatsApp links, payment redirects, etc.
 */
export function appendUTMToURL(url: string, utmParams?: UTMParams): string {
  const params = utmParams || getCurrentUTM();
  if (Object.keys(params).length === 0) return url;

  const urlObj = new URL(url, window.location.origin);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlObj.searchParams.set(key, value);
    }
  });

  return urlObj.toString();
}

/**
 * WhatsApp Link Generator with UTM Tracking
 * Professional system for tracking conversions from different sources
 */

export interface WhatsAppLinkParams {
  phone: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Generate WhatsApp link with optional pre-filled message and UTM tracking
 * @param params - Phone number, message, and UTM parameters
 * @returns WhatsApp URL with tracking
 */
export function generateWhatsAppLink(params: WhatsAppLinkParams): string {
  const { phone, message, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = params;

  // Remove + and spaces from phone number for WhatsApp API
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  // Build UTM tracking string
  const utmParams: string[] = [];
  if (utm_source) utmParams.push(`utm_source=${encodeURIComponent(utm_source)}`);
  if (utm_medium) utmParams.push(`utm_medium=${encodeURIComponent(utm_medium)}`);
  if (utm_campaign) utmParams.push(`utm_campaign=${encodeURIComponent(utm_campaign)}`);
  if (utm_content) utmParams.push(`utm_content=${encodeURIComponent(utm_content)}`);
  if (utm_term) utmParams.push(`utm_term=${encodeURIComponent(utm_term)}`);

  // Build message with UTM tracking embedded
  let finalMessage = message || 'Hello! I\'m interested in your IPTV service.';
  
  // Add UTM reference to message for internal tracking
  if (utmParams.length > 0) {
    const utmString = utmParams.join('&');
    finalMessage += `\n\n[Ref: ${utm_source || 'website'}]`;
  }

  // Encode message for URL
  const encodedMessage = encodeURIComponent(finalMessage);

  // Build WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return whatsappUrl;
}

/**
 * Track WhatsApp click event in Google Analytics
 * Call this when user clicks WhatsApp button
 */
export function trackWhatsAppClick(params: {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
}) {
  // Check if Google Analytics is loaded
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: params.source || 'website',
      utm_source: params.source,
      utm_medium: params.medium,
      utm_campaign: params.campaign,
      utm_content: params.content,
    });
  }

  // Also track in dataLayer for Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'whatsapp_click',
      utm_source: params.source,
      utm_medium: params.medium,
      utm_campaign: params.campaign,
      utm_content: params.content,
    });
  }
}

/**
 * Pre-configured WhatsApp links for common use cases
 */
export const whatsAppLinks = {
  // Homepage CTA
  homepage: (phone: string) => generateWhatsAppLink({
    phone,
    message: '👋 Hi! I found you on your website. I\'d like to know more about your IPTV service.',
    utm_source: 'website',
    utm_medium: 'cta',
    utm_campaign: 'homepage',
    utm_content: 'hero_cta',
  }),

  // Pricing page CTA
  pricing: (phone: string, plan?: string) => generateWhatsAppLink({
    phone,
    message: plan 
      ? `Hi! I'm interested in the ${plan} plan. Can you help me get started?`
      : 'Hi! I\'m interested in subscribing. Can you help me choose the right plan?',
    utm_source: 'website',
    utm_medium: 'cta',
    utm_campaign: 'pricing',
    utm_content: plan ? `plan_${plan.toLowerCase()}` : 'pricing_page',
  }),

  // Free trial CTA
  freeTrial: (phone: string) => generateWhatsAppLink({
    phone,
    message: '👋 Hi! I want to start my 7-day free trial. How do I get started?',
    utm_source: 'website',
    utm_medium: 'cta',
    utm_campaign: 'free_trial',
    utm_content: 'trial_cta',
  }),

  // Support/FAQ
  support: (phone: string, question?: string) => generateWhatsAppLink({
    phone,
    message: question 
      ? `Hi! I have a question: ${question}`
      : 'Hi! I need help with something.',
    utm_source: 'website',
    utm_medium: 'support',
    utm_campaign: 'customer_support',
    utm_content: 'faq_page',
  }),

  // Blog article CTA
  blog: (phone: string, articleTitle?: string) => generateWhatsAppLink({
    phone,
    message: articleTitle
      ? `Hi! I read your article "${articleTitle}" and I'm interested in learning more.`
      : 'Hi! I read your blog and I\'m interested in your IPTV service.',
    utm_source: 'website',
    utm_medium: 'content',
    utm_campaign: 'blog',
    utm_content: articleTitle ? `article_${articleTitle.toLowerCase().replace(/\s+/g, '_')}` : 'blog_page',
  }),

  // Social media campaigns
  social: (phone: string, platform: string) => generateWhatsAppLink({
    phone,
    message: `Hi! I found you on ${platform}. I'm interested in your IPTV service.`,
    utm_source: platform.toLowerCase(),
    utm_medium: 'social',
    utm_campaign: 'social_media',
    utm_content: `${platform.toLowerCase()}_bio`,
  }),

  // Email campaigns
  email: (phone: string, campaignName?: string) => generateWhatsAppLink({
    phone,
    message: 'Hi! I received your email and I\'m interested in subscribing.',
    utm_source: 'email',
    utm_medium: 'email',
    utm_campaign: campaignName || 'newsletter',
    utm_content: 'email_cta',
  }),

  // Paid ads (Google Ads, Facebook Ads, etc.)
  ads: (phone: string, adPlatform: string, adName?: string) => generateWhatsAppLink({
    phone,
    message: 'Hi! I saw your ad and I\'m interested in your IPTV service.',
    utm_source: adPlatform.toLowerCase(),
    utm_medium: 'paid',
    utm_campaign: adName || 'paid_advertising',
    utm_content: `${adPlatform.toLowerCase()}_ad`,
  }),
};

/**
 * Get WhatsApp link based on current page and context
 */
export function getContextualWhatsAppLink(
  phone: string,
  context: {
    page?: string;
    plan?: string;
    article?: string;
    source?: string;
    medium?: string;
    campaign?: string;
  }
): string {
  const { page, plan, article, source, medium, campaign } = context;

  // If custom UTM provided, use it
  if (source || medium || campaign) {
    return generateWhatsAppLink({
      phone,
      message: 'Hi! I\'m interested in your IPTV service.',
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    });
  }

  // Otherwise use pre-configured links
  switch (page) {
    case 'pricing':
      return whatsAppLinks.pricing(phone, plan);
    case 'free-trial':
      return whatsAppLinks.freeTrial(phone);
    case 'blog':
      return whatsAppLinks.blog(phone, article);
    case 'support':
      return whatsAppLinks.support(phone);
    case 'homepage':
    default:
      return whatsAppLinks.homepage(phone);
  }
}

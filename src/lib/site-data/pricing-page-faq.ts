/**
 * Pricing Page - PAA-Optimized FAQs
 * 
 * Optimized for "People Also Ask" (PAA) boxes in Google search results
 * for pricing and subscription-related queries
 */

export interface PricingFAQ {
    question: string;
    shortAnswer?: string;  // Concise answer for PAA (40-60 words)
    answer: string;
}

export const pricingPageFaqs: PricingFAQ[] = [
    {
        question: "How much does the IPTV subscription cost?",
        shortAnswer: "Our IPTV subscription plans range from $7.50 to $20.00 per month, depending on duration (monthly, quarterly, or yearly). Yearly plans offer the best value with savings up to 60%. All plans include 24,000+ channels, HD/4K quality, and 24/7 support.",
        answer: "Our IPTV subscription plans offer flexible pricing to suit any budget. Monthly plans start at $20.00, while our annual subscription drops to just $7.50/month (billed at $89.99/year), saving you over 60%. All plans include complete access to 24,000+ live channels, 80,000+ VOD content, HD/4K streaming quality, multi-device support, and 24/7 customer service. We also offer a 24-hour free trial so you can test our service risk-free."
    },
    {
        question: "What payment methods do you accept?",
        shortAnswer: "We accept all major payment methods: credit/debit cards (Visa, Mastercard, American Express), PayPal, cryptocurrency (Bitcoin, Ethereum), and various regional payment processors. All transactions are encrypted and secure.",
        answer: "We offer multiple secure payment options for your convenience. We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also support PayPal for easy checkout, as well as cryptocurrency payments (Bitcoin, Ethereum, USDT) for enhanced privacy. Regional payment methods are also available depending on your location. All payments are processed through industry-standard encrypted gateways to ensure your financial information is completely secure."
    },
    {
        question: "Can I cancel my subscription anytime?",
        shortAnswer: "Yes, you can cancel your IPTV subscription at any time with no cancellation fees or penalties. We offer a 24-hour free trial to test the service before purchase.",
        answer: "Absolutely! Our IPTV subscriptions are completely flexible with no long-term contracts or commitments. You can cancel your subscription at any time without incurring cancellation fees or penalties. We offer a 24-hour free trial to test our service before any payment is required. If you choose to subscribe and are not satisfied, you can cancel anytime to prevent future billing."
    },
    {
        question: "Do you offer a free trial for IPTV?",
        shortAnswer: "Yes, we offer a 24-hour free trial that gives you full access to all 24,000+ channels, VOD library, and premium features. No credit card required for the trial - simply sign up and start streaming immediately.",
        answer: "Yes! We offer a comprehensive 24-hour free trial with absolutely no restrictions. During the trial period, you get complete access to our entire channel lineup (24,000+ live channels), full VOD library (80,000+ titles), HD/4K streaming, and all premium features. The 24-hour trial gives you enough time to test our service on your devices, check channel availability, and experience our quality. Best of all, no credit card information is required to start your trial - simply create an account and begin streaming within minutes."
    },
    {
        question: "What's the difference between monthly and yearly plans?",
        shortAnswer: "Yearly plans save you over 60% compared to monthly billing. Monthly plans cost $20/month ($240/year), while yearly plans are just $89.99/year ($7.50/month). Both include identical features - the only difference is the billing cycle and savings.",
        answer: "The only difference between our monthly and yearly plans is the billing frequency and the substantial cost savings. If you pay monthly at $20.00, you'll spend $240.00 over a year. However, our yearly subscription costs just $89.99 total, which breaks down to only $7.50 per month - saving you over $150 annually. Both plans provide 100% identical access to all channels, VOD content, quality levels, device support, and customer service. If you're confident in your choice (or want to try our 24-hour trial first), the yearly plan offers the best value."
    },
    {
        question: "Are there any hidden fees or extra costs?",
        shortAnswer: "No hidden fees whatsoever. The subscription price you see is exactly what you pay and includes everything: all channels, VOD, HD/4K access, EPG, multi-device support, and customer service. No setup fees, activation costs, or equipment rentals.",
        answer: "We pride ourselves on complete pricing transparency - there are absolutely zero hidden fees. The subscription price you see at checkout is the complete cost and includes everything you need: full access to 24,000+ live channels, 80,000+ VOD titles, HD and 4K streaming quality, EPG (TV Guide), simultaneous device connections, catch-up TV, and 24/7 customer support. There are no setup fees, activation charges, equipment rental costs, or premium channel add-ons. The only additional cost you might consider is optional (a VPN service for privacy), but this is not required to use our IPTV service."
    },
    {
        question: "How many devices can I use with one subscription?",
        shortAnswer: "Our standard subscription includes 5 simultaneous connections, meaning you can stream on up to 5 devices at the same time. This is perfect for families or multiple rooms in your home.",
        answer: "Each IPTV subscription includes support for 5 simultaneous connections by default. This means you can watch different channels on up to 5 devices at the exact same time - perfect for families where different members want to watch different content. You can install our service on unlimited devices (TVs, phones, tablets, etc.), but only 5 can stream actively at once. If you need more simultaneous connections for larger households or commercial use, we offer additional connection packages at discounted rates."
    },
    {
        question: "What happens after my subscription expires?",
        shortAnswer: "When your subscription expires, your access to channels and content will stop immediately. Your account remains active, so you can easily renew by purchasing a new subscription using the same credentials without losing your settings or preferences.",
        answer: "When your IPTV subscription reaches its expiration date, your access to live channels and VOD content will be immediately suspended. However, your account and login credentials remain active in our system for up to 90 days. This means you can renew your subscription at any time simply by purchasing a new plan - your channel favorites, app settings, and viewing history will be preserved. We'll send you reminder emails before your subscription expires, giving you plenty of time to renew without interruption. If you choose not to renew, your account will be permanently deleted after 90 days of inactivity."
    },
    {
        question: "Do you offer discounts for longer subscriptions?",
        shortAnswer: "Yes! We offer significant discounts for longer commitments: 3-month plans sa25%, 6-month plans save 40%, and 12-month plans save over 60% compared to monthly billing. The longer you subscribe, the more you save.",
        answer: "Absolutely! We reward our loyal customers with substantial discounts for longer subscription periods. Our pricing structure works like this: Monthly subscriptions cost $20.00/month with maximum flexibility. 3-month subscriptions save you approximately 25% off the monthly rate. 6-month subscriptions provide around 40% savings. Annual (12-month) subscriptions deliver the best value with over 60% savings - just $89.99 for the entire year (equivalent to $7.50/month). All subscription tiers include identical access to our full service. We recommend trying our 24-hour free trial first, then committing to an annual plan for maximum savings if you're satisfied."
    },
    {
        question: "Can I test the service before paying?",
        shortAnswer: "Yes, we offer a 24-hour free trial with full access to all channels and features. No credit card required - test everything risk-free before making any commitment.",
        answer: "Absolutely! We offer a 24-hour free trial with complete access to all 24,000+ channels, VOD library, and premium features. No credit card is required to start your trial - simply create an account and begin testing our service immediately. This gives you a full day to test channel quality, server stability, and compatibility with your devices. After the trial, you can choose to subscribe if you're satisfied. We believe our service quality speaks for itself, which is why we make it easy to try before you buy."
    }
];

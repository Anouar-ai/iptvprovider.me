export interface Plan {
  name: string;
  price: number;
  price_monthly: number;
  duration: string;
  isPopular: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "1 Month",
    price: 16,
    price_monthly: 16,
    duration: "Monthly",
    isPopular: false,
    features: [
      "24,000+ Live Channels",
      "80,000+ VOD Movies & Series",
      "HD & 4K Streaming Quality",
      "All Sports & PPV Events",
      "Anti-Freeze Technology",
      "2 Device Connections",
      "24/7 Customer Support",
      "Instant Activation",
    ],
  },
  {
    name: "3 Months",
    price: 39,
    price_monthly: 13,
    duration: "3 Months",
    isPopular: false,
    features: [
      "24,000+ Live Channels",
      "80,000+ VOD Movies & Series",
      "HD & 4K Streaming Quality",
      "All Sports & PPV Events",
      "Anti-Freeze Technology",
      "2 Device Connections",
      "24/7 Customer Support",
      "Instant Activation",
    ],
  },
  {
    name: "6 Months",
    price: 60,
    price_monthly: 10,
    duration: "6 Months",
    isPopular: false,
    features: [
      "24,000+ Live Channels",
      "80,000+ VOD Movies & Series",
      "HD & 4K Streaming Quality",
      "All Sports & PPV Events",
      "Anti-Freeze Technology",
      "2 Device Connections",
      "24/7 Customer Support",
      "Instant Activation",
    ],
  },
  {
    name: "12 Months",
    price: 90,
    price_monthly: 7.5,
    duration: "Yearly",
    isPopular: true,
    features: [
      "24,000+ Live Channels",
      "80,000+ VOD Movies & Series",
      "HD & 4K Streaming Quality",
      "All Sports & PPV Events",
      "Anti-Freeze Technology",
      "2 Device Connections",
      "24/7 Customer Support",
      "Instant Activation",
      "Priority Support",
    ],
  },
];

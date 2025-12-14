
export const siteConfig = {
  name: "IPTV Provider",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.iptvprovider.me",
  ogImage: "/IPTV-Provider.png",
  description: "Subscribe to our IPTV service with 24,000+ live channels & VOD. HD/4K quality, instant activation & 24/7 support. Premium IPTV streaming worldwide.",
  // Knowledge Graph optimization fields
  foundingDate: "2020",
  slogan: "Your Gateway to Premium IPTV Streaming",
  alternateName: ["IPTV Provider", "IPTVProvider.me", "Best IPTV Provider"],
  links: {
    twitter: "https://twitter.com/iptvprovider",
    facebook: "https://facebook.com/iptvprovider",
    instagram: "https://instagram.com/iptvprovider",
    youtube: "https://youtube.com/@iptvprovider",
    linkedin: "https://linkedin.com/company/iptvprovider",
    email: "support@iptvprovider.me",
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper for generating page-specific metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}) {
  const ogImageUrl = image || `${siteConfig.url}${siteConfig.ogImage}?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonical ? `${siteConfig.url}${canonical}` : undefined,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      site: siteConfig.links.twitter,
      creator: siteConfig.links.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

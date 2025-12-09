
import type {
  Product,
  WebSite,
  Organization,
  FAQPage,
  BreadcrumbList,
  Article,
  HowTo,
  Service,
  Brand,
  Offer,
  AggregateOffer,
  CollectionPage,
  ItemList,
  Person,
  Review
} from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

// Reusable parts of schemas
const defaultPublisher = {
  '@type': 'Organization' as const,
  'name': siteConfig.name,
  'logo': {
    '@type': 'ImageObject' as const,
    'url': `${siteConfig.url}/api/og`,
  },
};

export function generateWebSiteSchema(): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    'url': siteConfig.url,
    'name': siteConfig.name,
    'alternateName': ["IPTV Providers", "best iptv provider"],
    'publisher': {
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}

export function generateOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    'name': siteConfig.name,
    'url': siteConfig.url,
    'logo': `${siteConfig.url}/api/og`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': siteConfig.links.email,
      'contactType': 'Customer Service',
    },
    'sameAs': [
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  ratingValue: string;
  reviewCount: string;
  price?: string;
  offers?: Offer | AggregateOffer;
  sku?: string;
  mpn?: string;
  brand?: Brand;
}

export function generateProductSchema(props: ProductSchemaProps): Product {
  const { name, description, image, ratingValue, reviewCount, price, offers, sku, mpn, brand } = props;

  const offerDetails = offers || (price ? {
    '@type': 'Offer' as const,
    price: price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock' as const,
    url: `${siteConfig.url}/pricing`,
    priceValidUntil: "2025-12-31",
  } : undefined);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    sku,
    mpn,
    brand,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
    },
    offers: offerDetails,
  };
}


export function generateFAQPageSchema(mainEntity: { question: string; answer: string }[]): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(itemListElement: { name: string; item: string }[]): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  publisherName?: string;
  url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps): Article {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    image: props.image,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: {
      '@type': props.authorName ? 'Person' : 'Organization',
      name: props.authorName || siteConfig.name,
    },
    publisher: defaultPublisher,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}

interface HowToSchemaProps {
  name: string;
  description: string;
  image?: { url: string; width?: number; height?: number; };
  steps: { name: string; text: string; url: string; }[];
  totalTime?: string;
}

export function generateHowToSchema(props: HowToSchemaProps): HowTo {
  const { name, description, image, steps, totalTime } = props;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: image ? {
      '@type': 'ImageObject',
      url: image.url,
      width: image.width,
      height: image.height,
    } : undefined,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
      url: step.url,
      position: index + 1,
    })),
    totalTime: totalTime,
  };
}


interface ServiceSchemaProps {
  serviceType: string;
  providerName: string;
  areaServed: { type: string, name: string };
  name: string;
  description: string;
  offers?: Offer | AggregateOffer;
}

export function generateServiceSchema(props: ServiceSchemaProps): Service {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: props.serviceType,
    provider: {
      '@type': 'Organization',
      name: props.providerName
    },
    areaServed: {
      '@type': props.areaServed.type as any,
      name: props.areaServed.name,
    },
    name: props.name,
    description: props.description,
    offers: props.offers
  }
}

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; }[];
}

export function generateCollectionPageSchema(props: CollectionPageSchemaProps): CollectionPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: props.name,
    description: props.description,
    url: props.url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: props.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: item.url,
        name: item.name,
      })),
    },
  };
}

interface ReviewSchemaProps {
  itemReviewed: {
    name: string;
    type: 'Product' | 'Service' | 'Organization';
  };
  author: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviewBody: string;
  datePublished: string;
}

export function generateReviewSchema(props: ReviewSchemaProps): Review {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': props.itemReviewed.type,
      name: props.itemReviewed.name,
    },
    author: {
      '@type': 'Person',
      name: props.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: props.reviewRating.ratingValue.toString(),
      bestRating: (props.reviewRating.bestRating || 5).toString(),
      worstRating: (props.reviewRating.worstRating || 1).toString(),
    },
    reviewBody: props.reviewBody,
    datePublished: props.datePublished,
  };
}

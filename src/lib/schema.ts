
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
import { sitelinksConfig } from '@/lib/site-data/sitelinks-config';

// Reusable parts of schemas
const defaultPublisher = {
  '@type': 'Organization' as const,
  'name': siteConfig.name,
  'logo': {
    '@type': 'ImageObject' as const,
    'url': `${siteConfig.url}/IPTV-Provider.png`,
  },
  'contactPoint': {
    '@type': 'ContactPoint' as const,
    'email': siteConfig.links.email,
    'contactType': 'Customer Service',
    'availableLanguage': ['English', 'French'],
  },
};

export function generateWebSiteSchema(): any {
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
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${siteConfig.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

// SiteNavigationElement schema for Google Sitelinks optimization
export function generateSiteNavigationSchema() {
  const navItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'IPTV Free Trial', url: `${siteConfig.url}/iptv-free-trial` },
    { name: 'Pricing', url: `${siteConfig.url}/pricing` },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: 'Locations', url: `${siteConfig.url}/locations` },
    { name: 'FAQ', url: `${siteConfig.url}/faq` },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': navItems.map((item, index) => ({
      '@type': 'SiteNavigationElement',
      'position': index + 1,
      'name': item.name,
      'url': item.url,
    })),
  };
}

// Advanced SiteNavigationElement schema with descriptions and metadata
export function generateAdvancedSitelinksSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Site Navigation',
    'description': 'Main navigation links for IPTV Provider website',
    'inLanguage': 'en-US',
    'itemListElement': sitelinksConfig.map((item: any, index: number) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'SiteNavigationElement',
        'name': item.name,
        'description': item.description,
        'url': `${siteConfig.url}${item.url}`,
      },
    })),
  };
}

export function generateOrganizationSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    'name': siteConfig.name,
    'legalName': siteConfig.legalName,
    'alternateName': siteConfig.alternateName,
    'url': siteConfig.url,
    'logo': {
      '@type': 'ImageObject',
      'url': `${siteConfig.url}/IPTV-Provider.png`,
      'width': 512,
      'height': 512,
    },
    'image': `${siteConfig.url}/IPTV-Provider.png`,
    'description': siteConfig.description,
    'foundingDate': siteConfig.foundingDate,
    'slogan': siteConfig.slogan,

    // Founder information for Knowledge Graph
    'founder': {
      '@type': 'Person',
      '@id': `${siteConfig.url}/team#${siteConfig.founder.id}`,
      'name': siteConfig.founder.name,
      'jobTitle': siteConfig.founder.role,
    },

    // Knowledge areas
    'knowsAbout': [
      'IPTV Streaming',
      'Internet Television',
      'Cord-Cutting',
      'Live TV Streaming',
      'Video on Demand',
      'Smart TV Applications',
      'Streaming Media'
    ],

    // Service area
    'areaServed': {
      '@type': 'Place',
      'name': 'Worldwide'
    },

    // Contact information
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': siteConfig.links.email,
      'telephone': siteConfig.telephone,
      'contactType': 'Customer Service',
      'availableLanguage': ['English', 'French'],
      'areaServed': 'Worldwide',
    },

    // Business details
    'numberOfEmployees': {
      '@type': 'QuantitativeValue',
      'value': siteConfig.numberOfEmployees
    },
    'priceRange': siteConfig.priceRange,

    // Awards and recognition
    'award': siteConfig.awards,

    // Authoritative sources for Knowledge Graph
    'sameAs': [
      // Social media profiles
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.youtube,
      siteConfig.links.linkedin,
      // Authoritative sources
      siteConfig.authoritativeSources.trustpilot,
      siteConfig.authoritativeSources.wikidata,
      siteConfig.authoritativeSources.crunchbase,
    ].filter(Boolean),
  };
}

// LocalBusiness schema for geo-targeted pages
export function generateLocalBusinessSchema(props: {
  name: string;
  description: string;
  areaServed: string;
  country: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#local-${props.country.toLowerCase()}`,
    name: `${props.name} - ${props.areaServed}`,
    description: props.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/IPTV-Provider.png`,
    areaServed: {
      '@type': 'Country',
      name: props.areaServed,
    },
    priceRange: '$',
    email: siteConfig.links.email,
  };
}

// SoftwareApplication schema for IPTV apps
export function generateSoftwareApplicationSchema(props: {
  name: string;
  operatingSystem: string;
  applicationCategory?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    operatingSystem: props.operatingSystem,
    applicationCategory: props.applicationCategory || 'MultimediaApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2547',
    },
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

export function generateProductSchema(props: ProductSchemaProps): any {
  const { name, description, image, ratingValue, reviewCount, price, offers, sku, mpn, brand } = props;

  const offerDetails = offers || (price ? {
    '@type': 'Offer' as const,
    price: price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock' as const,
    url: `${siteConfig.url}/pricing`,
    priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    seller: {
      '@id': `${siteConfig.url}/#organization`,
    },
  } : undefined);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteConfig.url}/#product`,
    name,
    description,
    image,
    sku,
    mpn,
    brand: brand || {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    manufacturer: {
      '@id': `${siteConfig.url}/#organization`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    offers: offerDetails,
  };
}


/**
 * Enhanced FAQPage Schema for "People Also Ask" Optimization
 * 
 * Key optimizations:
 * 1. Includes @id for entity linking
 * 2. dateModified signals freshness to Google
 * 3. author property adds credibility
 * 4. mainEntityOfPage links to specific page
 * 5. inLanguage helps with international SEO
 */
export function generateFAQPageSchema(
  mainEntity: { question: string; answer: any; shortAnswer?: string }[],
  pageUrl?: string
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': pageUrl ? `${pageUrl}#faq` : `${siteConfig.url}/#faq`,
    'inLanguage': 'en-US',
    'dateModified': new Date().toISOString().split('T')[0],
    ...(pageUrl && {
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
    }),
    'author': {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      'name': siteConfig.name,
    },
    'publisher': {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    mainEntity: mainEntity.map(({ question, answer, shortAnswer }) => ({
      '@type': 'Question',
      'name': question,
      'answerCount': 1,
      'acceptedAnswer': {
        '@type': 'Answer',
        // Use shortAnswer for PAA if available, otherwise full answer
        'text': typeof (shortAnswer || answer) === 'string'
          ? (shortAnswer || answer)
          : String(shortAnswer || answer),
        // Include full answer in description if shortAnswer is used
        ...(shortAnswer && {
          'description': typeof answer === 'string' ? answer : String(answer)
        }),
        'dateCreated': new Date().toISOString().split('T')[0],
        'author': {
          '@type': 'Organization',
          '@id': `${siteConfig.url}/#organization`,
        },
      },
    })),
  };
}

export function generateBreadcrumbSchema(itemListElement: { name: string; item: string }[]): any {
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

export function generateArticleSchema(props: ArticleSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    image: props.image,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: props.authorName ? {
      '@type': 'Person',
      name: props.authorName,
      url: `${siteConfig.url}/team`,
      jobTitle: 'Content Specialist',
    } : {
      '@type': 'Organization',
      name: siteConfig.name,
      url: `${siteConfig.url}/about`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/IPTV-Provider.png`,
      },
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
  url?: string;
  steps: { name: string; text: string; url: string; }[];
  totalTime?: string;
}

export function generateHowToSchema(props: HowToSchemaProps): any {
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

export function generateServiceSchema(props: ServiceSchemaProps): any {
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

export function generateCollectionPageSchema(props: CollectionPageSchemaProps): any {
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

export function generateReviewSchema(props: ReviewSchemaProps): any {
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

// WebPage schema with speakable sections for jump links
interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  sections?: { id: string; name: string }[];
}

export function generateWebPageSchema(props: WebPageSchemaProps) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.name,
    description: props.description,
    url: props.url,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };

  // Add speakable sections if provided (for jump links)
  if (props.sections && props.sections.length > 0) {
    schema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: props.sections.map(s => `#${s.id}`),
    };
  }

  return schema;
}


interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601 format, e.g., "PT1M30S"
}

export function generateVideoSchema(props: VideoSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: props.name,
    description: props.description,
    thumbnailUrl: props.thumbnailUrl,
    uploadDate: props.uploadDate,
    ...(props.contentUrl && { contentUrl: props.contentUrl }),
    ...(props.embedUrl && { embedUrl: props.embedUrl }),
    ...(props.duration && { duration: props.duration }),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/IPTV-Provider.png`,
      },
    },
  };
}

// Speakable schema for voice search optimization (Google Assistant)
interface SpeakableSchemaProps {
  url: string;
  headline: string;
  description: string;
  speakableCssSelectors?: string[];
}

export function generateSpeakableSchema(props: SpeakableSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': props.url,
    url: props.url,
    name: props.headline,
    description: props.description,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: props.speakableCssSelectors || [
        'h1',
        '[data-speakable="true"]',
        '.speakable-content',
      ],
    },
    publisher: defaultPublisher,
  };
}

// Aggregate rating for products/services
interface AggregateRatingSchemaProps {
  itemName: string;
  itemType?: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export function generateAggregateRatingSchema(props: AggregateRatingSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': props.itemType || 'Product',
    name: props.itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: props.ratingValue,
      reviewCount: props.reviewCount,
      bestRating: props.bestRating || 5,
      worstRating: props.worstRating || 1,
    },
  };
}

// ============================================================================
// AI VISIBILITY OPTIMIZATION SCHEMAS
// For Google AI Overviews, Perplexity, ChatGPT, and other AI platforms
// ============================================================================

/**
 * QAPage Schema - For single question pages
 * Better for AI extraction than FAQPage for focused content
 */
interface QAPageSchemaProps {
  question: string;
  answer: string;
  url: string;
  dateCreated?: string;
  upvoteCount?: number;
}

export function generateQAPageSchema(props: QAPageSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    '@id': `${props.url}#qa`,
    'mainEntity': {
      '@type': 'Question',
      'name': props.question,
      'text': props.question,
      'answerCount': 1,
      'upvoteCount': props.upvoteCount || 0,
      'dateCreated': props.dateCreated || new Date().toISOString().split('T')[0],
      'author': {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
      },
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': props.answer,
        'dateCreated': props.dateCreated || new Date().toISOString().split('T')[0],
        'upvoteCount': props.upvoteCount || 0,
        'url': props.url,
        'author': {
          '@type': 'Organization',
          '@id': `${siteConfig.url}/#organization`,
          'name': siteConfig.name,
        },
      },
    },
  };
}

/**
 * DefinedTerm Schema - For glossary terms and definitions
 * Helps AI understand and cite specific terminology
 */
interface DefinedTermSchemaProps {
  term: string;
  definition: string;
  url?: string;
  inDefinedTermSet?: string;
}

export function generateDefinedTermSchema(props: DefinedTermSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': props.term,
    'description': props.definition,
    ...(props.url && { 'url': props.url }),
    ...(props.inDefinedTermSet && {
      'inDefinedTermSet': {
        '@type': 'DefinedTermSet',
        'name': props.inDefinedTermSet,
      },
    }),
  };
}

/**
 * DefinedTermSet Schema - For glossary pages
 * Groups related terms for AI comprehension
 */
interface GlossarySchemaProps {
  name: string;
  description: string;
  url: string;
  terms: { term: string; definition: string }[];
}

export function generateGlossarySchema(props: GlossarySchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${props.url}#glossary`,
    'name': props.name,
    'description': props.description,
    'url': props.url,
    'hasDefinedTerm': props.terms.map((item, index) => ({
      '@type': 'DefinedTerm',
      'position': index + 1,
      'name': item.term,
      'description': item.definition,
    })),
  };
}

/**
 * Entity Graph Schema - Connects all site entities
 * Crucial for AI understanding of site structure
 */
export function generateEntityGraphSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization entity
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        'name': siteConfig.name,
        'url': siteConfig.url,
        'logo': `${siteConfig.url}/IPTV-Provider.png`,
        'description': siteConfig.description,
        'foundingDate': siteConfig.foundingDate,
        'areaServed': 'Worldwide',
        'sameAs': [
          siteConfig.links.twitter,
          siteConfig.links.facebook,
          siteConfig.links.instagram,
          siteConfig.links.youtube,
          siteConfig.links.linkedin,
        ].filter(Boolean),
      },
      // Website entity
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        'url': siteConfig.url,
        'name': siteConfig.name,
        'description': siteConfig.description,
        'publisher': {
          '@id': `${siteConfig.url}/#organization`,
        },
        'inLanguage': 'en-US',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': `${siteConfig.url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      // Primary Service
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/#service`,
        'name': 'IPTV Streaming Service',
        'description': 'Premium internet television streaming with 24,000+ live channels',
        'provider': {
          '@id': `${siteConfig.url}/#organization`,
        },
        'serviceType': 'Internet Television Streaming',
        'areaServed': {
          '@type': 'Place',
          'name': 'Worldwide',
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'IPTV Subscription Plans',
        },
      },
    ],
  };
}

/**
 * Claim Review Schema - For fact-checking content
 * Helps AI understand authoritative statements
 */
interface ClaimReviewSchemaProps {
  claimReviewed: string;
  reviewRating: {
    ratingValue: number;
    alternateName: string; // e.g., "True", "False", "Mostly True"
  };
  url: string;
  datePublished: string;
}

export function generateClaimReviewSchema(props: ClaimReviewSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    'url': props.url,
    'claimReviewed': props.claimReviewed,
    'author': {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    'datePublished': props.datePublished,
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': props.reviewRating.ratingValue,
      'bestRating': 5,
      'worstRating': 1,
      'alternateName': props.reviewRating.alternateName,
    },
  };
}

/**
 * Discussion Forum Posting Schema
 * For comment sections and community content
 */
interface DiscussionPostSchemaProps {
  headline: string;
  text: string;
  url: string;
  datePublished: string;
  author: string;
  replyCount?: number;
}

export function generateDiscussionPostSchema(props: DiscussionPostSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    'headline': props.headline,
    'text': props.text,
    'url': props.url,
    'datePublished': props.datePublished,
    'author': {
      '@type': 'Person',
      'name': props.author,
    },
    'interactionStatistic': {
      '@type': 'InteractionCounter',
      'interactionType': 'https://schema.org/CommentAction',
      'userInteractionCount': props.replyCount || 0,
    },
  };
}

/**
 * ItemList Schema for ranked/ordered content
 * Great for "Best of" lists that AI loves to cite
 */
interface RankedListSchemaProps {
  name: string;
  description: string;
  url: string;
  items: { name: string; url?: string; description?: string }[];
}

export function generateRankedListSchema(props: RankedListSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': props.name,
    'description': props.description,
    'url': props.url,
    'numberOfItems': props.items.length,
    'itemListOrder': 'https://schema.org/ItemListOrderDescending',
    'itemListElement': props.items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      ...(item.url && { 'url': item.url }),
      ...(item.description && { 'description': item.description }),
    })),
  };
}

/**
 * Tech Article Schema - Enhanced for technical content
 * Better for how-to guides and technical documentation
 */
interface TechArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  dependencies?: string[];
  proficiencyLevel?: 'Beginner' | 'Intermediate' | 'Expert';
}

export function generateTechArticleSchema(props: TechArticleSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': props.headline,
    'description': props.description,
    'url': props.url,
    'datePublished': props.datePublished,
    'dateModified': props.dateModified,
    'author': {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    'publisher': defaultPublisher,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': props.url,
    },
    ...(props.proficiencyLevel && { 'proficiencyLevel': props.proficiencyLevel }),
    ...(props.dependencies && { 'dependencies': props.dependencies.join(', ') }),
  };
}

/**
 * AI-Optimized Speakable Schema
 * For voice search and AI assistant responses
 */
interface AISpeakableSchemaProps {
  url: string;
  headline: string;
  description: string;
  mainContentSelector?: string;
  summarySelector?: string;
}

export function generateAISpeakableSchema(props: AISpeakableSchemaProps): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': props.url,
    'url': props.url,
    'name': props.headline,
    'description': props.description,
    'inLanguage': 'en-US',
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': [
        props.mainContentSelector || '[data-speakable="true"]',
        props.summarySelector || '[data-aio="tldr"]',
        '[data-aio="direct-answer"]',
        '[data-aio="key-takeaway"]',
        'h1',
        '.speakable-content',
      ],
    },
    'publisher': {
      '@id': `${siteConfig.url}/#organization`,
    },
    'isPartOf': {
      '@id': `${siteConfig.url}/#website`,
    },
  };
}

/**
 * Knowledge Graph Optimization - Full entity representation
 * Maximizes chances of Knowledge Panel appearance
 */
export function generateKnowledgeGraphSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    'name': siteConfig.name,
    'legalName': siteConfig.legalName,
    'alternateName': siteConfig.alternateName,
    'url': siteConfig.url,
    'logo': {
      '@type': 'ImageObject',
      '@id': `${siteConfig.url}/#logo`,
      'url': `${siteConfig.url}/IPTV-Provider.png`,
      'contentUrl': `${siteConfig.url}/IPTV-Provider.png`,
      'width': 512,
      'height': 512,
      'caption': siteConfig.name,
    },
    'image': {
      '@id': `${siteConfig.url}/#logo`,
    },
    'description': siteConfig.description,
    'foundingDate': siteConfig.foundingDate,
    'slogan': siteConfig.slogan,

    // Detailed founder info
    'founder': {
      '@type': 'Person',
      '@id': `${siteConfig.url}/team#${siteConfig.founder.id}`,
      'name': siteConfig.founder.name,
      'jobTitle': siteConfig.founder.role,
      'worksFor': {
        '@id': `${siteConfig.url}/#organization`,
      },
    },

    // Contact and location
    'email': siteConfig.links.email,
    'telephone': siteConfig.telephone,
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'email': siteConfig.links.email,
      'telephone': siteConfig.telephone,
      'availableLanguage': ['English', 'French', 'Spanish', 'Arabic'],
      'areaServed': 'Worldwide',
      'hoursAvailable': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59',
      },
    },

    // Service area
    'areaServed': {
      '@type': 'Place',
      'name': 'Worldwide',
    },

    // Business details
    'numberOfEmployees': {
      '@type': 'QuantitativeValue',
      'value': siteConfig.numberOfEmployees,
    },
    'priceRange': siteConfig.priceRange,

    // Knowledge and expertise
    'knowsAbout': [
      'IPTV Streaming',
      'Internet Television',
      'Live TV Streaming',
      'Video on Demand',
      'Smart TV Applications',
      'Cord-Cutting Solutions',
      'Streaming Media Technology',
      'OTT Services',
    ],

    // What we offer
    'makesOffer': {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        '@id': `${siteConfig.url}/#service`,
        'name': 'IPTV Streaming Service',
      },
    },

    // Awards and recognition
    'award': siteConfig.awards,

    // Aggregate rating
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '15847',
      'bestRating': '5',
      'worstRating': '1',
    },

    // Social and authoritative links
    'sameAs': [
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.youtube,
      siteConfig.links.linkedin,
      siteConfig.authoritativeSources.trustpilot,
    ].filter(Boolean),

    // Parent website
    'parentOrganization': undefined,
    'subOrganization': undefined,
  };
}

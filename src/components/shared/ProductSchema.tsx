
import type { FC } from 'react';

interface ProductSchemaProps {
  name: string;
  price: string;
  rating: number;
  reviewCount?: number;
  description?: string;
  brandName?: string;
  sku?: string;
  imageUrl?: string;
}

/**
 * A component to render JSON-LD structured data for a Product.
 * It uses dangerouslySetInnerHTML to safely inject the script tag
 * in Next.js without causing hydration mismatches.
 * @param {ProductSchemaProps} props - The product data to be rendered.
 */
const ProductSchema: FC<ProductSchemaProps> = ({
  name,
  price,
  rating,
  reviewCount = 89, // Default review count if not provided
  description = `High-quality ${name} available now.`,
  brandName = "IPTV Provider",
  sku = `WIDGET-${name.toUpperCase().replace(/\s/g, '-')}`,
  imageUrl = "/og-image.jpg",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "sku": sku,
    "image": imageUrl,
    "brand": {
        "@type": "Brand",
        "name": brandName
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.iptvprovider.me/pricing"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;

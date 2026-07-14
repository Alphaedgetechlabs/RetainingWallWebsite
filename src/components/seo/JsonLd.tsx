import { Helmet } from "react-helmet-async";
import tradeConfig from "@/data/tradeConfig.json";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const JsonLd = ({ data }: JsonLdProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);

// Organization schema - use site-wide
export const OrganizationJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: tradeConfig.organization.name,
    legalName: tradeConfig.organization.legalName,
    url: tradeConfig.url,
    logo: `${tradeConfig.url}/og-image.png`,
    foundingDate: tradeConfig.organization.foundingDate,
    description: tradeConfig.organization.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: tradeConfig.phone,
      contactType: "customer service",
      email: tradeConfig.email,
      areaServed: tradeConfig.organization.areaServed,
      availableLanguage: "English",
    },
    sameAs: [],
  };
  return <JsonLd data={data} />;
};

// LocalBusiness schema
export const LocalBusinessJsonLd = ({ city, state }: { city?: string; state?: string }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: city ? `${tradeConfig.brandName} ${city}` : tradeConfig.brandName,
    url: tradeConfig.url,
    telephone: tradeConfig.phone,
    email: tradeConfig.email,
    description: tradeConfig.organization.description,
    areaServed: city
      ? { "@type": "City", name: city, containedInPlace: { "@type": "State", name: state } }
      : { "@type": "Country", name: "Australia" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.78",
      reviewCount: "10000",
      bestRating: "5",
    },
  };
  return <JsonLd data={data} />;
};

// Service schema
export const ServiceJsonLd = ({ name, description, price }: { name: string; description: string; price?: string }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: tradeConfig.brandName,
      url: tradeConfig.url,
    },
    areaServed: { "@type": "Country", name: "Australia" },
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.replace(/[^0-9.]/g, ""),
        priceCurrency: "AUD",
        description: `Starting from ${price}`,
      },
    }),
  };
  return <JsonLd data={data} />;
};

// FAQ schema
export const FAQJsonLd = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
};

// Article schema
export const ArticleJsonLd = ({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${tradeConfig.url}/guide/${slug}`,
    datePublished: datePublished || "2024-01-01",
    dateModified: dateModified || "2025-01-01",
    author: {
      "@type": "Organization",
      name: tradeConfig.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: tradeConfig.brandName,
      url: tradeConfig.url,
    },
  };
  return <JsonLd data={data} />;
};

export default JsonLd;

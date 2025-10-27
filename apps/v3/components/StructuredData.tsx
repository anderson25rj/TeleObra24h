import Script from 'next/script';

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name = 'TeleObra24h',
  description = 'Marketplace de profissionais da construção civil na Região dos Lagos - RJ',
  url = 'https://teleobra24h.com.br',
  logo = 'https://teleobra24h.com.br/logo.png',
  contactPoint = {
    telephone: '+55-22-99999-9999',
    contactType: 'customer service',
    areaServed: 'BR-RJ',
    availableLanguage: 'Portuguese',
  },
  sameAs = [
    'https://www.facebook.com/teleobra24h',
    'https://www.instagram.com/teleobra24h',
    'https://www.linkedin.com/company/teleobra24h',
  ],
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
    },
    contactPoint,
    sameAs,
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  priceRange?: string;
  openingHours?: string[];
}

export function LocalBusinessSchema({
  name = 'TeleObra24h',
  description = 'Marketplace de profissionais da construção civil',
  address = {
    streetAddress: 'Região dos Lagos',
    addressLocality: 'São Pedro da Aldeia',
    addressRegion: 'RJ',
    postalCode: '28940-000',
    addressCountry: 'BR',
  },
  geo = {
    latitude: -22.8431,
    longitude: -42.1015,
  },
  telephone = '+55-22-99999-9999',
  priceRange = '$$',
  openingHours = ['Mo-Su 00:00-23:59'],
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    telephone,
    priceRange,
    openingHoursSpecification: openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0].split('-'),
      opens: '00:00',
      closes: '23:59',
    })),
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

export function ServiceSchema({
  name,
  description,
  provider = 'TeleObra24h',
  areaServed = 'Região dos Lagos, Rio de Janeiro, Brasil',
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed: {
      '@type': 'Place',
      name: areaServed,
    },
    serviceType,
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  telephone?: string;
  address?: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  telephone,
  address,
  aggregateRating,
}: PersonSchemaProps) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image,
    telephone,
  };

  if (address) {
    schema.address = {
      '@type': 'PostalAddress',
      ...address,
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OfferSchemaProps {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  url?: string;
}

export function OfferSchema({
  name,
  description,
  price,
  priceCurrency = 'BRL',
  availability = 'https://schema.org/InStock',
  validFrom,
  url,
}: OfferSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency,
    availability,
    validFrom,
    url,
  };

  return (
    <Script
      id="offer-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

export function WebSiteSchema({
  name = 'TeleObra24h',
  url = 'https://teleobra24h.com.br',
  potentialAction = {
    target: 'https://teleobra24h.com.br/busca?q={search_term_string}',
    queryInput: 'required name=search_term_string',
  },
}: WebSiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: potentialAction.target,
      'query-input': potentialAction.queryInput,
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

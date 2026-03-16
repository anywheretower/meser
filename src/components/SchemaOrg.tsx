export default function SchemaOrg() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Meser",
    url: "https://www.meser.cl",
    logo: "https://www.meser.cl/favicon.ico",
    description:
      "Climatización integral para hogares en Santiago. Diagnóstico gratuito, precio cerrado, instalación estética.",
    telephone: "+56982351110",
    email: "contacto@meser.cl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Los Militares 5620, Of. 905",
      addressLocality: "Las Condes",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    knowsAbout: [
      "aire acondicionado",
      "climatización integral",
      "instalación split",
      "mantención aire acondicionado",
      "Midea",
      "Samsung Wind-Free",
      "Anwo",
      "BTU",
      "HVAC residencial",
      "multi split",
      "bomba de calor",
    ],
    areaServed: {
      "@type": "State",
      name: "Región Metropolitana de Santiago",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61575725826039",
      "https://instagram.com/meser_spa",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Meser - Climatización Integral",
    url: "https://www.meser.cl",
    telephone: "+56982351110",
    email: "contacto@meser.cl",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Los Militares 5620, Of. 905",
      addressLocality: "Las Condes",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4103,
      longitude: -70.5876,
    },
    areaServed: {
      "@type": "State",
      name: "Región Metropolitana de Santiago",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
      bestRating: "5",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Climatización",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de Aire Acondicionado",
            description:
              "Instalación profesional con canaletas ocultas y acabados estéticos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mantención de Aire Acondicionado",
            description:
              "Limpieza profunda, revisión técnica y optimización de rendimiento",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Climatización Integral",
            description:
              "Diagnóstico gratuito, precio cerrado todo incluido y garantía total",
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Meser",
    url: "https://www.meser.cl",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose-meser p:first-of-type", ".tip-box"],
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.meser.cl/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

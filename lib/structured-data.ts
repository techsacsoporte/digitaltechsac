import { SITE_CONFIG, PRICING, SOCIAL, IMAGES, WHATSAPP } from './constants';

// Schema 1: Producto con oferta — Google Shopping / Rich Results
export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Licencia Canva Pro EDU - 1 Año Colombia',
    description:
      'Licencia oficial Canva Pro EDU con duración de 1 año (365 días). Incluye IA generativa, quitafondos automático, 100+ millones de recursos premium, kit de marca, redimensionamiento mágico y 100GB de almacenamiento en la nube. Activación inmediata en tu correo personal.',
    image: IMAGES.og,
    sku: 'CANVA-PRO-EDU-1Y-CO',
    mpn: 'DT-CANVA-365',
    brand: {
      '@type': 'Brand',
      name: 'Canva',
    },
    category: 'Software > Diseño Gráfico',
    offers: {
      '@type': 'Offer',
      url: SITE_CONFIG.url,
      priceCurrency: PRICING.currency,
      price: PRICING.current.toString(),
      priceValidUntil: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'CO',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'COP',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'MIN',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 5,
            unitCode: 'MIN',
          },
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'CO',
        },
      },
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '512',
      ratingCount: '489',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Camilo R.' },
        reviewBody: 'Excelente servicio. Me activaron la cuenta antes de pagar. Ahorro gigante y funciona perfecto.',
        datePublished: '2025-08-15',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Andrea M.' },
        reviewBody: 'Las herramientas de IA son increíbles. Soporte por WhatsApp super rápido.',
        datePublished: '2025-09-22',
      },
    ],
  };
}

// Schema 2: Organización — Knowledge Panel
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    alternateName: 'DT - Digital TechSac Colombia',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.longDescription,
    foundingDate: '2024',
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${WHATSAPP.number}`,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: 'CO',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    knowsLanguage: 'es',
    slogan: 'Soluciones digitales accesibles para potenciar tu creatividad',
  };
}

// Schema 3: FAQ — Google Rich Snippets de preguntas
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Schema 4: Breadcrumb — Navegación
export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: SITE_CONFIG.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canva Pro EDU Colombia - 1 Año',
        item: `${SITE_CONFIG.url}/#pricing`,
      },
    ],
  };
}

// Schema 5: WebSite — Sitelinks / Searchbox
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    alternateName: 'Digital TechSac Canva Pro Colombia',
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: 'es-CO',
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

// Schema 6: WebPage — Información de la página
export function getWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Canva Pro EDU 1 Año por $${PRICING.current.toLocaleString('es-CO')} COP | ${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    inLanguage: 'es-CO',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      '@type': 'Thing',
      name: 'Canva Pro EDU',
      description: 'Software de diseño gráfico profesional con inteligencia artificial',
    },
    specialty: 'Licencias de software de diseño gráfico para Colombia',
    significantLink: `https://wa.me/${WHATSAPP.number}`,
    dateModified: new Date().toISOString().split('T')[0],
  };
}

// Schema 8: SoftwareApplication — Rich results de software
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Canva Pro EDU',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web, Windows, macOS, iOS, Android',
    description: 'Herramienta profesional de diseño gráfico con inteligencia artificial, quitafondos automático, +100 millones de recursos premium y kit de marca.',
    offers: {
      '@type': 'Offer',
      price: PRICING.current.toString(),
      priceCurrency: PRICING.currency,
      url: SITE_CONFIG.url,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      reviewCount: '512',
    },
    screenshot: IMAGES.hero,
    featureList: 'IA Generativa, Quitafondos automático, 100M+ recursos premium, Kit de marca, Redimensionamiento mágico, 100GB almacenamiento',
  };
}

// Schema 9: HowTo — Rich snippets de "cómo comprar"
export function getHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo comprar Canva Pro EDU en Colombia por $19.900 COP',
    description: 'Proceso 100% seguro para activar Canva Pro EDU. Activamos primero, pagas después.',
    totalTime: 'PT5M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'COP',
      value: PRICING.current.toString(),
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Escríbenos por WhatsApp',
        text: 'Haz clic en el botón de WhatsApp y envíanos tu correo electrónico de Canva. Respondemos en menos de 5 minutos.',
        url: `https://wa.me/${WHATSAPP.number}`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Te activamos Canva Pro',
        text: 'Activamos la licencia Pro EDU directamente en tu cuenta existente. No necesitas crear otra cuenta ni cambiar contraseña.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verificas que funcione',
        text: 'Entras a tu Canva y verificas que todas las funciones premium estén activas: quitafondos, IA, plantillas y más.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Pagas solo si estás satisfecho',
        text: 'Una vez confirmes que todo funciona perfecto, realizas el pago de $19.900 COP por Nequi, DaviPlata o Bancolombia.',
      },
    ],
  };
}

// Schema 7: LocalBusiness / Service — Para Google Maps y búsquedas locales
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.longDescription,
    priceRange: '$',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    serviceType: 'Venta de licencias de software de diseño',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Licencias Canva Pro',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Licencia Canva Pro EDU 1 Año',
            description: 'Activación inmediata de Canva Pro EDU por 365 días',
          },
          price: PRICING.current.toString(),
          priceCurrency: PRICING.currency,
        },
      ],
    },
  };
}

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG, PRICING, IMAGES, FAQS } from '@/lib/constants';
import {
  getProductSchema,
  getOrganizationSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getWebSiteSchema,
  getWebPageSchema,
  getLocalBusinessSchema,
  getSoftwareApplicationSchema,
  getHowToSchema,
} from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `Diseña como Profesional por $${PRICING.current.toLocaleString('es-CO')} COP/año | Canva Pro EDU Colombia | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.longDescription,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: 'technology',
  classification: 'Software de Diseño Gráfico',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `🎨 Diseña como Profesional x $${PRICING.current.toLocaleString('es-CO')} COP/año | Canva Pro EDU | ${SITE_CONFIG.name}`,
    description:
      `🔥 ¡Activa primero, paga después! Licencia Canva Pro EDU 1 año completo por $${PRICING.current.toLocaleString('es-CO')} COP. IA generativa, quitafondos, +100M recursos premium. Ahorra ${PRICING.discountPercent}%. Nequi, DaviPlata y Bancolombia. Soporte 24/7.`,
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: `Diseña como Profesional - Canva Pro EDU $${PRICING.current.toLocaleString('es-CO')} COP - ${SITE_CONFIG.name} Colombia`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `🎨 Diseña como Profesional $${PRICING.current.toLocaleString('es-CO')} COP/año | Canva Pro EDU | ${SITE_CONFIG.name}`,
    description: `Activa primero, paga después. Canva Pro EDU 1 año: IA, quitafondos, +100M recursos premium. Ahorra ${PRICING.discountPercent}%. ¡Activa hoy!`,
    images: [IMAGES.og],
    creator: '@digitaltechsac',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'es-CO': SITE_CONFIG.url,
      'es': SITE_CONFIG.url,
    },
  },
  other: {
    'geo.region': 'CO',
    'geo.placename': 'Colombia',
    'content-language': 'es-CO',
    'revisit-after': '3 days',
    'rating': 'general',
    'distribution': 'global',
  },
};

// 9 Schemas JSON-LD para máximo SEO
const schemas = [
  getProductSchema(),
  getOrganizationSchema(),
  getFAQSchema(FAQS),
  getBreadcrumbSchema(),
  getWebSiteSchema(),
  getWebPageSchema(),
  getLocalBusinessSchema(),
  getSoftwareApplicationSchema(),
  getHowToSchema(),
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${inter.variable} scroll-smooth`} dir="ltr">
      <head>
        {/* Preconnect a dominios de imágenes */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* 7 Schemas JSON-LD para máxima cobertura SEO */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans flex flex-col min-h-screen antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

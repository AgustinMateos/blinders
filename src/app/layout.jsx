// src/app/layout.jsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { SITE, SERVICES, absoluteUrl } from "@/lib/seo";

import { Archivo, Big_Shoulders, DM_Mono } from 'next/font/google';  // ← prueba Big_Shoulders sin _Display

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['100','500', '900'],  // reduce si podés
  display: 'swap',
  adjustFontFallback: false,
});

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  variable: '--font-big-shoulders',
  weight: ['100', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '500'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: SITE.locale,
    url: '/',
    title: SITE.title,
    description: SITE.description,
    images: [{ url: SITE.defaultOgImage, width: 1280, height: 989, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [SITE.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  // Google Site Verification
  verification: {
    google: "kSuw1kcLdD1gz5vqGBOsuGPNUEjG9h38t56dqwR6bFM",
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      logo: absoluteUrl('/Subtract.svg'),
      image: absoluteUrl(SITE.defaultOgImage),
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: { '@type': 'Country', name: 'Argentina' },
      knowsLanguage: 'es',
      sameAs: SITE.socials,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'ventas',
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: 'AR',
        availableLanguage: 'es',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios audiovisuales',
        itemListElement: Object.values(SERVICES).map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.serviceType,
            description: s.description,
            url: absoluteUrl(`/proyectos/${s.slug}`),
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'es-AR',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body
        className={`
          ${archivo.variable}
          ${bigShoulders.variable}
          ${dmMono.variable}
          bg-[#0a0a0a] text-white antialiased
        `}
      >
        <JsonLd data={organizationJsonLd} />
        <header><Navbar /></header>
        {children}
      </body>
    </html>
  );
}
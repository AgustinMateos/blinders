import JsonLd from '@/components/JsonLd';
import { SITE, SERVICES, absoluteUrl } from '@/lib/seo';

// /blinders es un client component, por eso la metadata vive en este layout.
export const metadata = {
  title: 'Nosotros: productora audiovisual',
  description:
    'Somos Blinders, una productora audiovisual argentina. Un solo equipo, dos formas de crear: Blinders Art para videoclips y Blinders Corp para videos corporativos.',
  alternates: { canonical: '/blinders' },
  openGraph: {
    url: '/blinders',
    title: 'Nosotros | Blinders Audiovisual',
    description:
      'Un solo equipo, dos formas de crear: videoclips para artistas y videos corporativos para marcas.',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${absoluteUrl('/blinders')}#webpage`,
      url: absoluteUrl('/blinders'),
      name: 'Nosotros | Blinders Audiovisual',
      inLanguage: 'es-AR',
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#organization` },
    },
    ...Object.values(SERVICES).map((s) => ({
      '@type': 'Service',
      name: s.serviceType,
      serviceType: s.serviceType,
      description: s.description,
      url: absoluteUrl(`/proyectos/${s.slug}`),
      areaServed: { '@type': 'Country', name: 'Argentina' },
      provider: { '@id': `${SITE.url}/#organization` },
    })),
  ],
};

export default function BlindersLayout({ children }) {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      {children}
    </>
  );
}

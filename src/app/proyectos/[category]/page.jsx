import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/components/ProjectsData';
import JsonLd from '@/components/JsonLd';
import { BigShoulders } from '@/app/ui/fonts';
import { SITE, SERVICES, absoluteUrl, cleanTitle } from '@/lib/seo';

// Solo existen /proyectos/art y /proyectos/corp
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SERVICES).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const service = SERVICES[category];
  if (!service) return {};

  const path = `/proyectos/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${service.title} | ${SITE.name}`,
      description: service.description,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const service = SERVICES[category];
  if (!service) notFound();

  const list = projects[category] || [];
  const path = `/proyectos/${service.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: service.title,
        description: service.description,
        inLanguage: 'es-AR',
        isPartOf: { '@id': `${SITE.url}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: list.map((project, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absoluteUrl(`${path}/${project.id}`),
            name: cleanTitle(project.title),
          })),
        },
      },
      {
        '@type': 'Service',
        name: service.serviceType,
        serviceType: service.serviceType,
        description: service.description,
        url: absoluteUrl(path),
        areaServed: { '@type': 'Country', name: 'Argentina' },
        provider: { '@id': `${SITE.url}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Proyectos', item: absoluteUrl('/proyectos') },
          { '@type': 'ListItem', position: 3, name: service.label, item: absoluteUrl(path) },
        ],
      },
    ],
  };

  return (
    <div className="bg-black pt-[80px]">
      <JsonLd data={jsonLd} />

      {/* Header con título */}
      <div className="w-full pl-[10px] pt-[24px] md:mx-1 min-h-[100px] md:min-h-[139px] border-[#222626] border-t-[0.5px] border-b-[0.5px] flex items-center justify-start">
        <h1
          style={{ fontFamily: 'Big Shoulders, sans-serif', fontWeight: '700' }}
          className="text-[#FFFFFF] font-bold text-[32px] md:text-[64px] leading-[100%] tracking-[0] uppercase py-4"
        >
          {service.h1}
        </h1>
      </div>

      {/* Texto de presentación del servicio */}
      <div className="px-[15px] md:px-[30px] py-8 max-w-[900px] space-y-4 font-archivo text-[#EBEBEB] text-[16px] leading-[150%]">
        {service.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link
          href="/contacto"
          className="inline-block font-dm-mono uppercase text-white border-b border-white pb-1"
        >
          {service.ctaLabel}
        </Link>
      </div>

      {/* Grid de proyectos */}
      <h2 className="sr-only">
        Proyectos de {service.label.toLowerCase()} de Blinders Audiovisual
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {list.map((project) => (
          <Link key={project.id} href={`${path}/${project.id}`}>
            <div
              className="relative cursor-pointer bg-cover bg-center h-[460px] group transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 50%, #000000 100%), url(${project.cover})`,
              }}
            >
              <div className="absolute inset-0 bg-[#000000cc] opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[12px] transition-all duration-300" />

              <p className="absolute p-[15px] pb-6 md:pb-4 md:p-0 uppercase font-dm-mono bottom-[80px] md:bottom-[95px] left-3 right-0 text-amber-50 py-2 z-10">
                {project.tipo}
              </p>

              <h3 className="absolute p-[15px] md:p-0 font-black bottom-[30px] h-[70px] left-3 right-0 font-archivo text-[#FFFFFF] text-[24px] leading-[100%] tracking-[0] py-2 z-10">
                {project.title}
              </h3>

              <div className="absolute top-1/2 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className={`${BigShoulders.className} uppercase text-white text-lg font-bold`}>
                  Ver
                </p>
                <Image src="/flechaup.svg" width={30} height={30} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

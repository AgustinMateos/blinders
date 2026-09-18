// app/proyectos/[category]/[projectId]/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/components/ProjectsData';
import VideoPlayer from '@/components/VideoPlayer';
import JsonLd from '@/components/JsonLd';
import {
  SITE,
  SERVICES,
  absoluteUrl,
  cleanTitle,
  formatTipo,
  getVideoInfo,
} from '@/lib/seo';

// Solo existen los proyectos cargados en ProjectsData
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projects).flatMap((category) =>
    projects[category].map((project) => ({ category, projectId: project.id }))
  );
}

function getProject(category, projectId) {
  return projects[category]?.find((p) => p.id === projectId);
}

// Descripción única por proyecto (la usan la meta description y el texto visible)
function buildDescription(category, project) {
  const title = cleanTitle(project.title);
  if (category === 'art') {
    return `Mirá ${title}, ${project.tipo.toLowerCase()} producido por Blinders Audiovisual. Videoclips y contenido audiovisual para artistas en Argentina.`;
  }
  return `${formatTipo(project.tipo)}: ${title}. Producción de videos corporativos y contenido de marca por Blinders Audiovisual en Argentina.`;
}

export async function generateMetadata({ params }) {
  const { category, projectId } = await params;
  const project = getProject(category, projectId);
  if (!project) return { title: 'Proyecto no encontrado', robots: { index: false } };

  const title = `${cleanTitle(project.title)} – ${formatTipo(project.tipo)}`;
  const description = buildDescription(category, project);
  const path = `/proyectos/${category}/${projectId}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'video.other',
      url: path,
      title,
      description,
      images: [{ url: project.cover, alt: cleanTitle(project.title) }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.cover],
    },
  };
}

export default async function VideoPage({ params }) {
  const { category, projectId } = await params;
  const project = getProject(category, projectId);
  if (!project) notFound();

  // Logo según categoría
  const logoSrc = category === 'art' ? '/SubtractRed2.svg' : '/Subtract2.svg';
  const logoAlt = category === 'art' ? 'Blinders Art' : 'Blinders Corp';

  const { type: videoType, id: videoId } = getVideoInfo(project.videoUrl);
  const thumbnail = project.cover;

  if (!videoId || !videoType) {
    return (
      <div className="text-white pt-[80px] text-center min-h-screen bg-black">
        Error: No se pudo extraer el ID del video. Verifica la URL: {project.videoUrl}
      </div>
    );
  }

  const service = SERVICES[category];
  const title = cleanTitle(project.title);
  const description = buildDescription(category, project);
  const path = `/proyectos/${category}/${projectId}`;

  const embedUrl =
    videoType === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}`
      : `https://player.vimeo.com/video/${videoId}`;
  const contentUrl =
    videoType === 'youtube'
      ? `https://www.youtube.com/watch?v=${videoId}`
      : `https://vimeo.com/${videoId}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        name: title,
        description,
        thumbnailUrl: [absoluteUrl(project.cover)],
        embedUrl,
        contentUrl,
        inLanguage: 'es',
        // uploadDate es obligatorio para los resultados enriquecidos de video de Google.
        // Se incluye apenas se cargue `uploadDate: '2025-01-31'` en el proyecto de ProjectsData.
        ...(project.uploadDate && { uploadDate: project.uploadDate }),
        publisher: { '@id': `${SITE.url}/#organization` },
        mainEntityOfPage: absoluteUrl(path),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Proyectos', item: absoluteUrl('/proyectos') },
          { '@type': 'ListItem', position: 3, name: service.label, item: absoluteUrl(`/proyectos/${category}`) },
          { '@type': 'ListItem', position: 4, name: title, item: absoluteUrl(path) },
        ],
      },
    ],
  };

  return (
    <div className="pt-[80px] bg-black min-h-screen">
      <JsonLd data={jsonLd} />

      {/* Título + Logo */}
      <div className="border-t border-b border-[#262626] h-[120px] md:h-[139px] bg-black flex items-center justify-between px-4 md:px-8 overflow-hidden">
        <h1
          className="text-2xl md:text-4xl py-8 text-white tracking-wider"
          style={{
            fontFamily: 'Big Shoulders, sans-serif',
            fontWeight: '700',
          }}
        >
          {project.title}
        </h1>

        <div className="h-full flex items-end w-[82px] border-l border-r border-[#262626]">
          <div
            className="text-[10px] flex-shrink-0 flex uppercase font-black tracking-[0.4em] p-2 text-white [writing-mode:vertical-rl] rotate-180"
            style={{ fontFamily: "'Big Shoulders', sans-serif" }}
          >
            <div className="rotate-180 flex items-center justify-center">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={82}
                height={139}
                className="w-12 h-12 md:w-10 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Player (componente cliente) */}
      <VideoPlayer
        project={project}
        videoType={videoType}
        videoId={videoId}
        thumbnail={thumbnail}
      />

      {/* Texto + enlaces internos hacia la página del servicio y contacto */}
      {/* <div className="px-4 md:px-8 py-8 max-w-[900px] space-y-4 font-archivo text-[#EBEBEB] text-[16px] leading-[150%]">
        <p>{description}</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-dm-mono uppercase text-white">
          <Link href={`/proyectos/${category}`} className="border-b border-white pb-1">
            {category === 'art' ? 'Más videoclips para artistas' : 'Más videos corporativos'}
          </Link>
          <Link href="/contacto" className="border-b border-white pb-1">
            Pedí tu presupuesto
          </Link>
        </div>
      </div> */}
    </div>
  );
}

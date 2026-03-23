// app/proyectos/[category]/[projectId]/page.jsx
// (o el path exacto que uses)

'use client'; // ← Solo si querés que TODO sea client-side (no recomendado para pages). Mejor: separa el player interactivo

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '../../../../components/ProjectsData'; // ajusta la ruta si es necesario

export default async function VideoPage({ params }) {
  // ¡Await aquí! Esto es clave en Next.js 15+
  const resolvedParams = await params;
  const { category, projectId } = resolvedParams;

  const project = projects[category]?.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-white pt-[80px] text-center min-h-screen bg-black">
        Proyecto no encontrado
      </div>
    );
  }

  // Logo según categoría
  const logoSrc = category === 'art' ? '/SubtractRed2.svg' : '/Subtract2.svg';
  const logoAlt = category === 'art' ? 'Artista' : 'Corporativo';

  // Extraer tipo e ID del video
 const getVideoInfo = (url) => {
  if (!url) return { type: null, id: null };

  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const regex = new RegExp(
      "(?:youtube(?:-nocookie)?\\.com\\/(?:[^/\\n\\s]+/\\S+\\/|(?:v|e(?:mbed)?)\\/|\\S*?[?&]v=)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})",
      "i"
    );
    const match = url.match(regex);
    return { type: 'youtube', id: match ? match[1] : null };
  }

  // Vimeo
  if (url.includes('vimeo.com')) {
    const regex = /vimeo\.com\/(?:video\/)?(\d+)/i;
    const match = url.match(regex);
    return { type: 'vimeo', id: match ? match[1] : null };
  }

  return { type: null, id: null };
};

  const { type: videoType, id: videoId } = getVideoInfo(project.videoUrl);
  const thumbnail = project.cover;

  if (!videoId || !videoType) {
    return (
      <div className="text-white pt-[80px] text-center min-h-screen bg-black">
        Error: No se pudo extraer el ID del video. Verifica la URL: {project.videoUrl}
      </div>
    );
  }

  // Como useState no puede ir en async function (server component), 
  // movemos la parte interactiva del video a un componente cliente separado
  return (
    <div className="pt-[80px] bg-black min-h-screen">
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
    </div>
  );
}

// Componente cliente para el video (con useState)
function VideoPlayer({ project, videoType, videoId, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-8xl mx-auto mt-10 bg-black overflow-hidden shadow-2xl aspect-video">
      {!isPlaying ? (
        <div
          className="absolute inset-0 cursor-pointer flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={() => setIsPlaying(true)}
        >
          <div className="z-10 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <Image
              src="/play.svg"
              alt="Play"
              width={80}
              height={80}
              className="w-12 h-12 md:w-20 md:h-20 ml-2"
            />
          </div>
        </div>
      ) : (
        <>
          {videoType === 'youtube' && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {videoType === 'vimeo' && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://player.vimeo.com/video/${videoId}?autoplay=1&autopause=0&title=0&byline=0&portrait=0`}
              title={project.title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            />
          )}
        </>
      )}
    </div>
  );
}
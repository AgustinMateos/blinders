'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react'; // ← Asegúrate de importar React
import { projects } from '../../../../components/ProjectsData';

export default function VideoPage({ params }) {
  // Desestructurar params usando React.use()
  const { category, projectId } = React.use(params);
  
  const project = projects[category]?.find((p) => p.id === projectId);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) {
    return <div className="text-white pt-[80px] text-center">Proyecto no encontrado</div>;
  }

  // Extraer ID del video de YouTube
  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(project.videoUrl);
  const thumbnail = project.cover;

  return (
    <div className="pt-[80px]   bg-black min-h-screen">
      {/* Título */}
      <div className="w-full p-4 mx-auto max-h-[100px] md:max-h-[150px] mb-10 mt-5 border-t-2 border-b-2 border-t-[#262626] border-b-[#262626] flex items-center py-2 md:py-7">
        <h1 className="text-[22px] md:text-[24px] font-bold text-white">
          {project.title}
        </h1>
      </div>

      {/* Contenedor del video */}
      <div className="relative w-full h-[200px] md:h-[650px] bg-black overflow-hidden  shadow-2xl">
        {/* Portada personalizada */}
        {!isPlaying && (
          <div
            className="absolute inset-0 cursor-pointer flex items-center justify-center bg-cover bg-center"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src={thumbnail}
              alt={`Portada de ${project.title}`}
              fill
              className="object-cover"
              priority
            />

            {/* Botón Play */}
            <div className="absolute z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center  transition-all duration-300 shadow-lg">
              <Image
                src="/play.svg"
                alt="Reproducir"
                width={98}
                height={98}
                className="ml-1"
              />
            </div>
          </div>
        )}

        {/* iframe del video */}
        {isPlaying && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </div>
    </div>
  );
}
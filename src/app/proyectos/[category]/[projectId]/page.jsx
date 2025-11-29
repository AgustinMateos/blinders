'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react'; // ← Necesario para React.use()
import { projects } from '../../../../components/ProjectsData';

export default function VideoPage({ params }) {
  // CORRECTO: desestructuramos la promesa con React.use()
  const { category, projectId } = React.use(params);

  const project = projects[category]?.find((p) => p.id === projectId);
  const [isPlaying, setIsPlaying] = useState(false);

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

  // Extraer ID de YouTube
  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(project.videoUrl);
  const thumbnail = project.cover;

  return (
    <div className="pt-[80px] bg-black min-h-screen">
      {/* Título + Logo */}
      <div className="w-full max-w-8xl mx-auto px-4 border-t-2 border-b-2 border-[#262626] flex items-center justify-between gap-6">
        <h1 className="text-2xl md:text-4xl  py-8  text-white tracking-wider"style={{
            fontFamily: 'Big Shoulders, sans-serif',
            fontWeight: '700',
          }}>
          {project.title}
        </h1>

        <div className="flex-shrink-0 h-auto">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={82}
            height={139}
            className="w-12 h-12 md:w-14 md:h-24 object-cover "
          />
        </div>
      </div>

      {/* Video */}
      <div className="relative w-full max-w-8xl mx-auto mt-10 bg-black overflow-hidden shadow-2xl aspect-video">
        {!isPlaying ? (
          <div
            className="absolute inset-0 cursor-pointer flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="z-10 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center  ">
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
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
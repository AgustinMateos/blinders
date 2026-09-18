'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoPlayer({ project, videoType, videoId, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-8xl mx-auto mt-10 bg-black overflow-hidden shadow-2xl aspect-video">
      {!isPlaying ? (
        <div
          role="button"
          tabIndex={0}
          aria-label={`Reproducir ${project.title.trim()}`}
          className="absolute inset-0 cursor-pointer flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={() => setIsPlaying(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true);
          }}
        >
          <div className="z-10 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <Image
              src="/play.svg"
              alt="Reproducir video"
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

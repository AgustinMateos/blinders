'use client';

import { useState, useEffect } from 'react';
import { projects } from '../../components/ProjectsData';
import Link from 'next/link';
import Image from 'next/image';
import { BigShoulders } from '../ui/fonts';

export default function Proyectos() {
  const [selectedCategory, setSelectedCategory] = useState('art');

  // Leer el hash de la URL (#art o #corp) al cargar la página
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();

    if (hash === 'corp') {
      setSelectedCategory('corp');
    } else {
      // Por defecto 'art' (si es #art, vacío o cualquier otra cosa)
      setSelectedCategory('art');
    }
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Actualizar el hash en la URL sin recargar la página
    window.history.replaceState(
      null,
      '',
      `/proyectos#${category}`
    );
  };

  const currentProjects = projects[selectedCategory];
  const categoryLabel = selectedCategory === 'art' ? 'Artistas' : 'Empresas';

  return (
    <div className="bg-black pt-[80px]">
      {/* Header con título */}
      <div className="w-full pl-[10px] pt-[24px] md:mx-1 h-[100px] md:h-[139px] border-[#222626] border-t-[0.5px] border-b-[0.5px] flex items-center justify-start">
        <h1
          style={{
            fontFamily: 'Big Shoulders, sans-serif',
            fontWeight: '700',
          }}
          className="text-[#FFFFFF] font-bold text-[32px] md:text-[96px] leading-[100%] tracking-[0] uppercase"
        >
          Proyectos
        </h1>
        <div className="pl-[10px] md:pl-[40px]">
          <p
            style={{
              fontFamily: 'Big Shoulders, sans-serif',
              fontWeight: '700',
            }}
            className="text-[#262626] font-bold text-[32px] md:text-[96px] leading-[100%] tracking-[0] uppercase"
          >
            {categoryLabel}
          </p>
        </div>
      </div>

      {/* Botones de categoría */}
      <div className="flex h-auto space-x-4 ml-[15px] mt-[30px] mb-6">
        <button
          onClick={() => handleCategoryChange('art')}
          className={`font-dm-mono uppercase ${
            selectedCategory === 'art' ? 'text-white' : 'text-[#717171]'
          }`}
        >
          Artistas
        </button>
        <button
          onClick={() => handleCategoryChange('corp')}
          className={`font-dm-mono h-auto uppercase border-l-amber-50 pl-[20px] border-l-[2px] ${
            selectedCategory === 'corp' ? 'text-white' : 'text-[#717171]'
          }`}
        >
          Empresas
        </button>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {currentProjects.map((project) => (
          <Link
            key={project.id}
            href={`/proyectos/${selectedCategory}/${project.id}`}
          >
            <div
              className="relative cursor-pointer bg-cover bg-center h-[460px] group transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 50%, #000000 100%), url(${project.cover})`,
              }}
            >
              {/* Overlay al hacer hover */}
              <div className="absolute inset-0 bg-[#000000cc] opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[12px] transition-all duration-300" />

              {/* Tipo de proyecto */}
              <p className="absolute p-[15px] pb-6 md:pb-0 md:p-0 uppercase font-dm-mono bottom-[80px] md:bottom-[95px] left-3 right-0 text-amber-50 py-2 z-10">
                {project.tipo}
              </p>

              {/* Título del proyecto */}
              <p className="absolute p-[15px] md:p-0 font-black bottom-[30px] h-[70px] left-3 right-0 font-archivo text-[#FFFFFF] text-[24px] leading-[100%] tracking-[0] py-2 z-10">
                {project.title}
              </p>

              {/* Texto "Ver" en hover */}
              <div className="absolute top-1/2 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className={`${BigShoulders.className} uppercase text-white text-lg font-bold`}>
                  Ver
                </p>
                <Image
                  src="/flechaup.svg"
                  width={30}
                  height={30}
                  alt="flecha"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
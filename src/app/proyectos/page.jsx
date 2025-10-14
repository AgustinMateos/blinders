'use client';

import { useState } from 'react';
import { projects } from '../../components/ProjectsData'; // Adjust path
import Link from 'next/link';
import Image from 'next/image';
import { BigShoulders } from '../ui/fonts';

export default function Proyectos() {
  const [selectedCategory, setSelectedCategory] = useState('art');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const currentProjects = projects[selectedCategory];

  // Determine the category label to display
  const categoryLabel = selectedCategory === 'art' ? 'Artistas' : 'Empresas';

  return (
    <div className="bg-black pt-[80px]">
      <div className="w-full pl-[10px] mx-1 h-[100px] md:h-[139px] border-[#222626] border-t-[0.5px] border-b-[0.5px] flex items-center justify-start">
        <h1
          style={{
            fontFamily: 'Big Shoulders, sans-serif',
            fontWeight: '700',
          }}
          className="text-[#FFFFFF] font-bold text-[32px] md:text-[96px] leading-[100%] tracking-[0] uppercase"
        >
          Proyectos 
        </h1><div className='pl-[10px] md:pl-[40px]'><p style={{
            fontFamily: 'Big Shoulders, sans-serif',
            fontWeight: '700',
          }}
          className="text-[#262626] font-bold text-[32px] md:text-[96px] leading-[100%] tracking-[0] uppercase"
        >{categoryLabel}</p></div>
      </div>
      {/* Category buttons */}
      <div className="flex h-auto space-x-4 ml-[15px] mt-[30px]  mb-6">
        <button
          onClick={() => handleCategoryChange('art')}
          className={` font-dm-mono uppercase ${
            selectedCategory === 'art' ? 'text-white' : 'text-[#717171]'
          }`}
        >
          Artistas
        </button>
        <button
          onClick={() => handleCategoryChange('corp')}
          className={`font-dm-mono h-auto uppercase border-l-amber-50 pl-[20px] border-l-[2px]  ${
            selectedCategory === 'corp' ? 'text-white' : 'text-[#717171]'
          }`}
        >
          Empresas
        </button>
      </div>

      {/* Render covers */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {currentProjects.map((project) => (
          <Link key={project.id} href={`/proyectos/${selectedCategory}/${project.id}`}>
            <div
              className="relative cursor-pointer bg-cover bg-center h-[460px] group transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 50%, #000000 100%), url(${project.cover})`,
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#000000cc] opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[12px] transition-all duration-300" />

              {/* Project title */}
              <p className="absolute font-dm-mono bottom-[60px] left-3 right-0 text-amber-50 py-2 z-10">
                {project.tipo}
              </p>
              <p className="absolute font-archivo bottom-[30px] left-3 right-0 text-amber-50 py-2 z-10">
                {project.title}
              </p>

              {/* "Ver" text on hover */}
              <div className="absolute top-1/2 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className={`${BigShoulders} uppercase text-white text-lg font-bold`}>
                  Ver
                </p>
                <Image src={'/flechaup.svg'} width={30} height={30} alt="flecha" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
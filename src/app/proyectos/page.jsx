'use client'; // For client-side state

import { useState } from 'react';
import { projects } from '../../components/ProjectsData'; // Adjust path
import Link from 'next/link';
import Image from 'next/image';

export default function Proyectos() {
  const [selectedCategory, setSelectedCategory] = useState('art');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const currentProjects = projects[selectedCategory];

  return (
    <div className=" bg-black pt-[80px]">
      <h1 className="text-3xl mx-auto p-4 font-bold mb-4 text-white uppercase">Proyectos</h1>

      {/* Category buttons */}
      <div className="flex h-auto space-x-4 mx-auto p-4 mb-6">

        <button
          onClick={() => handleCategoryChange('art')}
          className={` py-2 uppercase  ${selectedCategory === 'art' ? ' text-white' : 'text-[#717171]'}`}
        >
          Artistas
        </button>
        <button
          onClick={() => handleCategoryChange('corp')}
          className={`px-4 h-auto uppercase border-l-amber-50 border-l-[2px] py-2  ${selectedCategory === 'corp' ? ' text-white' : 'text-[#717171]'}`}
        >
          Empresas
        </button>
      </div>

      {/* Render covers */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {currentProjects.map((project) => (
          <Link key={project.id} href={`/proyectos/${selectedCategory}/${project.id}`}>
            <div
              className="relative cursor-pointer bg-cover bg-center h-[460px] group-hover:backdrop-blur-12 group-hover:bg-[#000000cc]"
              style={{
                backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 50%, #000000 100%), url(${project.cover})`,
              }}
            >
              <p className="absolute bottom-[20px] left-1 right-0 text-amber-50 py-2 z-10">
                {project.title}
              </p>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}
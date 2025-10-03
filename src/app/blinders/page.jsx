'use client';

import React, { useRef, useEffect } from 'react';
import { BigShoulders } from '../ui/fonts';

export default function AboutUs() {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Lista de imágenes (ajústalas a tus rutas reales)
  const sliderImages = [
    '/blinders/slider/slide1.svg',
    '/blinders/slider/slide2.svg',
    '/blinders/slider/slide3.svg',
    '/blinders/slider/slide1.svg',
    '/blinders/slider/slide2.svg', // Adjusted to 4 images for clarity
  ];

  // Set initial scroll position to center the second image
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 16; // Include gap (4px * 4)
      sliderRef.current.scrollLeft = slideWidth; // Scroll to the second image
    }
  }, []);

  return (
    <div className="pt-20 bg-black w-full min-h-screen text-white">
      {/* Hero/About Section */}
      <div
        style={{
          position: 'relative',
          marginTop: '24px',
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          minHeight: '690px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="h-[690px] w-[798px]">
            <img
              src="/blinders/blinders-aboutus.svg"
              alt="Blinders About Us"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div style={{ position: 'absolute', top: '70px', left: '20px', width: '90%' }}>
          <h1 className={` ${BigShoulders.className} pb-[25px] font-bold text-[48px] leading-[100%] tracking-normal text-left uppercase`}>
            MATERIALIZAMOS VISIONES:
            
          </h1>
          <h2 className={` ${BigShoulders.className} pb-[25px] font-bold text-[48px] leading-[100%] tracking-normal text-left uppercase`}>
            TRANSFORMAMOS IDEAS EN EXPERIENCIAS.
          </h2>
         <h2 className={` ${BigShoulders.className} pb-[50px] font-bold text-[48px] leading-[100%] tracking-normal text-left uppercase`}>
            TRAZAMOS NUEVOS CAMINOS PARA HACERLAS REALIDAD.
          </h2>
          <div className="w-[62%]">
            <p className="pb-[20px] font-normal text-[18px] leading-relaxed tracking-[0.02em]">
            En Blinders no hay fórmulas ni moldes. Cada proyecto es un punto de partida distinto, con una historia
            por contar y un universo por crear.
          </p>
          <p className="font-normal text-[18px] leading-relaxed tracking-[0.02em]">Nos mueve la posibilidad de construir algo único, algo que conecte, emocione y deje huella.</p></div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-10">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {sliderImages.map((src, index) => (
            <div
              key={index}
              className="w-[500px] h-[500px] flex-shrink-0 rounded-md overflow-hidden"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
         <div className=' mt-20 h-[274px] w-full bg-[url("/blinders/fondo.svg")] relative bg-cover bg-center'>
            
    <div className=' h-full w-full flex items-center justify-center'><p className={`font-bold text-6xl leading-none tracking-normal text-center uppercase ${BigShoulders.className}`}>Un  sólo equipo, dos formas de crear</p></div>
             
        </div>
        <div className="flex w-full pt-[80px] pb-[80px]">
  <div className="flex flex-col w-[50%] h-[1000px] border-b-[#EAD18F] border-b-[4px]">
    <div className="bg-[url('/blinders/corp.svg')] h-[535px] w-full bg-cover bg-center flex items-center justify-center">
      <img
       src="/blinders/blinderscorp.svg"
        alt="Imagen interna corp"
        className="max-h-[50%] max-w-[50%] object-contain" // Ajusta el tamaño según necesites
      />
    </div>
    <div className="h-[460px] w-full flex flex-col justify-center items-center">
      <div className="h-[270px] w-[85%] flex flex-col justify-around">
        <h3 className={`${BigShoulders.className} font-bold text-[40px] leading-none tracking-normal uppercase`}>
          Estrategia visual para marcas, campañas y empresas.
        </h3>
        <p>
          Trabajamos junto a instituciones, emprendimientos y grandes compañías para transformar ideas en contenido
          audiovisual que impacta, comunica y genera resultados.
        </p>
      </div>
    </div>
  </div>
  <div className="flex flex-col w-[50%] h-[1000px] border-t-[#FF2C2C] border-t-[4px]">
    <div className="h-[460px] w-full flex flex-col justify-center items-center">
      <div className="h-[270px] w-[85%] flex flex-col justify-around">
        <h3 className={`${BigShoulders.className} font-bold text-[40px] leading-none tracking-normal uppercase`}>
          Narrativas visuales que vibran con la música y el arte.
        </h3>
        <p>
          Producimos videoclips, shows y piezas visuales que acompañan a artistas a contar su historia con una estética
          poderosa y emocional.
        </p>
      </div>
    </div>
    <div className="bg-[url('/blinders/art.svg')] h-[535px] w-full bg-cover bg-center flex items-center justify-center">
      <img
        src="/blinders/blindersart.svg" // Cambia por la ruta de tu imagen interna
        alt="Imagen interna art"
        className="max-h-[50%] max-w-[50%] object-contain" // Ajusta el tamaño según necesites
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
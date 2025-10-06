'use client'
import React, { useRef, useEffect } from 'react';
import { BigShoulders } from '../ui/fonts';
import Image from 'next/image'; // Import the Image component

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
    '/blinders/slider/slide2.svg',
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 16;
      sliderRef.current.scrollLeft = slideWidth;
    }
  }, []);

  return (
    <div className=" pt-20 bg-black w-full min-h-screen text-white">
      {/* Hero/About Section */}
      <div
        style={{
          position: 'relative',
          
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
         
        }}
        className='min-h- md:min-h-[690px] mt-0  pt-[0px] md:pt-[20px]  md:mt-[24px]'
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="h-[100vh] md:h-[690px] w-[798px]">
            <Image
              src="/blinders/blinders-aboutus.svg"
              alt="Blinders About Us"
              width={798}
              height={690}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className='top-[290px] md:top-[150px] absolute left-[20px] w-[90%]' >
          <h1 className={`${BigShoulders.className} pb-[25px] md:pb-[25px] md:font-bold md:text-[48px] md:leading-[100%] md:tracking-normal md:text-left md:uppercase font-bold text-[40px] leading-[100%] tracking-[0%] uppercase`}>
            MATERIALIZAMOS VISIONES:
          </h1>
          <h2 className={`${BigShoulders.className} pb-[25px] md:pl-[10px] md:pb-[25px] md:font-bold md:text-[48px] md:leading-[100%] md:tracking-normal md:text-left md:uppercase font-bold text-[40px] leading-[100%] tracking-[0%] uppercase`}>
            TRANSFORMAMOS IDEAS EN EXPERIENCIAS.
          </h2>
          <h2 className={`${BigShoulders.className} pb-[25px] md:pl-[20px] md:pb-[50px] md:font-bold md:text-[48px] md:leading-[100%] md:tracking-normal md:text-left md:uppercase font-bold text-[40px] leading-[100%] tracking-[0%] uppercase`}>
            TRAZAMOS NUEVOS CAMINOS PARA HACERLAS REALIDAD.
          </h2>
        </div>
      </div>
      {/*historia */}
      <div className=' h-[380px] md:h-[315px] flex flex-col md:flex-row items-center md:items-center justify-center w-full'>
        <div className='p-[30px] md:p-[0px] h-[388px] md:h-[264px] w-[350px] md:w-[860px] bg-[#161616] relative'>
          <Image src="/cruz.svg" alt="Corner" width={24} height={24} className="absolute top-[-10px] left-[-10px]" />
          <Image src="/cruz.svg" alt="Corner" width={24} height={24} className="absolute top-[-10px] right-[-10px]" />
          <Image src="/cruz.svg" alt="Corner" width={24} height={24} className="absolute bottom-[-10px] left-[-10px]" />
          <Image src="/cruz.svg" alt="Corner" width={24} height={24} className="absolute bottom-[-10px] right-[-10px]" />
          <Image src="/blindersEstampa.svg" alt="Estampa" width={180} height={180} className="absolute bottom-[90px] left-[170px] md:bottom-[-5px] md:left-[280px]" />
          <div className='flex flex-col md:flex-row justify-around h-full items-center'>
            <div className='w-[320px]'>
              <h3 className="pl-[15px] md:pl-[0px] font-bold text-[30px] leading-[40px] tracking-[0%] uppercase text-[#E3E3E3]">
                En Blinders no hay fórmulas ni moldes.
              </h3>
            </div>
            <div className='w-[98%] md:w-[367px] h-auto md:border-l-[1px] md:border-l-[#757575]'>
              <p className="md:pl-[35px] font-medium text-[16px] leading-[150%] tracking-[1%] text-[#EBEBEB]">
                Cada proyecto es un punto de partida distinto, con una historia por contar y un universo por crear.
              </p>
              <br />
              <p className="md:pl-[35px] font-medium text-[16px] leading-[150%] tracking-[1%] text-[#EBEBEB]">
                Nos mueve la posibilidad de construir algo único, algo que conecte, emocione y deje huella.
              </p>
            </div>
          </div>
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
            <div key={index} className="w-[500px] h-[500px] flex-shrink-0 rounded-md overflow-hidden">
              <Image src={src} alt={`Slide ${index + 1}`} width={500} height={500} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className='mt-20 h-[274px] w-full bg-[url("/blinders/fondo.svg")] relative bg-cover bg-center'>
          <div className='h-full w-full flex items-center justify-center'>
            <p className={`font-bold text-6xl leading-none tracking-normal text-center uppercase ${BigShoulders.className}`}>
              Un sólo equipo, dos formas de crear
            </p>
          </div>
        </div>
        <div className="flex w-full pt-[80px] pb-[80px]">
          <div className="flex flex-col w-[50%] h-[1000px] border-b-[#EAD18F] border-b-[4px]">
            <div className="bg-[url('/blinders/corp.svg')] h-[535px] w-full bg-cover bg-center flex items-center justify-center">
              <Image src="/blinders/blinderscorp.svg" alt="Imagen interna corp" width={267} height={267} className="max-h-[50%] max-w-[50%] object-contain" />
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
              <Image src="/blinders/blindersart.svg" alt="Imagen interna art" width={267} height={267} className="max-h-[50%] max-w-[50%] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
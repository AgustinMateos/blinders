"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ContactoComponent() {
  const socialLinks = [
    {
      src: "/redes/logoinstagram.svg",
      alt: "Instagram Blinders Corp",
      href: "https://www.instagram.com/blinders.corp/",
      label: "Instagram Blinders Corp",
    },
    {
      src: "/redes/logoinstagram.svg",
      alt: "Instagram Blinders Art",
      href: "https://www.instagram.com/blinders.art/",
      label: "Instagram Blinders Art",
    },
    {
      src: "/redes/linkedin.svg",
      alt: "LinkedIn Blinders",
      href: "https://www.linkedin.com/company/blinders-audiovisual/",
      label: "LinkedIn Blinders Audiovisual",
    },
    {
      src: "/redes/whatsapp.svg",
      alt: "WhatsApp Blinders",
      href: "https://api.whatsapp.com/send/?phone=5491155650732&text&type=phone_number&app_absent=0",
      label: "WhatsApp Blinders",
    },
    {
      src: "/redes/logotiktok.svg",
      alt: "TikTok Blinders",
      href: "https://www.tiktok.com/@blindersaudiovisual",
      label: "TikTok Blinders Audiovisual",
    },
    {
      src: "/redes/vimeo.svg",
      alt: "Vimeo Blinders",
      href: "https://vimeo.com/user247870072",
      label: "Vimeo Blinders Corp",
    },
    {
      src: "/redes/logoyoutube.svg",
      alt: "YouTube Blinders",
      href: "https://www.youtube.com/@blindersaudiovisual",
      label: "YouTube Blinders Audiovisual",
    },
  ];

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipoProyecto: "",
    mensaje: "",
  });

  // Estado y lógica del dropdown integrado
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = [
    { value: "", label: "¿Qué tienes en mente?" },
    { value: "videoclip", label: "Videoclip" },
    { value: "show", label: "Show" },
    { value: "evento", label: "Evento" },
    { value: "fashionfilm", label: "Fashionfilm" },
    { value: "branding", label: "Branding" },
    { value: "otro", label: "Otro" },
  ];

  const selectedOption =
    options.find((opt) => opt.value === formData.tipoProyecto) || {
      label: "¿Qué tienes en mente?",
    };

  return (
    <div className="pt-20 px-4 md:px-4 bg-black w-full min-h-screen text-white">
      {/* Header Section */}
      <div className="border-t-1 border-b-1 border-[#262626] h-[120px] md:h-[139px] bg-black flex items-center justify-between px-4 md:px-8 overflow-hidden">
  {/* Izquierda: Título principal horizontal */}
  <h1
    className="
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
      uppercase font-black tracking-wider text-white
    "
    style={{ fontFamily: "'Big Shoulders', sans-serif" }}
  >
    Contacto
  </h1>

  {/* Derecha: BLINDERS vertical */}
  <div className="h-full flex items-end  w-[82px] border-l-1 border-r-1 border-[#262626]">
    <h2
      className="
        text-[10px] 
        
        uppercase font-black tracking-[0.4em] p-2 text-white
        [writing-mode:vertical-rl] rotate-180
      "
      style={{ fontFamily: "'Big Shoulders', sans-serif" }}
    >
      BLINDERS
    </h2>
  </div>
</div>

      {/* Main Content Section */}
      <div className="w-full flex flex-col md:flex-row justify-between py-10">
        {/* Left Side (Image) - visible solo en desktop */}
        <div className="w-full md:w-[50%] md:relative hidden md:block">
          <div className="w-full h-[730px] relative">
            <Image
              src="/contacto/contacto.jpg"
              alt="Blinders Studios background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="relative w-[100%] max-w-[150px] aspect-[3/4] md:aspect-square">
                <Image
                  src="/contacto/contactoLogo.svg"
                  alt="Equipo Blinders Studios"
                  fill
                  className="object-contain rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[45%] md:pr-[30px] space-y-6">
          <div className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/40 border border-[#222626] rounded-lg text-white text-base placeholder:text-[#5E5E5E] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200"
                placeholder="Nombre"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/40 border border-[#222626] rounded-lg text-white text-base placeholder:text-[#5E5E5E] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200"
                placeholder="+54 9 11111111"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/40 border border-[#222626] rounded-lg text-white text-base placeholder:text-[#5E5E5E] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200"
                placeholder="nombre@ejemplo.com"
              />
            </div>

            {/* Tipo de proyecto - Dropdown integrado */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Tipo de proyecto
              </label>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="
                    w-full px-4 py-3 
                    bg-black/40 
                    border border-[#222626]
                    rounded-lg 
                    text-white text-base text-left
                    focus:outline-none 
                    focus:border-red-600
                    focus:ring-1 focus:ring-red-600/50 
                    transition-all duration-200
                    flex items-center justify-between
                  "
                >
                  <span
                    className={
                      formData.tipoProyecto ? "text-white" : "text-[#5E5E5E]"
                    }
                  >
                    {selectedOption.label}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="
                      absolute z-50 mt-1 w-full 
                      bg-[#0f0f0f] border border-[#222626] 
                      rounded-lg shadow-2xl max-h-60 overflow-y-auto
                    "
                  >
                    {options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            tipoProyecto: option.value,
                          });
                          setIsOpen(false);
                        }}
                        className={`
                          w-full px-4 py-3 text-left text-base
                          transition-colors duration-150
                          ${
                            formData.tipoProyecto === option.value
                              ? "bg-red-900/30 text-red-300 font-medium"
                              : "text-white hover:bg-gray-800/70"
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#F2F2F2]">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/40 border border-[#222626] rounded-lg text-white text-base placeholder:text-[#5E5E5E] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200 resize-none min-h-[120px]"
                placeholder="Agrega un mensaje..."
              />
            </div>

            {/* Botón Enviar */}
            <div className="flex flex-row justify-end items-center gap-3">
              <button
                type="button"
                onClick={() => console.log("Enviado:", formData)}
                className="w-[112px] font-normal text-[32px] leading-none tracking-normal uppercase bg-transparent text-white hover:text-red-500 transition-colors"
                style={{
                  fontFamily: "Big Shoulders, sans-serif",
                  fontWeight: "700",
                }}
              >
                ENVIAR
              </button>
              <Image src="/flecha.svg" width={30} height={30} alt="flecha" />
            </div>
          </div>

          {/* Redes y contacto */}
          <div className="w-auto flex flex-col py-10 space-y-4 border-t-2 border-[#222626]">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <Image
                    src={link.src}
                    width={32}
                    height={32}
                    alt={link.alt}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
              ))}
            </div>
            <div>
              <p>blinders.av@gmail.com</p>
              <p>+54 9 11 5565-0732</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
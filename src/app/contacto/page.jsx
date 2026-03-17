"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BigShoulders } from "../ui/fonts";
import CustomDropdown from "@/components/CustomDropDown";

export default function Contacto() {
  const socialLinks = [
    { src: "/redes/logoinstagram.svg", alt: "Instagram Blinders Corp", href: "https://www.instagram.com/blinders.corp/", label: "Instagram Blinders Corp" },
    { src: "/redes/logoinstagram.svg", alt: "Instagram Blinders Art", href: "https://www.instagram.com/blinders.art/", label: "Instagram Blinders Art" },
    { src: "/redes/linkedin.svg", alt: "LinkedIn Blinders", href: "https://www.linkedin.com/company/blinders-audiovisual/", label: "LinkedIn Blinders Audiovisual" },
    { src: "/redes/whatsapp.svg", alt: "WhatsApp Blinders", href: "https://api.whatsapp.com/send/?phone=5491155650732&text&type=phone_number&app_absent=0", label: "WhatsApp Blinders" },
    { src: "/redes/logotiktok.svg", alt: "TikTok Blinders", href: "https://www.tiktok.com/@blindersaudiovisual", label: "TikTok Blinders Audiovisual" },
    { src: "/redes/vimeo.svg", alt: "Vimeo Blinders", href: "https://vimeo.com/user247870072", label: "Vimeo Blinders Corp" },
    { src: "/redes/logoyoutube.svg", alt: "YouTube Blinders", href: "https://www.youtube.com/@blindersaudiovisual", label: "YouTube Blinders Audiovisual" },
  ];

  // ESTO ES LO QUE FALTABA → DECLARACIÓN DEL ESTADO
  const [formData, setFormData] = useState({
  nombre: "",
  telefono: "",
  email: "",
  tipoProyecto: "",
  mensaje: "",
});

  return (
    <div className="pt-20 px-4 md:px-4 bg-black w-full min-h-screen text-white">
      {/* Header Section */}
      <div className="w-full max-w-8xl mx-auto px-4 border-t-2 border-b-2 border-[#262626] flex items-center justify-between gap-6 h-[139px]">
        <h1
          className="text-[32px] md:text-[96px] uppercase py-8 text-white tracking-wider"
          style={{
            fontFamily: "Big Shoulders, sans-serif",
            fontWeight: "700",
          }}
        >
          Contacto
        </h1>

        <div className="flex-shrink-0 h-auto">
          <Image
            src={"/SubtractRed2.svg"}
            alt={"logo"}
            width={82}
            height={139}
            className="w-12 h-12 md:w-14 md:h-24 object-cover"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex flex-col md:flex-row justify-between py-10">
        {/* Left Side (Image) */}
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
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white text-base placeholder:text-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200"
                placeholder="Nombre"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white text-base placeholder:text-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200"
                placeholder="+54 9 11111111"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white text-base placeholder:text-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200"
                placeholder="nombre@ejemplo.com"
              />
            </div>

            {/* Tipo de proyecto */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Tipo de proyecto</label>
              <CustomDropdown
                options={[
                  { value: "", label: "¿Qué tienes en mente?" },
                  { value: "videoclip", label: "Videoclip" },
                  { value: "show", label: "Show" },
                  { value: "evento", label: "Evento" },
                  { value: "fashionfilm", label: "Fashionfilm" },
                  { value: "branding", label: "Branding" },
                  { value: "otro", label: "Otro" },
                ]}
                value={formData.tipoProyecto}
                onChange={(val) => setFormData({ ...formData, tipoProyecto: val })}
                placeholder="¿Qué tienes en mente?"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white text-base placeholder:text-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-200 resize-none min-h-[120px]"
                placeholder="Agrega un mensaje..."
              />
            </div>

            {/* Botón */}
            <div className="flex flex-row justify-end items-center gap-3">
              <button
                type="button"
                onClick={() => console.log("Enviado:", formData)}
                className="w-[112px] font-normal text-[32px] leading-none tracking-normal uppercase bg-transparent text-white hover:text-red-500 transition-colors"
                style={{
                  fontFamily: "'Schabo Condensed', sans-serif",
                  fontWeight: 700,
                }}
              >
                ENVIAR
              </button>
              <Image src={"/flecha.svg"} width={30} height={30} alt="flecha" />
            </div>
          </div>

          {/* Redes y contacto */}
          <div className="w-auto flex flex-col py-10 space-y-4 border-t-2 border-[#262626]">
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
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const socialLinksNavbar = [
  { src: "/redes/logoinstagram.svg", alt: "Instagram Blinders Corp", href: "https://www.instagram.com/blinders.corp/", label: "Instagram Blinders Corp" },
  { src: "/redes/logoinstagram.svg", alt: "Instagram Blinders Art", href: "https://www.instagram.com/blinders.art/", label: "Instagram Blinders Art" },
  { src: "/redes/linkedin.svg", alt: "LinkedIn Blinders", href: "https://www.linkedin.com/company/blinders-audiovisual/", label: "LinkedIn Blinders Audiovisual" },
  { src: "/redes/whatsapp.svg", alt: "WhatsApp Blinders", href: "https://api.whatsapp.com/send/?phone=5491155650732&text&type=phone_number&app_absent=0", label: "WhatsApp Blinders" },
  { src: "/redes/logotiktok.svg", alt: "TikTok Blinders", href: "https://www.tiktok.com/@blindersaudiovisual", label: "TikTok Blinders Audiovisual" },
  { src: "/redes/vimeo.svg", alt: "Vimeo Blinders", href: "https://vimeo.com/user247870072", label: "Vimeo Blinders Corp" },
  { src: "/redes/logoyoutube.svg", alt: "YouTube Blinders", href: "https://www.youtube.com/@blindersaudiovisual", label: "YouTube Blinders Audiovisual" },
];
    return (
        <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-100 text-white">
            {/* Logo/Brand */}
            <div className="flex items-center w-auto">
                <Link href={"/"} className="flex items-center w-auto">
                    <Image src="/Subtract.svg" alt="logo" width={30} height={30} />
                    <h2 className="text-2xl font-bold pl-1">BLINDERS</h2>
                </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <div className="space-y-1.5">
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Navigation Links (Full-screen Dropdown) */}
            <div
                className={`fixed left-0 w-full bg-black bg-opacity-90 transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-y-0" : "-translate-y-full"
                    } top-0 h-screen flex flex-col justify-end items-end pr-5 z-40`}
            >
                {/* Logo/Brand in Dropdown */}
                <div className="absolute top-4 left-4 flex items-center">
                    <Link href={"/"} className="flex items-center w-auto">
                        <Image src="/Subtract.svg" alt="logo" width={30} height={30} />
                        <h2 className="text-2xl font-bold pl-1">BLINDERS</h2>
                    </Link>
                </div>

                {/* Close Button (X) */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-5 text-white focus:outline-none"
                    aria-label="Close menu"
                >
                    <div className="relative w-6 h-6">
                        <span className="absolute block w-6 h-0.5 bg-white rotate-45 top-1/2"></span>
                        <span className="absolute block w-6 h-0.5 bg-white -rotate-45 top-1/2"></span>
                    </div>
                </button>

                {/* Menu Links */}
                <div className="border-b-[1px] md:w-[295px] border-[#F2F2F280] flex flex-col justify-end items-end"> 
                    <Link
                    href="/"
                    className="block font-archivo px-4 py-4  text-white hover:text-gray-300 font-medium text-[32px] md:text-[64px] leading-[100%] tracking-[0]"
                    onClick={() => setIsOpen(false)}
                >
                    Inicio
                </Link>
                    <Link
                    href="/proyectos"
                    className="block font-archivo px-4 py-4  text-white hover:text-gray-300 font-medium text-[32px] md:text-[64px] leading-[100%] tracking-[0]"
                    onClick={() => setIsOpen(false)}
                >
                    Proyectos
                </Link>
                    <Link
                        href="/blinders"
                        className="block font-archivo px-4 py-4  text-white hover:text-gray-300 font-medium text-[32px] md:text-[64px] leading-[100%] tracking-[0]"
                        onClick={() => setIsOpen(false)}
                    >
                        Blinders
                    </Link>
                    <Link
                        href="/contacto"
                        className="block font-archivo px-4 py-4 text-white hover:text-gray-300 font-medium text-[32px] md:text-[64px] leading-[100%] tracking-[0]"
                        onClick={() => setIsOpen(false)}
                    >
                        Contacto
                    </Link></div>
                <div className="flex w-[275px] pt-[30px] pb-[15px] justify-evenly">
  {socialLinksNavbar.map((link, index) => (
    <a
      key={index}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="hover:opacity-80 transition-opacity"
    >
      <Image
        src={link.src}
        width={32}
        height={32}
        alt={link.alt}
      />
    </a>
  ))}
</div>
                <div className="flex flex-col pb-[10px] md:pb-[50px] ">
                    <p className="text-[#FFFFFF] font-medium text-base leading-[150%] tracking-[1%] font-archivo pb-4">blinders.av@gmail.com</p>
                    <p className="text-[#FFFFFF] font-medium text-base leading-[150%] tracking-[1%] font-archivo">+54 9 11 5565-0732</p>
                </div>
                <Link
                        href="/terminos-y-condiciones"
                        className="text-[#999999] font-medium pb-[70px] text-base leading-[150%] tracking-[1%] font-archivo hover:text-gray-300 "
                        onClick={() => setIsOpen(false)}
                    >
                        Términos y condiciones
                    </Link>


            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import Image from "next/image";
export default function Contacto() {
    return (
        <div className="pt-20 bg-black w-full min-h-screen text-white">
            <div className=" ">
                {/* Header Section */}
                <div className="w-full mx-1  border-b-[1px] h-[139px] border-[#F2F2F280] flex items-center justify-start">
                    <h1 className="text-[#FFFFFF] font-bold text-[96px] leading-[100%] tracking-[0] uppercase">
                        Contacto
                    </h1>
                </div>

                {/* Main Content Section */}
                <div className="w-full flex justify-between py-10">
                    {/* Left Side (Image Placeholder) */}
                    <div className="w-[50%] relative">
                        <div className="w-full h-[730px] bg-gray-800 flex items-center justify-center">
                            {/* Placeholder for the image with "BLINDERS STUDIOS" text */}
                            <div className="text-center opacity-50">
                                <p className="text-4xl font-bold">BLINDERS</p>
                                <p className="text-2xl">STUDIOS</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Form) */}
                    <div className="w-[45%] pr-[30px] space-y-6">
                        {/* Form Fields */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full p-2 bg-transparent border border-gray-400 focus:outline-none"
                                placeholder="Nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Teléfono</label>
                            <input
                                type="tel"
                                className="w-full p-2 bg-transparent border border-gray-400 focus:outline-none"
                                placeholder="+54 9 11111111"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                className="w-full p-2 bg-transparent border border-gray-400 focus:outline-none"
                                placeholder="nombre@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Tipo de proyecto
                            </label>
                            <select className="w-full p-2 bg-transparent border border-gray-400 focus:outline-none">
                                <option>¿Qué tienes en mente?</option>
                                <option>Videoclip</option>
                                <option>Show</option>
                                <option>Evento</option>
                                <option>Fashionfilm</option>
                                <option>Branding</option>
                                <option>Otro</option>
                                
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Mensaje</label>
                            <textarea
                                className="w-full p-2 bg-transparent border border-gray-400 focus:outline-none resize-none h-15"
                                placeholder="Agrega un mensaje..."
                            ></textarea>
                        </div>
                        <button className="w-full py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors">
                            ENVIAR →
                        </button>
                        <div className="w-[175px]  flex flex-col py-10 space-y-4">
                            <div className="flex justify-center space-x-4">
                                <Image src='/redes/logotiktok.svg' width={20} height={24} alt="redes" />
                                <Image src='/redes/logoinstagram.svg' width={20} height={24} alt="redes" />
                                <Image src='/redes/logoyoutube.svg' width={20} height={24} alt="redes" />
                            </div>
                            <div className="">
                                <p>blinders.av@gmail.com</p>
                                <p>+54 9 11 5565-0732</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Section */}

            </div>
        </div>
    );
}
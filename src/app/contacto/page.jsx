import React from "react";
import Image from "next/image";
import { BigShoulders } from "../ui/fonts";
export default function Contacto() {
    return (
        <div className="pt-20 px-4 md:px-4 bg-black w-full min-h-screen text-white">
            <div className=" ">
                {/* Header Section */}
                <div className="w-full mx-1  h-[100px] md:h-[139px] border-[#222626] border-t-[0.5px] border-b-[0.5px] flex items-center justify-start">
                    <h1 style={{ fontFamily: 'Big Shoulders, sans-serif',
               fontWeight: '700'}} className={` text-[#FFFFFF] font-bold text-[32px] md:text-[96px] leading-[100%] tracking-[0] uppercase`}>
                        Contacto
                    </h1>
                </div>

                {/* Main Content Section */}
                <div className="w-full flex flex-col md:flex-row justify-between py-10">
                    {/* Left Side (Image Placeholder) */}
                    <div className="w-full  md:w-[50%] md:relative hidden md:block" >
                        <div className="w-full h-[730px] bg-gray-800 flex items-center justify-center">
                            {/* Placeholder for the image with "BLINDERS STUDIOS" text */}
                            <div className="text-center opacity-50">
                                <p className="text-4xl font-bold">BLINDERS</p>
                                <p className="text-2xl">STUDIOS</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Form) */}
                    <div className="w-full md:w-[45%] md:pr-[30px] space-y-6">
                        {/* Form Fields */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-transparent rounded-[7px] border border-gray-400 focus:outline-none"
                                placeholder="Nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Teléfono</label>
                            <input
                                type="tel"
                                className="w-full p-3 bg-transparent rounded-[7px] border border-gray-400 focus:outline-none"
                                placeholder="+54 9 11111111"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                className="w-full p-3 bg-transparent rounded-[7px] border border-gray-400 focus:outline-none"
                                placeholder="nombre@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Tipo de proyecto
                            </label>
                            <select className="w-full p-3 bg-transparent rounded-[7px] border border-gray-400 focus:outline-none">
                                <option className="text-[#5E5E5E]">¿Qué tienes en mente?</option>
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
                                className="w-full p-3 bg-transparent rounded-[7px] border border-gray-400 focus:outline-none resize-none h-15"
                                placeholder="Agrega un mensaje..."
                            ></textarea>
                        </div>
                        <div className="flex flex-row  justify-end">
                            <button className=" w-[112px] font-normal text-[32px] leading-none tracking-normal uppercase bg-transparent  text-white  ">
                            ENVIAR
                           </button>
                            <Image src={"/flecha.svg"} width={30} height={30} alt="flecha"/>
                        </div>
                        <div className="w-auto  flex flex-col py-10 space-y-4">
                            <div className="flex   space-x-4">
                                <Image src='/redes/logoinstagram.svg' width={32} height={32} alt="redes" />
                                <Image src='/redes/logoinstagram.svg' width={32} height={32} alt="redes" />
                                <Image src='/redes/linkedin.svg' width={32} height={32} alt="redes" />
                                <Image src='/redes/whatsapp.svg' width={32} height={32} alt="redes" />
                                <Image src='/redes/logotiktok.svg' width={32} height={32} alt="redes" />
                                 <Image src='/redes/vimeo.svg' width={32} height={32} alt="redes" />
                                <Image src='/redes/logoyoutube.svg' width={32} height={32} alt="redes" />
                            </div>
                            <div className="">
                                <p>blinders.av@gmail.com</p>
                                <p>+54 9 11 5565-0732</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}
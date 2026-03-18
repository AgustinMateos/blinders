// src/app/layout.jsx
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Archivo, Big_Shoulders, DM_Mono } from 'next/font/google';  // ← prueba Big_Shoulders sin _Display

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['100','500', '900'],  // reduce si podés
  display: 'swap',
  adjustFontFallback: false,
});

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  variable: '--font-big-shoulders',
  weight: ['100', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '500'],
  display: 'swap',
});

export const metadata = { /* ... */ };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`
          ${archivo.variable}
          ${bigShoulders.variable}
          ${dmMono.variable}
          bg-[#0a0a0a] text-white antialiased
        `}
      >
        <header><Navbar /></header>
        {children}
      </body>
    </html>
  );
}
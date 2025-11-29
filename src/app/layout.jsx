
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "Blinders",
  description: "En blinders no hacemos simples videos, creamos experiencias cinematográficas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a]"
       
      >
        <header><Navbar /></header>
        {children}
      </body>
    </html>
  );
}

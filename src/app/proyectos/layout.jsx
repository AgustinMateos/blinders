// /proyectos es un client component, por eso la metadata vive en este layout.
export const metadata = {
  title: 'Proyectos: videoclips y videos de marca',
  description:
    'Portfolio de Blinders Audiovisual: videoclips para artistas como KHEA y LUCHO SSJ, y videos corporativos para marcas como Monster Energy y Bullpadel.',
  alternates: { canonical: '/proyectos' },
  openGraph: {
    url: '/proyectos',
    title: 'Proyectos | Blinders Audiovisual',
    description:
      'Videoclips para artistas y videos corporativos para marcas y empresas.',
  },
};

export default function ProyectosLayout({ children }) {
  return children;
}

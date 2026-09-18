// Configuración central de SEO: dominio, marca, contacto y textos por servicio.
// Cualquier dato que aparezca en metadata o JSON-LD se cambia acá.

export const SITE = {
  url: 'https://blindersav.com',
  name: 'Blinders Audiovisual',
  shortName: 'Blinders',
  locale: 'es_AR',
  title: 'Blinders Audiovisual | Productora de videoclips y videos corporativos',
  description:
    'Blinders Audiovisual es una productora de videoclips para artistas y videos corporativos para marcas y empresas en Argentina. Pedí tu presupuesto.',
  email: 'blinders.av@gmail.com',
  phone: '+5491155650732',
  defaultOgImage: '/blinders/blinders-aboutus.webp',
  keywords: [
    'productora audiovisual',
    'productora audiovisual Argentina',
    'productora audiovisual Buenos Aires',
    'videoclips',
    'producción de videoclips',
    'videoclips para artistas',
    'videos corporativos',
    'video institucional',
    'videos para empresas',
    'contenido para marcas',
    'cobertura de eventos',
    'documentales de marca',
    'Blinders',
  ],
  socials: [
    'https://www.instagram.com/blinders.corp/',
    'https://www.instagram.com/blinders.art/',
    'https://www.linkedin.com/company/blinders-audiovisual/',
    'https://www.tiktok.com/@blindersaudiovisual',
    'https://vimeo.com/user247870072',
    'https://www.youtube.com/@blindersaudiovisual',
  ],
};

export const absoluteUrl = (path = '') => `${SITE.url}${encodeURI(path)}`;

// Los dos servicios de la productora. Cada uno tiene su propia página en /proyectos/[slug].
export const SERVICES = {
  art: {
    slug: 'art',
    brand: 'Blinders Art',
    label: 'Artistas',
    h1: 'Videoclips para artistas',
    serviceType: 'Producción de videoclips',
    title: 'Videoclips para artistas y músicos',
    description:
      'Producimos videoclips, shows y piezas visuales para artistas y músicos en Argentina. Mirá nuestro trabajo con KHEA, LUCHO SSJ, BHAVI y más.',
    intro: [
      'En Blinders Art producimos videoclips, presentaciones en vivo y piezas visuales para artistas y músicos. Acompañamos cada proyecto desde la idea hasta la entrega final, con una estética cinematográfica pensada para la canción.',
      'Trabajamos con artistas como KHEA, LUCHO SSJ, BHAVI, LIT KILLAH y ASAN. Si tenés un tema listo para salir, escribinos y armamos el videoclip juntos.',
    ],
    ctaLabel: 'Pedí tu presupuesto de videoclip',
  },
  corp: {
    slug: 'corp',
    brand: 'Blinders Corp',
    label: 'Empresas',
    h1: 'Videos corporativos para marcas y empresas',
    serviceType: 'Producción de videos corporativos',
    title: 'Videos corporativos para empresas',
    description:
      'Producción de videos corporativos, contenido de marca, cobertura de eventos y documentales para empresas en Argentina. Conocé nuestros proyectos.',
    intro: [
      'En Blinders Corp trabajamos con marcas, instituciones y empresas para transformar ideas en contenido audiovisual que comunica y genera resultados: videos institucionales, contenido promocional, cobertura de eventos y documentales de marca.',
      'Produjimos piezas para marcas como Monster Energy, Bullpadel, Tanqueray, Fiserv y Schär. Contanos qué necesita tu marca y te armamos una propuesta.',
    ],
    ctaLabel: 'Pedí tu presupuesto de video corporativo',
  },
};

// 'VIDEOCLIP' -> 'Videoclip'
export const formatTipo = (tipo = '') => {
  const t = tipo.trim().toLowerCase();
  return t.charAt(0).toUpperCase() + t.slice(1);
};

export const cleanTitle = (title = '') => title.replace(/\s+/g, ' ').trim();

// Devuelve { type: 'youtube' | 'vimeo', id } o { type: null, id: null }
export function getVideoInfo(url) {
  if (!url) return { type: null, id: null };

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const regex = new RegExp(
      '(?:youtube(?:-nocookie)?\\.com\\/(?:[^/\\n\\s]+/\\S+\\/|(?:v|e(?:mbed)?)\\/|\\S*?[?&]v=)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})',
      'i'
    );
    const match = url.match(regex);
    return { type: 'youtube', id: match ? match[1] : null };
  }

  if (url.includes('vimeo.com')) {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    return { type: 'vimeo', id: match ? match[1] : null };
  }

  return { type: null, id: null };
}

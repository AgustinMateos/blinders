import { projects } from '../components/ProjectsData';
import {
  SITE,
  SERVICES,
  absoluteUrl,
  cleanTitle,
  getVideoInfo,
  projectDescription,
  projectPath,
} from '@/lib/seo';

// Next no escapa el texto de imágenes y videos del sitemap: un '&' (DREAMS&LOVE) rompe el XML
const xml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// No se usa lastModified con new Date(): cambiaría en cada request y Google
// termina ignorando el campo. Si querés fechas reales, agregá updatedAt a cada proyecto.
export default function sitemap() {
  const sitemapEntries = [
    {
      url: SITE.url,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/proyectos`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Páginas de servicio: videoclips para artistas / videos corporativos
    ...Object.values(SERVICES).map((service) => ({
      url: `${SITE.url}/proyectos/${service.slug}`,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    {
      url: `${SITE.url}/blinders`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/contacto`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/terminos-y-condiciones`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Todos los proyectos (art y corp), con su portada y su video para Google Imágenes y Videos
  Object.keys(projects).forEach((category) => {
    projects[category].forEach((project) => {
      const { type, id } = getVideoInfo(project.videoUrl);
      const playerLoc =
        type === 'youtube'
          ? `https://www.youtube.com/embed/${id}`
          : type === 'vimeo'
            ? `https://player.vimeo.com/video/${id}`
            : null;

      sitemapEntries.push({
        url: absoluteUrl(projectPath(category, project)),
        changeFrequency: 'monthly',
        priority: 0.6,
        images: [xml(absoluteUrl(project.cover))],
        ...(playerLoc && {
          videos: [
            {
              title: xml(cleanTitle(project.title)),
              thumbnail_loc: xml(absoluteUrl(project.cover)),
              description: xml(projectDescription(category, project)),
              player_loc: playerLoc,
            },
          ],
        }),
      });
    });
  });

  return sitemapEntries;
}

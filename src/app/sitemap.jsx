import { projects } from '../components/ProjectsData';
import { SITE, SERVICES } from '@/lib/seo';

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

  // Todos los proyectos (art y corp)
  Object.keys(projects).forEach((category) => {
    projects[category].forEach((project) => {
      sitemapEntries.push({
        url: `${SITE.url}/proyectos/${category}/${project.id}`,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}

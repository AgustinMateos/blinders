import { projects } from '../components/ProjectsData'; // Ajusta la ruta si es necesario

export default function sitemap() {
  const sitemapEntries = [];

  // Páginas estáticas principales
  sitemapEntries.push(
    {
      url: 'https://blindersav.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://blindersav.com/proyectos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://blindersav.com/contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://blindersav.com/terminos-y-condiciones',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    }
  );

  // Agregar TODOS los proyectos dinámicos (art y corp)
  Object.keys(projects).forEach((category) => {
    projects[category].forEach((project) => {
      sitemapEntries.push({
        url: `https://blindersav.com/proyectos/${category}/${project.id}`,
        lastModified: new Date(),           // podés poner project.updatedAt si lo agregás después
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}
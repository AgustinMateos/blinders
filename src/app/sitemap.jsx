import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
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
      priority: 0.8,
    },
    {
      url: 'https://blindersav.com/terminos-y-condiciones',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Agrega aquí más páginas estáticas importantes
  ]
}
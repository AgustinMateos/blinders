import React from 'react'
import ContactoComponent from '@/components/ContactoComponent'
import JsonLd from '@/components/JsonLd'
import { SITE, absoluteUrl } from '@/lib/seo'

export const metadata = {
  title: 'Contacto y presupuesto de video',
  description:
    'Contactá a Blinders Audiovisual y pedí tu presupuesto de videoclip, video corporativo o cobertura de evento. Respondemos por WhatsApp, mail y formulario.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    url: '/contacto',
    title: 'Contacto | Blinders Audiovisual',
    description:
      'Pedí tu presupuesto de videoclip, video corporativo o cobertura de evento.',
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${absoluteUrl('/contacto')}#webpage`,
  url: absoluteUrl('/contacto'),
  name: 'Contacto | Blinders Audiovisual',
  inLanguage: 'es-AR',
  isPartOf: { '@id': `${SITE.url}/#website` },
  about: { '@id': `${SITE.url}/#organization` },
}

const page = () => {
  return (
    <div>
      <JsonLd data={contactJsonLd} />
      <ContactoComponent/>
    </div>
  )
}

export default page

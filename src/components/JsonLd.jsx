// Inyecta datos estructurados (schema.org) como JSON-LD.
// Se escapa "<" para que ningún valor pueda cerrar el <script>.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

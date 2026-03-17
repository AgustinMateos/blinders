import React from 'react';
import Image from 'next/image';
import Terminos from '@/components/Terminos';

const termsAndConditions = [
  {
    id: 1,
    title: "Identificación de la Empresa",
    content: (
      <p>
        A los efectos de los presentes Términos y Condiciones, se entenderá por “Blinders Audiovisual” o “la Empresa” a la productora audiovisual que opera bajo dicha denominación comercial en la República Argentina. Hasta tanto la sociedad se encuentre formalmente constituida, toda referencia legal y comercial se hará bajo esta denominación.
      </p>
    )
  },
  {
    id: 2,
    title: "Aceptación de los Términos",
    content: (
      <p>
        El acceso, navegación y/o utilización de la página web de la Empresa implica la aceptación expresa de los presentes Términos. En caso de no estar de acuerdo, el usuario deberá abstenerse de utilizar el sitio y/o los servicios ofrecidos.
      </p>
    )
  },
  {
    id: 3,
    title: "Jurisdicción y Legislación Aplicable",
    content: (
      <p>
        Toda controversia derivada de la interpretación, ejecución o cumplimiento de los presentes Términos será sometida a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero o jurisdicción. Se aplicará la legislación vigente en la República Argentina.
      </p>
    )
  },
  {
    id: 4,
    title: "Propiedad Intelectual",
    content: (
      <>
        <p>
          Todo el contenido audiovisual producido por la Empresa es de su exclusiva propiedad hasta tanto el cliente haya abonado la totalidad del servicio contratado. Una vez cumplida dicha condición, los derechos de uso y explotación se ceden al cliente, salvo pacto en contrario expresamente acordado.
        </p>
        <p className="mt-3">
          La marca, logotipo, nombre comercial, diseños, imágenes y contenidos de la web son propiedad exclusiva de la Empresa y se encuentran protegidos por las leyes de propiedad intelectual vigentes. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "Servicios, Presupuestos y Condiciones Comerciales",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        <li>Los presupuestos emitidos por la Empresa tendrán una validez de 30 días corridos.</li>
        <li>El cliente podrá solicitar hasta dos (2) cambios o correcciones sin costo adicional. A partir de la tercera modificación, se aplicarán cargos adicionales.</li>
        <li>En caso de que el cliente solicite más de un presupuesto y/o correcciones y no contrate finalmente los servicios, deberá abonar los costos administrativos generados.</li>
        <li>Las entregas de contenidos se pactarán individualmente según las necesidades del cliente.</li>
        <li>Una vez aprobado el presupuesto, el cliente deberá abonar un anticipo del 50% para reservar y agendar el proyecto. El saldo del 50% restante se abonará contra entrega y aprobación final del material.</li>
        <li>En caso de presupuestos en dólares estadounidenses, si el cliente desea abonar en otra moneda, se aplicará el tipo de cambio oficial vigente al día del pago.</li>
      </ul>
    )
  },
  // ... (los puntos 6 al 47 siguen igual que antes, pero sin tipos)
  // Para no repetir todo el array aquí, solo cambiá estas líneas clave:
  // - Quita : number, : number | null, etc. en TODAS partes
  // Ejemplo del final del array:
  {
    id: 47,
    title: "Cumplimiento Normativo",
    content: (
      <p>
        El cliente se obliga a garantizar que los contenidos encargados no vulneran la normativa aplicable (incluyendo, pero no limitándose a, derechos de autor, marcas, imagen, normativa publicitaria o regulaciones estatales). La Empresa no será responsable por infracciones derivadas de instrucciones del cliente.
      </p>
    )
  },
];

const TermsPage = () => {
 
  return (
    <div><Terminos/></div>
  );
};

export default TermsPage;
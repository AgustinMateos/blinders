'use client'
import React, { useState } from 'react';
import Image from 'next/image';

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
      <ul className="list-disc pl-6 space-y-2">
        <li>Los presupuestos emitidos por la Empresa tendrán una validez de 30 días corridos.</li>
        <li>El cliente podrá solicitar hasta dos (2) cambios o correcciones sin costo adicional. A partir de la tercera modificación, se aplicarán cargos adicionales.</li>
        <li>En caso de que el cliente solicite más de un presupuesto y/o correcciones y no contrate finalmente los servicios, deberá abonar los costos administrativos generados.</li>
        <li>Las entregas de contenidos se pactarán individualmente según las necesidades del cliente.</li>
        <li>Una vez aprobado el presupuesto, el cliente deberá abonar un anticipo del 50% para reservar y agendar el proyecto. El saldo del 50% restante se abonará contra entrega y aprobación final del material.</li>
        <li>En caso de presupuestos en dólares estadounidenses, si el cliente desea abonar en otra moneda, se aplicará el tipo de cambio oficial vigente al día del pago.</li>
      </ul>
    )
  },
  {
    id: 6,
    title: "Política de Pagos y Moras",
    content: (
      <p>
        El incumplimiento en los plazos de pago habilitará a la Empresa a suspender la entrega del material hasta la regularización de la deuda, y/o aplicar intereses moratorios equivalentes a la tasa activa del Banco Nación para operaciones comerciales.
      </p>
    )
  },
  {
    id: 7,
    title: "Política de Reembolsos",
    content: (
      <>
        <p>
          En caso de que el cliente acepte un presupuesto y haya abonado el anticipo correspondiente, no se admitirán devoluciones bajo ningún concepto, aun cuando el cliente decidiera cancelar el proyecto por razones propias.
        </p>
        <p className="mt-3">
          El anticipo se considerará un pago no reembolsable en concepto de reserva de agenda, planificación y asignación de recursos técnicos y humanos.
        </p>
      </>
    )
  },
  {
    id: 8,
    title: "Derechos de Imagen y Responsabilidad del Cliente",
    content: (
      <p>
        Será exclusiva responsabilidad del cliente obtener las autorizaciones necesarias de todas las personas que aparezcan en las producciones. La Empresa no será responsable por reclamos vinculados con el uso indebido de derechos de imagen, marcas o propiedad intelectual de terceros.
      </p>
    )
  },
  {
    id: 9,
    title: "Uso Promocional de los Contenidos",
    content: (
      <p>
        Salvo acuerdo en contrario, la Empresa se reserva el derecho de utilizar fragmentos, adaptaciones o versiones reducidas de los contenidos producidos con fines promocionales en su portafolio, redes sociales y página web.
      </p>
    )
  },
  {
    id: 10,
    title: "Protección de Datos Personales",
    content: (
      <>
        <p>
          La Empresa podrá recopilar datos personales de los usuarios a través de formularios de contacto, WhatsApp Business u otros medios digitales. Dichos datos serán tratados conforme a la Ley Nº 25.326 de Protección de Datos Personales de la República Argentina, garantizando su confidencialidad y seguridad.
        </p>
        <p className="mt-3">
          El usuario podrá ejercer sus derechos de acceso, rectificación y supresión dirigiéndose a [colocar correo de contacto oficial].
        </p>
      </>
    )
  },
  {
    id: 11,
    title: "Uso del Sitio y Limitación de Responsabilidad",
    content: (
      <p>
        La Empresa no será responsable por daños derivados del mal uso del sitio web, interrupciones del servicio, errores técnicos, ataques informáticos, ni por el contenido de enlaces externos que pudieran incluirse.
      </p>
    )
  },
  {
    id: 12,
    title: "Política de Cookies",
    content: (
      <p>
        El sitio web podrá utilizar cookies para mejorar la experiencia de navegación. El usuario podrá configurar su navegador para rechazarlas, aunque ello podría afectar algunas funcionalidades del sitio.
      </p>
    )
  },
  {
    id: 13,
    title: "Fuerza Mayor",
    content: (
      <>
        <p>
          En caso de que circunstancias de fuerza mayor —incluyendo, pero no limitándose a, condiciones climáticas adversas, cortes de energía, restricciones gubernamentales, emergencias sanitarias o cualquier evento imprevisible fuera del control de la Empresa— impidan la correcta ejecución del servicio en la fecha pactada, ambas partes se comprometen a llegar a un acuerdo de reprogramación.
        </p>
        <p className="mt-3">
          Cuando el impedimento derive de condiciones climatológicas, la Empresa se compromete a realizar el servicio en la fecha de reprogramación acordada, sin costo adicional para el cliente.
        </p>
      </>
    )
  },
  {
    id: 14,
    title: "Confidencialidad",
    content: (
      <>
        <p>
          La Empresa se obliga a guardar estricta confidencialidad respecto de toda la información, documentación y/o material facilitado por el cliente para la ejecución de los proyectos contratados, salvo autorización expresa por escrito del mismo.
        </p>
        <p className="mt-3">
          El compromiso de confidencialidad permanecerá vigente incluso después de finalizada la relación contractual. La Empresa no será responsable en caso de filtraciones ocasionadas por hechos fortuitos, fuerza mayor o conductas atribuibles a terceros ajenos a su control.
        </p>
      </>
    )
  },
  {
    id: 15,
    title: "Cesión de Derechos de Terceros",
    content: (
      <p>
        El cliente será responsable de obtener licencias y autorizaciones respecto del uso de música, imágenes, locaciones u otros materiales de terceros que desee incluir en el proyecto. La Empresa no asumirá responsabilidad por reclamos derivados de la falta de dichas autorizaciones.
      </p>
    )
  },
  {
    id: 16,
    title: "Conservación de Archivos",
    content: (
      <p>
        La Empresa conservará los archivos originales y copias de seguridad de los proyectos por un período de 90 días corridos a partir de la entrega final. Transcurrido dicho plazo, podrá proceder a su eliminación sin responsabilidad alguna, salvo pacto en contrario.
      </p>
    )
  },
  {
    id: 17,
    title: "Limitación en la Entrega de Materiales",
    content: (
      <p>
        La entrega de los proyectos finales se realizará en los formatos y resoluciones expresamente acordados con el cliente. Solicitudes adicionales (por ejemplo, adaptaciones a nuevos formatos, versiones subtituladas adicionales, etc.) podrán implicar cargos extra.
      </p>
    )
  },
  {
    id: 18,
    title: "Uso Indebido de los Entregables",
    content: (
      <p>
        El cliente no podrá modificar, manipular ni reutilizar de manera indebida los materiales entregados sin autorización de la Empresa, salvo en los casos expresamente habilitados en el contrato o presupuesto correspondiente.
      </p>
    )
  },
  {
    id: 19,
    title: "Indemnidad",
    content: (
      <p>
        El cliente se obliga a mantener indemne a la Empresa frente a cualquier reclamo, acción o demanda de terceros que pudiera surgir como consecuencia del uso de los contenidos entregados, siempre que la causa derive de instrucciones o materiales provistos por el cliente.
      </p>
    )
  },
  {
    id: 20,
    title: "Plazos de Aceptación de Entregables",
    content: (
      <p>
        El cliente contará con un plazo máximo de cinco (5) días hábiles para revisar y aprobar el material entregado. Pasado dicho plazo, se considerará aceptado tácitamente.
      </p>
    )
  },
  {
    id: 21,
    title: "Penalidades por Demoras del Cliente",
    content: (
      <p>
        En caso de que el cliente no entregue en tiempo y forma los materiales, información, autorizaciones o acceso a locaciones necesarios para la producción, los plazos de entrega se prorrogarán automáticamente y la Empresa no será responsable por los retrasos ocasionados.
      </p>
    )
  },
  {
    id: 22,
    title: "Propiedad de los Materiales de Trabajo",
    content: (
      <p>
        Los brutos de grabación, archivos editables y demás materiales de producción son propiedad de la Empresa, salvo que se pacte expresamente su entrega, lo cual podrá implicar un costo adicional.
      </p>
    )
  },
  {
    id: 23,
    title: "Responsabilidad sobre Locaciones",
    content: (
      <p>
        El cliente será responsable de contar con los permisos, seguros y habilitaciones de las locaciones en las que se desarrolle la producción. La Empresa no asumirá responsabilidad alguna por sanciones o reclamos derivados de la falta de dichos permisos.
      </p>
    )
  },
  {
    id: 24,
    title: "Garantía de Servicio Técnico",
    content: (
      <p>
        La Empresa garantiza el correcto funcionamiento técnico de los equipos durante la producción. En caso de fallas técnicas atribuibles exclusivamente a la Empresa que afecten la calidad del material, se compromete a repetir las tomas sin costo adicional, siempre que sea razonablemente posible.
      </p>
    )
  },
  {
    id: 25,
    title: "Grabaciones en Espacios Públicos",
    content: (
      <p>
        Cuando se realicen grabaciones en la vía pública, el cliente será responsable de gestionar permisos ante las autoridades competentes. La Empresa no responderá por sanciones, reclamos o interrupciones derivadas de la falta de dichos permisos.
      </p>
    )
  },
  {
    id: 26,
    title: "Subcontratación",
    content: (
      <p>
        La Empresa podrá, cuando lo considere necesario, subcontratar servicios (ejemplo: drones, steadycam, maquilladores, músicos, actores, catering, transporte), manteniendo en todo caso la responsabilidad frente al cliente por la calidad del servicio.
      </p>
    )
  },
  {
    id: 27,
    title: "Responsabilidad Limitada",
    content: (
      <p>
        La responsabilidad total de la Empresa, en cualquier caso, estará limitada al monto efectivamente abonado por el cliente por el proyecto en cuestión.
      </p>
    )
  },
  {
    id: 28,
    title: "Vigencia Contractual Mínima",
    content: (
      <p>
        En proyectos de larga duración o servicios recurrentes, se podrá establecer una vigencia mínima de contratación y condiciones de rescisión anticipada, las cuales se pactarán individualmente en cada caso.
      </p>
    )
  },
  {
    id: 29,
    title: "Cláusula de No Competencia en Campañas Específicas",
    content: (
      <p>
        En casos de proyectos con marcas o campañas estratégicas, la Empresa podrá acordar con el cliente no prestar servicios a competidores directos durante un período determinado, salvo autorización expresa.
      </p>
    )
  },
  {
    id: 30,
    title: "Modificaciones de los Términos",
    content: (
      <p>
        La Empresa se reserva el derecho de modificar, actualizar o complementar los presentes Términos en cualquier momento. Dichas modificaciones entrarán en vigencia a partir de su publicación en la web, indicando la fecha de última actualización.
      </p>
    )
  },
  {
    id: 31,
    title: "Contacto",
    content: (
      <p>
        Para cualquier consulta relacionada con estos Términos, el usuario podrá comunicarse con la Empresa a través del correo electrónico: [colocar email oficial].
      </p>
    )
  },
  {
    id: 32,
    title: "Legislación Fiscal y Facturación",
    content: (
      <p>
        Todos los pagos se facturarán conforme a la normativa fiscal vigente en la República Argentina. El cliente se obliga a proveer sus datos fiscales correctos para la emisión de comprobantes, eximiendo a la Empresa de responsabilidades por datos erróneos o incompletos.
      </p>
    )
  },
  {
    id: 33,
    title: "Revisión Extraordinaria de Tarifas",
    content: (
      <p>
        En proyectos de larga duración (superiores a 90 días), la Empresa se reserva el derecho de revisar las tarifas en caso de variaciones significativas en los costos de producción, equipamiento, logística o cargas impositivas.
      </p>
    )
  },
  {
    id: 34,
    title: "Seguridad y Salud en el Trabajo",
    content: (
      <p>
        La Empresa cumplirá con las normas de seguridad aplicables durante la producción. No obstante, el cliente será responsable de garantizar condiciones seguras en las locaciones provistas y de informar cualquier riesgo potencial.
      </p>
    )
  },
  {
    id: 35,
    title: "Propiedad de Ideas Creativas y Propuestas",
    content: (
      <p>
        Las propuestas creativas, guiones, storyboards, moodboards o ideas presentadas por la Empresa en presupuestos o reuniones preliminares son de su exclusiva propiedad intelectual, aun si el proyecto no se contrata. Su uso sin autorización generará responsabilidad legal.
      </p>
    )
  },
  {
    id: 36,
    title: "Material Sensible o Prohibido",
    content: (
      <p>
        La Empresa se reserva el derecho de rechazar proyectos que impliquen contenidos que infrinjan la ley, promuevan discriminación, violencia, explotación de menores o cualquier otro material que considere contrario a la ética profesional.
      </p>
    )
  },
  {
    id: 37,
    title: "Idioma de Referencia",
    content: (
      <p>
        En caso de que estos Términos se traduzcan a otro idioma, prevalecerá siempre la versión redactada en español en caso de conflicto interpretativo.
      </p>
    )
  },
  {
    id: 38,
    title: "Nulidad Parcial",
    content: (
      <p>
        Si alguna cláusula de estos Términos fuese declarada inválida o inejecutable por autoridad competente, las demás disposiciones permanecerán vigentes y de pleno efecto.
      </p>
    )
  },
  {
    id: 39,
    title: "Integridad del Acuerdo",
    content: (
      <p>
        Los presentes Términos constituyen el acuerdo íntegro entre la Empresa y el usuario respecto del uso del sitio y de los servicios generales, y reemplazan cualquier acuerdo previo verbal o escrito.
      </p>
    )
  },
  {
    id: 40,
    title: "Responsabilidad sobre Transporte y Logística",
    content: (
      <p>
        Cuando los proyectos requieran traslados de personal, equipos o insumos, el cliente asumirá los costos y riesgos de logística salvo que expresamente se pacte que serán cubiertos por la Empresa.
      </p>
    )
  },
  {
    id: 41,
    title: "Daños a Equipos por Causas Externas",
    content: (
      <p>
        La Empresa no será responsable por daños en sus equipos derivados de condiciones inseguras, negligencia del cliente o de terceros bajo su control. En tales casos, los costos de reparación o reposición podrán ser reclamados al cliente.
      </p>
    )
  },
  {
    id: 42,
    title: "Autorización de Uso de Marca",
    content: (
      <p>
        El cliente autoriza a la Empresa a incluir su nombre y logotipo en listados de clientes o presentaciones comerciales, salvo que notifique lo contrario por escrito.
      </p>
    )
  },
  {
    id: 43,
    title: "Conflictos de Interés",
    content: (
      <p>
        La Empresa podrá abstenerse de participar en proyectos que generen un conflicto ético o de interés con clientes actuales, informando debidamente al nuevo solicitante.
      </p>
    )
  },
  {
    id: 44,
    title: "Plazo de Prescripción de Reclamos",
    content: (
      <p>
        Cualquier reclamo del cliente derivado de los servicios prestados deberá formularse dentro de los 30 días corridos posteriores a la entrega final. Pasado dicho plazo, la Empresa quedará liberada de toda responsabilidad.
      </p>
    )
  },
  {
    id: 45,
    title: "Cesión del Contrato",
    content: (
      <p>
        El cliente no podrá ceder total ni parcialmente sus derechos u obligaciones derivados de la contratación de servicios con la Empresa sin autorización expresa y por escrito.
      </p>
    )
  },
  {
    id: 46,
    title: "Notificaciones",
    content: (
      <p>
        Toda notificación vinculada a estos Términos deberá realizarse por escrito al correo electrónico oficial de la Empresa o al que ésta designe, teniendo pleno efecto legal.
      </p>
    )
  },
  {
    id: 47,
    title: "Cumplimiento Normativo",
    content: (
      <p>
        El cliente se obliga a garantizar que los contenidos encargados no vulneran la normativa aplicable (incluyendo, pero no limitándose a, derechos de autor, marcas, imagen, normativa publicitaria o regulaciones estatales). La Empresa no será responsable por infracciones derivadas de instrucciones del cliente.
      </p>
    )
  }
];

const Terminos = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-20 px-4 md:px-8 bg-black min-h-screen text-white">
      <div className=" mx-auto">

        {/* Header */}
        <div className="border-t-2 border-b-2 border-[#262626] flex items-center justify-between h-[120px] md:h-[139px] px-4 md:px-0">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider font-bold"
            style={{ fontFamily: "'Big Shoulders', sans-serif", fontWeight: 700 }}
          >
            Términos y condiciones
          </h1>
          <Image
            src="/SubtractRed2.svg"
            alt="Blinders Logo"
            width={82}
            height={139}
            className="w-16 md:w-20 lg:w-24 h-auto object-contain"
          />
        </div>

        {/* Fecha de actualización */}
        <p className="mt-8 mb-10 text-gray-400 text-center md:text-left">
          Última actualización: [colocar fecha de publicación]
        </p>

        {/* Acordeón */}
        <div className="space-y-3 md:space-y-4">
          {termsAndConditions.map((item) => (
            <div
              key={item.id}
              className="border border-[#333] rounded-lg overflow-hidden bg-[#0a0a0a]"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full px-5 py-4 md:py-5 flex items-center justify-between text-left hover:bg-[#111] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl md:text-2xl font-bold text-[#717171] min-w-[2.5rem]">
                    {item.id}.
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                </div>
                <span className="text-2xl md:text-3xl font-bold text-gray-500">
                  {openId === item.id ? '−' : '+'}
                </span>
              </button>

              <div
                className={`px-5 pb-5 md:px-6 md:pb-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === item.id
                    ? 'max-h-[1500px] opacity-100 pt-4 border-t border-[#262626]'
                    : 'max-h-0 opacity-0 pt-0'
                }`}
              >
                <div className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Contacto */}
        <div className="mt-12 pt-8 border-t border-[#262626] text-center text-gray-400">
          <p>
            Para consultas: <span className="text-red-400">blinders.av@gmail.com</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Terminos;
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "agustinrotondomateos@gmail.com";
const LOGO_URL =
  "https://res.cloudinary.com/duq7xuzmo/image/upload/v1777580644/SubtractRed_ygro73.png";
const FOOTER_LOGO_URL =
  "https://res.cloudinary.com/duq7xuzmo/image/upload/v1777581142/SubtractRed2_gsp2fk.png";

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildContactTemplate({ nombre, telefono, email, tipoProyecto, mensaje }) {
  const now = new Date();
  const formattedDate = now.toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <div style="margin:0;padding:0;background:#f5f5f5;color:#101010;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;margin:0 auto;padding:24px;">
        <tr>
          <td style="padding:22px;border:1px solid #262626;border-radius:10px;background:#000;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="left">
                  <img src="${LOGO_URL}" alt="Blinders" width="72" style="display:block;height:auto;" />
                </td>
                <td align="right" style="font-size:13px;color:#d4d4d4;">
                  ${formattedDate}
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
              <tr>
                <td style="color:#fff;">
                  <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#f2f2f2;">
                    Nos ha llegado un mensaje de <strong>${escapeHtml(nombre)}</strong> para contactarnos por un proyecto <strong>${escapeHtml(tipoProyecto || "No especificado")}</strong>.
                  </p>
                  <p style="margin:0 0 8px;font-size:15px;"><strong>Mensaje:</strong></p>
                  <p style="margin:0 0 18px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#f2f2f2;">${escapeHtml(mensaje)}</p>
                  <p style="margin:0 0 8px;font-size:14px;color:#f2f2f2;"><strong>Aquí están los datos de contacto:</strong></p>
                  <p style="margin:0 0 6px;font-size:14px;color:#f2f2f2;">${escapeHtml(telefono)}</p>
                  <p style="margin:0;font-size:14px;color:#f2f2f2;">${escapeHtml(email)}</p>
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;">
              <tr>
                <td align="left" style="font-size:12px;color:#9e9e9e;line-height:1.5;">
                  Este es un mensaje interno enviado desde el formulario de contacto de Blinders.<br />
                  © ${now.getFullYear()} Blinders. Todos los derechos reservados.
                </td>
                <td align="right" style="width:92px;">
                  <img src="${FOOTER_LOGO_URL}" alt="Blinders Footer Logo" width="72" style="display:block;height:auto;margin-left:auto;" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, telefono, email, tipoProyecto, mensaje } = body;

    if (!nombre || !telefono || !email || !mensaje) {
      return Response.json(
        { error: "Completá todos los campos obligatorios." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Falta configurar RESEND_API_KEY en variables de entorno." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "Blinders <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto web - ${nombre}`,
      html: buildContactTemplate({ nombre, telefono, email, tipoProyecto, mensaje }),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo de contacto:", error);
    return Response.json(
      { error: "No se pudo enviar el correo. Intentá nuevamente." },
      { status: 500 }
    );
  }
}

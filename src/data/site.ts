/**
 * Configuración general del sitio.
 * Todo lo que deban cambiar con frecuencia (correo, textos del hero, fotos) vive aquí.
 */

export const site = {
  name: 'Luminaris',
  // TODO: reemplazar por el correo real de contacto.
  email: 'contacto@ejemplo.com',
  // TODO: reemplazar por el WhatsApp real (formato internacional sin +, espacios ni guiones; 52 = México).
  whatsapp: '520000000000',
  whatsappMessage: 'Hola Luminaris, me gustaría información sobre sus servicios.',
  description:
    'Luminaris crea páginas y aplicaciones web, automatiza procesos y diseña placas con QR y NFC para pymes.',
};

/**
 * Propuestas para el mensaje principal (hero).
 * Cambien `heroChoice` a 0, 1 o 2 para elegir la que más les guste.
 */
export const heroOptions = [
  {
    title: 'Tecnología clara para hacer crecer tu negocio.',
    subtitle:
      'Creamos páginas y aplicaciones web, automatizamos procesos y diseñamos placas con QR y NFC para pymes. Sin tecnicismos.',
  },
  {
    title: 'Ilumina tu negocio en lo digital.',
    subtitle:
      'Páginas web, automatizaciones y placas inteligentes para que tu empresa se vea y funcione mejor.',
  },
  {
    title: 'Lo digital, hecho simple.',
    subtitle:
      'Te acompañamos de principio a fin con un lenguaje claro, precios competitivos y pagos fáciles.',
  },
] as const;

export const heroChoice = 0;

/**
 * Proyectos reales que se muestran como ejemplo.
 * Las capturas viven en src/assets/proyectos (Astro las optimiza a WebP al compilar).
 */
import terapianidia from '../assets/proyectos/terapianidia.png';
import garycapture from '../assets/proyectos/garycapture.png';

export const projects = {
  terapianidia: {
    name: 'Terapia Nidia',
    description: 'Sitio web para una terapeuta en Mérida.',
    url: 'https://terapianidia.com/',
    image: terapianidia,
  },
  garycapture: {
    name: 'Gary',
    description: 'Sitio de descarga de una aplicación para capturar imagen.',
    url: 'https://garycapture.pages.dev/',
    image: garycapture,
  },
};

/**
 * Fotos de la página.
 * Opción A (recomendada): pongan la imagen en src/assets/, impórtenla arriba y úsenla aquí.
 * Opción B: pongan la imagen en public/images/ y escriban la ruta como texto ('/images/foto.jpg').
 * Mientras el valor sea null se muestra una ilustración animada genérica.
 */
export const images: Record<string, ImageMetadata | string | null> = {
  automatizacion: null,
  placas: null,
};

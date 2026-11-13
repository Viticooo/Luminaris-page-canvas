/**
 * Información INTERNA de Luminaris (panel /gestion) — DATOS DE EJEMPLO.
 * Es el contenido inicial: lo que agreguen o borren desde el panel se guarda en el navegador (localStorage).
 * El botón "Restablecer datos" del panel vuelve a estos valores.
 *
 * ⚠️ Este sitio es estático: todo lo que esté aquí termina en el HTML de /gestion.
 *    Protejan esa ruta (ver README → "Proteger el panel de gestión") antes de poner datos reales.
 */

export interface Tarea { id: string; titulo: string; area: string; hecha: boolean }
export interface Proveedor { id: string; nombre: string; servicio: string; contacto: string }
export interface Recurso { id: string; nombre: string; categoria: string }
export type Frecuencia = 'mensual' | 'anual' | 'unico';
export interface Costo { id: string; concepto: string; frecuencia: Frecuencia; monto: number }

export interface DatosGestion {
  tareas: Tarea[];
  proveedores: Proveedor[];
  recursos: Recurso[];
  costos: Costo[];
}

export const areasTarea = ['Sitio web', 'Contenido', 'Seguridad', 'Clientes', 'Administración', 'Otro'];
export const categoriasRecurso = ['Equipo', 'Servicio', 'Software', 'Insumo'];
export const frecuencias: { value: Frecuencia; label: string }[] = [
  { value: 'mensual', label: 'Mensual' },
  { value: 'anual', label: 'Anual' },
  { value: 'unico', label: 'Pago único' },
];

export const datosIniciales: DatosGestion = {
  tareas: [
    { id: 't1', titulo: 'Proteger el panel de gestión con Cloudflare Access', area: 'Seguridad', hecha: false },
    { id: 't2', titulo: 'Reemplazar el correo y WhatsApp de ejemplo', area: 'Sitio web', hecha: false },
    { id: 't3', titulo: 'Elegir el mensaje principal (3 opciones)', area: 'Sitio web', hecha: false },
    { id: 't4', titulo: 'Tomar fotos reales de una placa QR/NFC', area: 'Contenido', hecha: false },
    { id: 't5', titulo: 'Configurar el dominio final', area: 'Sitio web', hecha: false },
    { id: 't6', titulo: 'Publicar el sitio en Cloudflare Pages', area: 'Sitio web', hecha: false },
    { id: 't7', titulo: 'Agregar capturas de proyectos (Terapia Nidia y Gary)', area: 'Contenido', hecha: true },
  ],
  proveedores: [
    { id: 'p1', nombre: 'Cloudflare', servicio: 'Hosting, dominio y publicación web', contacto: 'dash.cloudflare.com · soporte en línea' },
    { id: 'p2', nombre: 'Claude Code', servicio: 'Asistente de desarrollo', contacto: 'support.claude.com' },
    { id: 'p3', nombre: 'GitHub', servicio: 'Control de versiones del código', contacto: 'support.github.com' },
    { id: 'p4', nombre: 'Persona particular', servicio: 'Impresiones 3D', contacto: 'WhatsApp 999 123 4567' },
  ],
  recursos: [
    { id: 'r1', nombre: 'Luz', categoria: 'Servicio' },
    { id: 'r2', nombre: 'Internet', categoria: 'Servicio' },
    { id: 'r3', nombre: 'PC / laptop', categoria: 'Equipo' },
    { id: 'r4', nombre: 'Dispositivos móviles', categoria: 'Equipo' },
    { id: 'r5', nombre: 'Claude Code', categoria: 'Software' },
    { id: 'r6', nombre: 'Insumos para el equipo', categoria: 'Insumo' },
  ],
  // Montos aproximados en MXN (ejemplo).
  costos: [
    { id: 'c1', concepto: 'Internet', frecuencia: 'mensual', monto: 499 },
    { id: 'c2', concepto: 'Suscripción de Claude Code (plan Pro, ~20 USD)', frecuencia: 'mensual', monto: 370 },
    { id: 'c3', concepto: 'Dominio .com', frecuencia: 'anual', monto: 250 },
    { id: 'c4', concepto: 'Hosting (Cloudflare Pages, plan gratuito)', frecuencia: 'mensual', monto: 0 },
    { id: 'c5', concepto: 'Bases de datos (plan gratuito)', frecuencia: 'mensual', monto: 0 },
  ],
};

export const tiempoPorProyecto = '~1 mes';

export const notaCostos =
  'Los costos varían según el tiempo, la complejidad, los servicios y las aplicaciones que requiera cada proyecto, y según el tipo de servicio solicitado.';

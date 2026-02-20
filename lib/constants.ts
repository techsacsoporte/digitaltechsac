// ═══════════════════════════════════════════════════════
// CONFIGURACIÓN CENTRAL — Edita aquí todo el contenido
// ═══════════════════════════════════════════════════════

export const SITE_CONFIG = {
  name: 'Digital TechSac',
  shortName: 'DT',
  url: 'https://digitaltechsac.com',
  locale: 'es_CO',
  language: 'es',
  country: 'CO',
  description:
    'Diseña como profesional sin pagar mensualidades caras. Licencia Canva Pro EDU 1 año por $19.900 COP. Activamos primero, pagas después. IA, quitafondos, +100M recursos premium. Nequi, DaviPlata, Bancolombia. ¡Activa hoy!',
  longDescription:
    'Diseña como profesional con Canva Pro EDU por solo $19.900 COP al año. Digital TechSac activa tu licencia antes de que pagues — cero riesgo. Incluye IA generativa, quitafondos automático, +100 millones de recursos premium, kit de marca y 100GB en la nube. Paga por Nequi, DaviPlata o Bancolombia. Más de 500 colombianos ya confían en nosotros.',
  keywords: [
    'canva pro colombia',
    'canva pro barato',
    'licencia canva edu',
    'canva pro 1 año',
    'canva pro economico colombia',
    'comprar canva pro nequi',
    'canva pro daviplata',
    'canva pro bancolombia',
    'diseño grafico barato colombia',
    'digital techsac',
    'canva pro activacion inmediata',
    'canva pro para estudiantes',
    'canva pro emprendedores',
    'canva pro sin mensualidades',
    'herramientas diseño colombia',
    'canva pro precio colombia 2025',
    'canva pro edu que es',
    'canva pro oferta',
    'diseño grafico profesional barato',
    'como comprar canva pro en colombia',
    'canva pro anual barato',
    'canva pro licencia educativa',
    'canva pro vs canva gratis',
    'canva pro pago unico',
    'diseñar como profesional gratis',
  ],
};

export const WHATSAPP = {
  number: '573013794793',
  defaultMessage:
    'Hola Digital TechSac! 👋 Vengo de la web. Quiero aprovechar la oferta de Canva Pro por $19.900 COP pagando después de activar. ¿Me ayudan?',
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
  },
};

export const PRICING = {
  original: 180_000,
  current: 19_900,
  currency: 'COP',
  duration: '1 año',
  get savings() {
    return this.original - this.current;
  },
  get discountPercent() {
    return Math.round((this.savings / this.original) * 100);
  },
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/digitaltechsac',
  facebook: 'https://facebook.com/DigitalTechsac',
};

// ═══════════════════════════════════════════════════════
// IMÁGENES EXTERNAS — Sin necesidad de subir archivos
// ═══════════════════════════════════════════════════════
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=675&fit=crop&q=80',
  heroAlt: 'Persona diseñando contenido digital profesional en computador con herramientas de diseño gráfico modernas',
  og: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=630&fit=crop&q=80',
  // Logo local (el que subiste)
  logo: '/images/logo.png',
  logoAlt: 'Digital TechSac - Logo DT con flecha de crecimiento',
};

export const FEATURES = [
  {
    emoji: '🪄',
    emojiLabel: 'Varita mágica',
    title: 'Quitafondos con IA',
    description:
      'Elimina el fondo de cualquier imagen o video con un solo clic gracias a la inteligencia artificial de Canva Pro. Ideal para catálogos de productos y contenido e-commerce.',
  },
  {
    emoji: '🤖',
    emojiLabel: 'Robot',
    title: 'IA Generativa Mágica',
    description:
      'Genera imágenes, textos y diseños completos desde cero solo describiendo lo que necesitas. Di adiós al bloqueo creativo con la IA integrada de Canva.',
  },
  {
    emoji: '💎',
    emojiLabel: 'Diamante',
    title: 'Contenido Premium Ilimitado',
    description:
      'Accede a más de 100 millones de fotos, videos, audios y plantillas profesionales sin marcas de agua. Todo el contenido premium incluido sin costos adicionales.',
  },
  {
    emoji: '🎨',
    emojiLabel: 'Paleta de colores',
    title: 'Kit de Marca Profesional',
    description:
      'Configura tus logos, tipografías y paleta de colores corporativos. Mantén la identidad visual de tu marca coherente en todos tus diseños automáticamente.',
  },
  {
    emoji: '📏',
    emojiLabel: 'Regla de ajuste',
    title: 'Redimensionamiento Mágico',
    description:
      'Adapta un mismo diseño para Instagram, TikTok, YouTube, Facebook y Stories en segundos con un solo clic. Ahorra horas de trabajo manual.',
  },
  {
    emoji: '☁️',
    emojiLabel: 'Nube',
    title: '100GB en la Nube',
    description:
      'Almacenamiento en la nube de 100 gigabytes para guardar todos tus proyectos, recursos y archivos de marca. Accede desde cualquier dispositivo.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Tenía desconfianza por el precio, pero me activaron la cuenta en mi propio correo antes de pagar. ¡Excelente servicio y ahorro gigante! Recomendadísimos para todo emprendedor.',
    name: 'Camilo R.',
    role: 'Emprendedor Digital, Medellín',
    initials: 'CR',
    color: 'bg-brand-purple',
  },
  {
    quote:
      'Soy estudiante de diseño gráfico y esto me salvó la vida. Las herramientas de IA son increíbles y el soporte por WhatsApp es muy rápido y amable. 100% recomendado.',
    name: 'Andrea M.',
    role: 'Estudiante de Diseño, Bogotá',
    initials: 'AM',
    color: 'bg-brand-accent',
  },
  {
    quote:
      'Llevo 6 meses con la licencia y cero problemas. La mejor inversión que he hecho para mi negocio de redes sociales y community management. Ya no pago mensualidades.',
    name: 'Javier T.',
    role: 'Community Manager, Cali',
    initials: 'JT',
    color: 'bg-slate-800',
  },
];

export const FAQS = [
  {
    question: '¿En serio activan primero y pago después?',
    answer:
      '¡Sí, absolutamente! Esa es nuestra garantía de confianza. Nos compartes tu correo electrónico (el que usas en Canva), te activamos la licencia Canva Pro EDU, tú verificas que todo funcione correctamente y que tengas acceso completo a las funciones premium, y solo entonces realizas el pago. Es cero riesgo para ti.',
  },
  {
    question: '¿La licencia Canva Pro EDU es legal y cuánto dura?',
    answer:
      'Es una licencia educativa (EDU) 100% legal y oficial, gestionada a través de instituciones educativas asociadas al programa de Canva. Tiene una duración garantizada de 1 año completo (365 días). No es una cuenta "crackeada", pirata ni compartida ilegalmente. Recibes acceso completo a todas las funciones de Canva Pro.',
  },
  {
    question: '¿Qué medios de pago aceptan en Colombia?',
    answer:
      'Aceptamos los métodos de pago más populares en Colombia: transferencias por Nequi, DaviPlata y Bancolombia. El pago se coordina directamente por WhatsApp una vez que hayas verificado que tu cuenta Canva Pro está activa y funcionando correctamente.',
  },
  {
    question: '¿Mis diseños existentes se pierden al activar?',
    answer:
      '¡No! Al activar la licencia Pro EDU en tu propio correo electrónico, absolutamente todos tus diseños anteriores se mantienen intactos. Tu cuenta gratuita simplemente se actualiza a Pro y se desbloquean todas las funciones premium como quitafondos, IA generativa, plantillas exclusivas y contenido premium.',
  },
  {
    question: '¿Puedo usar Canva Pro en varios dispositivos?',
    answer:
      'Sí, puedes iniciar sesión en tu cuenta Canva Pro EDU desde cualquier dispositivo: computador de escritorio, portátil, tablet o celular. Es tu cuenta personal con todas las funciones Pro desbloqueadas en todos tus dispositivos simultáneamente.',
  },
  {
    question: '¿Qué pasa cuando se cumple el año de la licencia?',
    answer:
      'Al cumplirse los 365 días, tu cuenta regresa automáticamente al plan gratuito de Canva. Todos tus diseños y proyectos se conservan intactos, solo pierdes acceso temporal a las funciones Pro. Puedes renovar con nosotros al mismo precio especial de $19.900 COP contactándonos por WhatsApp.',
  },
  {
    question: '¿Incluye todas las funciones de Canva Pro?',
    answer:
      'Sí, la licencia Canva Pro EDU incluye absolutamente todas las funciones premium: quitafondos automático con IA, generador de imágenes con inteligencia artificial, más de 100 millones de recursos premium (fotos, videos, audios), kit de marca, redimensionamiento mágico, 100GB de almacenamiento en la nube, y todas las actualizaciones que Canva lance durante tu año de licencia.',
  },
];

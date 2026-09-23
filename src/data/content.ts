export type RecognitionLevel =
  | "seleccionada"
  | "consentido"
  | "destacada"
  | "en-revision";

export type Experience = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: "Gastronomía" | "Cultura" | "Comunidad" | "Naturaleza" | "Patrimonio" | "Arte" | "Bienestar";
  zone: string;
  senses: string[];
  duration: string;
  durationMinutes: number;
  price: string;
  priceAmount: number;
  priceBand: "Gratis" | "Hasta $500" | "$501 a $1,000" | "Más de $1,000";
  accessible: boolean;
  free: boolean;
  season: string;
  audience: string;
  travelerTypes: string[];
  responsible: string;
  locationLabel: string;
  mapQuery: string;
  schedule: string;
  includes: string[];
  notIncludes: string[];
  reservation: string;
  children: string;
  pets: string;
  languages: string[];
  paymentMethods: string[];
  recommendations: string[];
  contact: {
    whatsapp?: string;
    instagram?: string;
    website?: string;
  };
  recognition: RecognitionLevel;
  evaluationDate?: string;
  validUntil?: string;
  verificationCode?: string;
  verified: boolean;
  updatedAt: string;
  confirmedBy: string;
  highlights: string[];
  practices: string[];
};

export type Route = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  stops: string[];
  senses: string[];
};

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
};

export type Event = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  displayDate: string;
  place: string;
  free: boolean;
};

export const destination = {
  slug: "cholula",
  name: "Cholula",
  state: "Puebla",
  edition: "Experiencias ConSentido Cholula",
  updatedAt: "23 de septiembre de 2026",
};

const operationalDefaults = {
  responsible: "Responsable por confirmar",
  locationLabel: "Ubicación exacta disponible al confirmar la experiencia",
  mapQuery: "Cholula Puebla",
  schedule: "Horario por confirmar con la persona responsable",
  includes: ["Acompañamiento descrito en la ficha", "Información previa para la visita"],
  notIncludes: ["Traslados no indicados", "Consumos adicionales"],
  reservation: "Por confirmar",
  children: "Consultar antes de reservar",
  pets: "Consultar antes de asistir",
  languages: ["Español"],
  paymentMethods: ["Por confirmar"],
  recommendations: ["Usar calzado cómodo", "Confirmar condiciones antes de trasladarse", "Pedir permiso antes de fotografiar personas"],
  contact: {
    instagram: "https://www.instagram.com/experiencia_consentido/",
  },
  verified: false,
};

export const experiences: Experience[] = [
  {
    slug: "sabores-del-mercado",
    title: "Sabores del mercado de Cholula",
    summary: "Una lectura del territorio a través de ingredientes, oficios y conversaciones alrededor de la mesa.",
    description:
      "Recorrido editorial de muestra para explicar cómo se documentará una experiencia gastronómica: quién recibe, qué se aprende, cuánto dura y qué prácticas aportan al destino.",
    category: "Gastronomía",
    zone: "San Pedro Cholula",
    senses: ["Gusto", "Olfato", "Vista"],
    duration: "2 h 30 min",
    durationMinutes: 150,
    price: "Precio por confirmar",
    priceAmount: 450,
    priceBand: "Hasta $500",
    accessible: true,
    free: false,
    season: "Todo el año",
    audience: "Viajeros curiosos y familias",
    travelerTypes: ["Familias", "Primera visita", "Foodies"],
    ...operationalDefaults,
    recognition: "en-revision",
    updatedAt: "21 sep 2026",
    confirmedBy: "Ficha editorial de demostración",
    highlights: ["Ingredientes de temporada", "Historias de comerciantes", "Consumo local"],
    practices: ["Participación de productores locales", "Información previa clara", "Grupos pequeños"],
  },
  {
    slug: "barro-manos-y-memoria",
    title: "Barro, manos y memoria",
    summary: "Acercamiento respetuoso a un oficio local desde el proceso, la autoría y la memoria de quien lo conserva.",
    description:
      "Perfil demostrativo de una experiencia cultural. La publicación definitiva requerirá autorización de la persona anfitriona, atribución fotográfica y confirmación operativa.",
    category: "Cultura",
    zone: "San Andrés Cholula",
    senses: ["Tacto", "Vista", "Oído"],
    duration: "2 horas",
    durationMinutes: 120,
    price: "Precio por confirmar",
    priceAmount: 380,
    priceBand: "Hasta $500",
    accessible: false,
    free: false,
    season: "Con reservación",
    audience: "Adultos y jóvenes",
    travelerTypes: ["Parejas", "Adultos", "Viajeros creativos"],
    ...operationalDefaults,
    recognition: "en-revision",
    updatedAt: "21 sep 2026",
    confirmedBy: "Ficha editorial de demostración",
    highlights: ["Demostración de oficio", "Autoría reconocida", "Pieza personal"],
    practices: ["Respeto a la propiedad cultural", "Compra directa", "Uso responsable de imágenes"],
  },
  {
    slug: "cholula-a-paso-lento",
    title: "Cholula a paso lento",
    summary: "Un recorrido para observar el paisaje, entender los barrios y visitar espacios religiosos con respeto.",
    description:
      "Ejemplo de ficha para una caminata interpretativa. No revela sitios sensibles y pone primero las reglas de convivencia del territorio.",
    category: "Comunidad",
    zone: "Centro y barrios",
    senses: ["Vista", "Oído", "Olfato"],
    duration: "3 horas",
    durationMinutes: 180,
    price: "Acceso libre",
    priceAmount: 0,
    priceBand: "Gratis",
    accessible: true,
    free: true,
    season: "Todo el año",
    audience: "Primera visita a Cholula",
    travelerTypes: ["Familias", "Primera visita", "Viajeros solos"],
    ...operationalDefaults,
    recognition: "en-revision",
    updatedAt: "21 sep 2026",
    confirmedBy: "Ficha editorial de demostración",
    highlights: ["Lectura del paisaje", "Contexto histórico", "Código de visita responsable"],
    practices: ["Sin divulgar espacios sensibles", "Respeto religioso", "Movilidad a pie"],
  },
  {
    slug: "milpa-y-temporada",
    title: "Milpa y temporada",
    summary: "Una experiencia alrededor de ciclos agrícolas, sabores estacionales y saberes compartidos.",
    description:
      "Muestra de cómo el sitio podrá comunicar temporalidad, impacto comunitario y participación de productores sin romantizar el trabajo rural.",
    category: "Naturaleza",
    zone: "Entorno rural",
    senses: ["Gusto", "Tacto", "Olfato"],
    duration: "4 horas",
    durationMinutes: 240,
    price: "Precio por confirmar",
    priceAmount: 620,
    priceBand: "$501 a $1,000",
    accessible: false,
    free: false,
    season: "Según ciclo agrícola",
    audience: "Grupos pequeños",
    travelerTypes: ["Parejas", "Adultos", "Grupos pequeños"],
    ...operationalDefaults,
    recognition: "en-revision",
    updatedAt: "21 sep 2026",
    confirmedBy: "Ficha editorial de demostración",
    highlights: ["Producto de temporada", "Interpretación del ciclo", "Comida compartida"],
    practices: ["Calendario agrícola", "Beneficio directo", "Capacidad limitada"],
  },
];

export const routes: Route[] = [
  {
    slug: "un-dia-entre-sabores-y-barrios",
    title: "Un día entre sabores y barrios",
    summary: "Itinerario pausado para una primera visita: mercado, paisaje y conversación local.",
    duration: "1 día",
    stops: ["Sabores del mercado", "Pausa en el centro", "Cholula a paso lento"],
    senses: ["Gusto", "Vista", "Oído"],
  },
  {
    slug: "oficios-que-cuentan",
    title: "Oficios que cuentan",
    summary: "Medio día para acercarse a procesos creativos, autorías y compras responsables.",
    duration: "Medio día",
    stops: ["Barro, manos y memoria", "Comercio local", "Café de cierre"],
    senses: ["Tacto", "Vista"],
  },
  {
    slug: "cholula-mas-alla-de-la-piramide",
    title: "Cholula más allá de la pirámide",
    summary: "Una propuesta para comprender barrios, oficios y espacios cotidianos sin invadir lugares sensibles.",
    duration: "1 día",
    stops: ["Lectura territorial", "Comercio local", "Historia del destino"],
    senses: ["Vista", "Oído"],
  },
  {
    slug: "sabores-con-identidad",
    title: "Sabores con identidad",
    summary: "Ruta gastronómica de muestra centrada en origen, temporada y autoría culinaria.",
    duration: "Medio día",
    stops: ["Mercado", "Cocina local", "Producto de temporada"],
    senses: ["Gusto", "Olfato"],
  },
  {
    slug: "cholula-en-familia",
    title: "Cholula en familia",
    summary: "Actividades de ritmo flexible con condiciones para niñas, niños y personas acompañantes.",
    duration: "1 día",
    stops: ["Actividad cultural", "Pausa accesible", "Recorrido corto"],
    senses: ["Vista", "Tacto", "Gusto"],
  },
  {
    slug: "un-dia-de-lluvia",
    title: "Qué hacer cuando llueve",
    summary: "Alternativas bajo techo sujetas a confirmación de horarios y disponibilidad.",
    duration: "Medio día",
    stops: ["Taller", "Historia local", "Mesa compartida"],
    senses: ["Tacto", "Oído", "Gusto"],
  },
  {
    slug: "fin-de-semana-con-sentido",
    title: "Fin de semana con sentido",
    summary: "Dos días con espacio para descubrir, descansar y consumir de forma local.",
    duration: "2 días",
    stops: ["Sabores y mercado", "Oficios locales", "Paisaje y barrios"],
    senses: ["Gusto", "Vista", "Oído", "Tacto", "Olfato"],
  },
  {
    slug: "cholula-con-presupuesto-cuidado",
    title: "Cholula con presupuesto cuidado",
    summary: "Experiencias gratuitas o de costo moderado con gastos claramente identificados.",
    duration: "1 día",
    stops: ["Recorrido libre", "Consumo local opcional", "Actividad editorial"],
    senses: ["Vista", "Oído"],
  },
];

export const stories: Story[] = [
  {
    slug: "por-que-conocer-tambien-es-reconocer",
    title: "Por qué conocer también es reconocer",
    excerpt: "Viajar con atención implica nombrar a quienes sostienen un territorio y entender el valor detrás de cada experiencia.",
    category: "Viaje consciente",
    readingTime: "5 min",
    publishedAt: "21 sep 2026",
  },
  {
    slug: "los-cinco-sentidos-como-guia",
    title: "Los cinco sentidos como guía de viaje",
    excerpt: "Una forma sencilla de pasar de observar un destino a relacionarnos con él de manera más profunda.",
    category: "Metodología",
    readingTime: "4 min",
    publishedAt: "21 sep 2026",
  },
];

export const events: Event[] = [
  {
    slug: "agenda-abierta-de-cholula",
    title: "Agenda abierta de Cholula",
    summary: "Espacio preparado para publicar festividades, talleres y recorridos una vez confirmados por sus responsables.",
    date: "2026-10-01",
    displayDate: "Próximamente",
    place: "Cholula, Puebla",
    free: true,
  },
];

export const criteria = [
  "Autenticidad e identidad territorial",
  "Calidad y hospitalidad",
  "Diseño sensorial",
  "Claridad de la información",
  "Seguridad y cuidado",
  "Accesibilidad",
  "Sostenibilidad",
  "Participación de productores locales",
  "Impacto comunitario",
  "Innovación turística",
  "Respeto al patrimonio",
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getRoute(slug: string) {
  return routes.find((route) => route.slug === slug);
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Planea tu visita", description: "Transporte, clima, accesibilidad, costos y recomendaciones para preparar una visita responsable a Cholula." };
const topics = [
  ["Cómo llegar", "Las rutas y tiempos cambian según el punto de origen. Antes de publicar instrucciones específicas se contrastarán fuentes y condiciones vigentes."],
  ["Transporte", "Combina recorridos a pie con transporte autorizado y deja margen entre San Pedro, San Andrés y localidades cercanas."],
  ["Estacionamiento", "La disponibilidad varía por zona, horario y festividades. No asumas que cada experiencia cuenta con estacionamiento propio."],
  ["Horarios y cierres", "Talleres, templos, mercados y espacios comunitarios pueden modificar horarios sin previo aviso. Confirma antes de trasladarte."],
  ["Costos aproximados", "Cada ficha distinguirá precio, inclusiones, consumos adicionales y políticas de reservación. Lo no confirmado aparecerá como tal."],
  ["Clima y temporada", "Lleva protección solar o para lluvia según la temporada y considera que algunas experiencias dependen del ciclo agrícola."],
  ["Aglomeraciones", "Fines de semana y celebraciones pueden aumentar tránsito, ruido y tiempos. Las rutas propondrán alternativas y horarios responsables."],
  ["Seguridad", "Cuida pertenencias, utiliza canales de contacto confirmados y evita acceder a zonas no autorizadas o espacios sensibles."],
  ["Accesibilidad", "Las fichas documentarán superficies, escalones, sanitarios, ruido y apoyos. Ausencia de información no significa accesibilidad."],
  ["Prácticas culturales", "Pregunta antes de fotografiar personas, respeta celebraciones y espacios religiosos y sigue las indicaciones de la comunidad anfitriona."],
];

export default function PlanPage() {
  return <main id="contenido">
    <PageHero eyebrow="ANTES DE LLEGAR" title="Planea con información, viaja con respeto." description="Una guía práctica que distingue lo confirmado, lo estacional y lo que todavía debe verificarse. No mostraremos solamente lo bonito." back={{ label: "Edición Cholula", href: "/cholula" }} />
    <section className="section surface"><div className="notice wide"><strong>Información operativa en validación</strong><p>Esta versión presenta la estructura completa. Los datos específicos se publicarán con fecha, fuente identificable y canal de actualización.</p></div><div className="guidance-grid">{topics.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <section className="section faq-section"><div className="section-heading"><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Decisiones antes de salir.</h2></div><div className="faq-list">
      <details><summary>¿Debo reservar todas las experiencias?</summary><p>No necesariamente. Cada ficha indicará si la reservación es obligatoria, recomendada o no requerida.</p></details>
      <details><summary>¿La ausencia de un aviso significa que el lugar está abierto?</summary><p>No. Revisa la fecha de actualización y confirma por el canal autorizado cuando el traslado dependa de esa información.</p></details>
      <details><summary>¿Todas las experiencias son accesibles?</summary><p>No. Publicaremos condiciones concretas sin usar “accesible” como una etiqueta genérica.</p></details>
      <details><summary>¿Cómo reporto información incorrecta?</summary><p>Cada perfil incluye un enlace de reporte. También puedes contactar a Experiencias ConSentido por sus redes oficiales.</p></details>
    </div><div className="center-action"><Link className="button button-primary" href="/cholula/explora">Explorar experiencias</Link></div></section>
  </main>;
}

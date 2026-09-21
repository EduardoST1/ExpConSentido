import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Planea tu visita", description: "Información práctica para preparar una visita responsable a Cholula." };
const topics = [
  ["Cuándo visitar", "Consulta temporadas, festividades y disponibilidad. Evita asumir que todos los talleres o espacios operan diariamente."],
  ["Cómo moverte", "Combina recorridos a pie con transporte local y deja margen entre zonas. Algunas calles cambian de dinámica durante celebraciones."],
  ["Visita responsable", "Pregunta antes de fotografiar personas, respeta espacios religiosos y no ingreses a espacios comunitarios sin invitación."],
  ["Accesibilidad", "Cada ficha indicará lo que sabemos y lo que falta confirmar: superficies, escalones, sanitarios, ruido y apoyos disponibles."],
  ["Precios claros", "Publicaremos rangos, qué incluye cada experiencia y cuándo puede cambiar el costo. Si no está confirmado, lo diremos."],
  ["Información actualizada", "Revisa la fecha de actualización en cada ficha y reporta cualquier diferencia para que podamos corregirla."],
];
export default function PlanPage() { return <main id="contenido"><PageHero eyebrow="ANTES DE LLEGAR" title="Planea con información, viaja con respeto." description="Una guía práctica que distingue lo confirmado, lo estacional y lo que todavía debe verificarse." back={{ label: "Edición Cholula", href: "/cholula" }} /><section className="section surface"><div className="guidance-grid">{topics.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div><div className="notice wide"><strong>Esta guía está en construcción</strong><p>Antes de publicar datos operativos solicitaremos confirmación a responsables locales y fuentes identificables.</p></div></section></main>; }

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { events } from "@/data/content";

export const metadata: Metadata = { title: "Agenda de Cholula", description: "Eventos, talleres, festividades y temporadas confirmadas en Cholula." };

export default function AgendaPage() { return <main id="contenido"><PageHero eyebrow="FECHAS Y TEMPORADAS" title="Agenda con sentido." description="Aquí publicaremos actividades con fecha, responsable y condiciones confirmadas. Menos ruido; información útil para planear." back={{ label: "Edición Cholula", href: "/cholula" }} /><section className="section surface"><div className="editorial-grid">{events.map((event) => <article className="event-card" key={event.slug}><span>{event.displayDate}</span><h2>{event.title}</h2><p>{event.summary}</p><small>{event.place}</small><Link href={`/cholula/agenda/${event.slug}`}>Ver información →</Link></article>)}</div></section></main>; }

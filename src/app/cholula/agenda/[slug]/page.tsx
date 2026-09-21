import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { events, getEvent } from "@/data/content";

export function generateStaticParams() { return events.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const event = getEvent((await params).slug); return event ? { title: event.title, description: event.summary } : {}; }
export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) { const event = getEvent((await params).slug); if (!event) notFound(); return <main id="contenido"><JsonLd data={{ "@context": "https://schema.org", "@type": "Event", name: event.title, startDate: event.date, eventStatus: "https://schema.org/EventScheduled", location: { "@type": "Place", name: event.place } }} /><article className="article-page"><Link className="back-link" href="/cholula/agenda">← Volver a la agenda</Link><p className="eyebrow">AGENDA · {event.displayDate}</p><h1>{event.title}</h1><p className="page-lead">{event.summary}</p><div className="notice"><strong>Publicación de muestra</strong><p>No representa todavía un evento abierto. La agenda publicará únicamente fechas confirmadas por sus responsables.</p></div><section><h2>Información</h2><dl className="info-list"><div><dt>Lugar</dt><dd>{event.place}</dd></div><div><dt>Fecha</dt><dd>{event.displayDate}</dd></div><div><dt>Acceso</dt><dd>Por confirmar</dd></div></dl></section></article></main>; }

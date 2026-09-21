import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoute, routes } from "@/data/content";

export function generateStaticParams() { return routes.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const route = getRoute((await params).slug); return route ? { title: route.title, description: route.summary } : {}; }
export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) { const route = getRoute((await params).slug); if (!route) notFound(); return <main id="contenido"><article className="article-page"><Link className="back-link" href="/cholula/rutas">← Todas las rutas</Link><p className="eyebrow">RUTA CON SENTIDO · {route.duration}</p><h1>{route.title}</h1><p className="page-lead">{route.summary}</p><div className="notice"><strong>Itinerario editorial demostrativo</strong><p>Los horarios, costos y disponibilidad se incorporarán cuando cada parada sea confirmada.</p></div><section><h2>Orden sugerido</h2><ol className="timeline">{route.stops.map((stop, index) => <li key={stop}><span>0{index + 1}</span><div><strong>{stop}</strong><p>Deja tiempo para conversar, observar y trasladarte sin prisa.</p></div></li>)}</ol></section><section><h2>Sentidos presentes</h2><ul className="tag-list">{route.senses.map((sense) => <li key={sense}>{sense}</li>)}</ul></section></article></main>; }

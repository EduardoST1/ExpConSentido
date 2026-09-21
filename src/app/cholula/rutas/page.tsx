import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/data/content";

export const metadata: Metadata = { title: "Rutas con sentido", description: "Itinerarios editoriales para recorrer Cholula con calma y contexto." };

export default function RoutesPage() { return <main id="contenido"><PageHero eyebrow="ITINERARIOS EDITORIALES" title="Rutas con sentido." description="Recorridos que conectan experiencias cercanas, respetan los ritmos del territorio y explican por qué cada parada importa." back={{ label: "Edición Cholula", href: "/cholula" }} /><section className="section surface"><div className="editorial-grid">{routes.map((route, index) => <article className="route-card" key={route.slug}><span>0{index + 1} · {route.duration}</span><h2>{route.title}</h2><p>{route.summary}</p><ul>{route.stops.map((stop) => <li key={stop}>{stop}</li>)}</ul><Link href={`/cholula/rutas/${route.slug}`}>Ver ruta →</Link></article>)}</div></section></main>; }

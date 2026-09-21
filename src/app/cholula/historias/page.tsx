import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { stories } from "@/data/content";

export const metadata: Metadata = { title: "Historias del destino", description: "Relatos, contexto y herramientas para comprender Cholula antes y después de visitarla." };

export default function StoriesPage() { return <main id="contenido"><PageHero eyebrow="EDITORIAL" title="Historias del destino." description="Textos para entender los oficios, las personas y las decisiones que dan forma a una experiencia." back={{ label: "Edición Cholula", href: "/cholula" }} /><section className="section surface"><div className="editorial-grid">{stories.map((story) => <article className="story-card" key={story.slug}><span>{story.category} · {story.readingTime}</span><h2>{story.title}</h2><p>{story.excerpt}</p><Link href={`/cholula/historias/${story.slug}`}>Leer historia →</Link></article>)}</div></section></main>; }

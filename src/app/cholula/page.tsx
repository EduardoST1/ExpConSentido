import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageHero } from "@/components/PageHero";
import { experiences } from "@/data/content";

export const metadata: Metadata = { title: "Cholula", description: "Explora Cholula a través de experiencias, rutas, historias e información útil." };

export default function CholulaPage() {
  return <main id="contenido">
    <PageHero eyebrow="EXPERIENCIAS CONSENTIDO CHOLULA" title="Un destino se entiende cuando sabemos cómo mirarlo." description="Explora sus sabores, oficios, barrios y relatos con información que ayuda a decidir y también a cuidar." />
    <section className="section surface"><div className="quick-links"><Link href="/cholula/explora"><small>01</small><strong>Explora experiencias</strong><span>Filtra por categoría, sentido y accesibilidad →</span></Link><Link href="/cholula/rutas"><small>02</small><strong>Rutas con sentido</strong><span>Organiza un día sin correr →</span></Link><Link href="/cholula/planea"><small>03</small><strong>Planea tu visita</strong><span>Información práctica y honesta →</span></Link><Link href="/cholula/transparente"><small>04</small><strong>Destino transparente</strong><span>Conoce los datos agregados →</span></Link></div></section>
    <section className="section"><div className="section-heading split-heading"><div><p className="eyebrow">PARA COMENZAR</p><h2>Cuatro maneras de acercarte al territorio.</h2></div><Link className="text-link" href="/cholula/explora">Ver directorio completo →</Link></div><div className="experience-grid">{experiences.slice(0, 3).map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)}</div></section>
  </main>;
}

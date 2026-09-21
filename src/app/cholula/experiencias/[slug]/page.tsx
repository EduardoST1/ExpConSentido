import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { experiences, getExperience } from "@/data/content";

export function generateStaticParams() { return experiences.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const experience = getExperience((await params).slug); return experience ? { title: experience.title, description: experience.summary } : {}; }

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const experience = getExperience((await params).slug); if (!experience) notFound();
  return <main id="contenido">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristAttraction", name: experience.title, description: experience.summary, address: { "@type": "PostalAddress", addressLocality: "Cholula", addressRegion: "Puebla", addressCountry: "MX" } }} />
    <article className="detail-page">
      <Link className="back-link" href="/cholula/explora">← Volver a explorar</Link>
      <header className="detail-hero"><div><p className="eyebrow">{experience.category} · {experience.zone}</p><h1>{experience.title}</h1><p className="page-lead">{experience.summary}</p><ul className="tag-list">{experience.senses.map((sense) => <li key={sense}>{sense}</li>)}</ul></div><div className="detail-facts"><span><small>Duración</small>{experience.duration}</span><span><small>Precio</small>{experience.price}</span><span><small>Temporada</small>{experience.season}</span><span><small>Ideal para</small>{experience.audience}</span></div></header>
      <div className="notice"><strong>Ficha editorial de demostración</strong><p>Esta experiencia aún no está publicada como oferta confirmada ni cuenta con reconocimiento. Su contenido muestra la estructura que tendrán las fichas verificadas.</p></div>
      <div className="detail-grid"><div><section><p className="eyebrow">LA EXPERIENCIA</p><h2>Qué encontrarás</h2><p>{experience.description}</p></section><section><p className="eyebrow">LO QUE LA DISTINGUE</p><ul className="feature-list">{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section></div><aside className="trust-card"><p className="eyebrow">CONFIANZA Y ACTUALIZACIÓN</p><h2>Información en revisión</h2><dl><div><dt>Última actualización</dt><dd>{experience.updatedAt}</dd></div><div><dt>Confirmada por</dt><dd>{experience.confirmedBy}</dd></div><div><dt>Reconocimiento</dt><dd>No emitido</dd></div><div><dt>Accesibilidad</dt><dd>{experience.accessible ? "Información inicial disponible" : "Pendiente de documentar"}</dd></div></dl><a href="https://www.instagram.com/experiencia_consentido/" target="_blank" rel="noreferrer">Reportar un cambio →</a></aside></div>
      <section className="detail-section"><p className="eyebrow">PRÁCTICAS DOCUMENTADAS</p><div className="criteria-grid">{experience.practices.map((practice, index) => <div key={practice}><span>0{index + 1}</span><strong>{practice}</strong></div>)}</div></section>
    </article>
  </main>;
}

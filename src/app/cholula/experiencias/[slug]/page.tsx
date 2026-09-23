import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { experiences, getExperience } from "@/data/content";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() { return experiences.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const experience = getExperience((await params).slug);
  return experience ? { title: experience.title, description: experience.summary, alternates: { canonical: `/cholula/experiencias/${experience.slug}` } } : {};
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const experience = getExperience((await params).slug); if (!experience) notFound();
  const verificationUrl = experience.verificationCode ? `${siteUrl}/verifica/${experience.verificationCode}` : "";
  return <main id="contenido">
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "TouristAttraction", name: experience.title,
      description: experience.summary, isAccessibleForFree: experience.free,
      address: { "@type": "PostalAddress", addressLocality: "Cholula", addressRegion: "Puebla", addressCountry: "MX" },
      availableLanguage: experience.languages,
    }} />
    <article className="detail-page">
      <Link className="back-link" href="/cholula/explora">← Volver a explorar</Link>
      <header className="detail-hero">
        <div><p className="eyebrow">{experience.category} · {experience.zone}</p><h1>{experience.title}</h1><p className="page-lead">{experience.summary}</p><ul className="tag-list">{experience.senses.map((sense) => <li key={sense}>{sense}</li>)}</ul></div>
        <div className="detail-facts"><span><small>Duración</small>{experience.duration}</span><span><small>Precio</small>{experience.price}</span><span><small>Temporada</small>{experience.season}</span><span><small>Ideal para</small>{experience.audience}</span></div>
      </header>

      {!experience.verified && <div className="notice"><strong>Ficha editorial de demostración</strong><p>La información operativa aún debe ser confirmada por la persona responsable. Esta publicación no representa una oferta disponible ni un reconocimiento emitido.</p></div>}

      <div className="detail-grid">
        <div>
          <section><p className="eyebrow">LA EXPERIENCIA</p><h2>Qué encontrarás</h2><p>{experience.description}</p><p><strong>Responsable:</strong> {experience.responsible}</p></section>
          <section><p className="eyebrow">LO QUE LA DISTINGUE</p><ul className="feature-list">{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
        <aside className="trust-card"><p className="eyebrow">CONFIANZA Y ACTUALIZACIÓN</p><h2>{experience.verified ? "Información verificada" : "Información en revisión"}</h2><dl><div><dt>Última actualización</dt><dd>{experience.updatedAt}</dd></div><div><dt>Confirmada por</dt><dd>{experience.confirmedBy}</dd></div><div><dt>Verificada por ConSentido</dt><dd>{experience.verified ? "Sí" : "No todavía"}</dd></div><div><dt>Reconocimiento</dt><dd>{experience.recognition === "en-revision" ? "No emitido" : experience.recognition}</dd></div><div><dt>Vigencia</dt><dd>{experience.validUntil ?? "No aplica"}</dd></div><div><dt>Accesibilidad</dt><dd>{experience.accessible ? "Información inicial disponible" : "Pendiente de documentar"}</dd></div></dl><Link href={`/reporta?experiencia=${experience.slug}`}>Reportar información incorrecta →</Link></aside>
      </div>

      <section className="detail-section">
        <div className="section-heading"><p className="eyebrow">INFORMACIÓN PARA DECIDIR</p><h2>Antes de reservar o trasladarte.</h2></div>
        <div className="operations-grid">
          <Info title="Horarios" text={experience.schedule} />
          <Info title="Reservación" text={experience.reservation} />
          <Info title="Niñas y niños" text={experience.children} />
          <Info title="Mascotas" text={experience.pets} />
          <Info title="Idiomas" text={experience.languages.join(", ")} />
          <Info title="Formas de pago" text={experience.paymentMethods.join(", ")} />
        </div>
      </section>

      <section className="detail-section inclusions">
        <div><p className="eyebrow">INCLUYE</p><ul className="feature-list">{experience.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><p className="eyebrow">NO INCLUYE</p><ul className="feature-list">{experience.notIncludes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><p className="eyebrow">RECOMENDACIONES</p><ul className="feature-list">{experience.recommendations.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="detail-section location-section">
        <div><p className="eyebrow">UBICACIÓN</p><h2>{experience.zone}</h2><p>{experience.locationLabel}</p><a className="text-link" href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(experience.mapQuery)}`} target="_blank" rel="noreferrer">Abrir mapa general →</a></div>
        <iframe title={`Mapa general de ${experience.zone}`} loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-98.335%2C19.035%2C-98.265%2C19.085&layer=mapnik" />
      </section>

      <section className="detail-section"><p className="eyebrow">PRÁCTICAS DOCUMENTADAS</p><div className="criteria-grid">{experience.practices.map((practice, index) => <div key={practice}><span>0{index + 1}</span><strong>{practice}</strong></div>)}</div></section>

      <section className="verification-card">
        <div><p className="eyebrow">SELLO EXPERIENCIA CONSENTIDO</p><h2>{experience.verificationCode ? "Reconocimiento verificable" : "Aún sin reconocimiento emitido"}</h2><p>{experience.verificationCode ? `Evaluado el ${experience.evaluationDate}. Vigente hasta ${experience.validUntil}.` : "Cuando una experiencia obtenga el sello, aquí aparecerán su nivel, vigencia, criterios destacados y QR de verificación."}</p></div>
        {experience.verificationCode ? <div className="qr-box"><img src={`https://quickchart.io/qr?text=${encodeURIComponent(verificationUrl)}&size=180`} alt={`QR para verificar ${experience.title}`} width="180" height="180" /><code>{experience.verificationCode}</code></div> : <div className="qr-placeholder" aria-hidden="true">QR</div>}
      </section>

      <section className="contact-band"><div><p className="eyebrow">CONTACTO Y RESERVACIÓN</p><h2>Confirma siempre antes de asistir.</h2><p>Los canales directos se mostrarán cuando la persona responsable autorice su publicación.</p></div><a className="button button-light" href={experience.contact.instagram} target="_blank" rel="noreferrer">Consultar en Instagram</a></section>
    </article>
  </main>;
}

function Info({ title, text }: { title: string; text: string }) {
  return <article><small>{title}</small><strong>{text}</strong></article>;
}

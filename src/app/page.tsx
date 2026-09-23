import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { events, experiences, routes, stories } from "@/data/content";

const senses = [
  ["01", "Gusto", "Saborea el origen"],
  ["02", "Olfato", "Reconoce el territorio"],
  ["03", "Vista", "Observa con intención"],
  ["04", "Tacto", "Conecta con el oficio"],
  ["05", "Oído", "Escucha sus historias"],
];

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">EDICIÓN TERRITORIAL · CHOLULA, PUEBLA</p>
          <h1>Descubre las experiencias que le dan <em>sentido a Cholula.</em></h1>
          <p className="hero-lead">Una plataforma independiente para explorar el territorio con información clara, historias con autoría y experiencias que cuidan lo que hace único al destino.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/cholula/explora">Explorar experiencias</Link>
            <Link className="button button-ghost" href="/reconocimiento">Conocer el reconocimiento</Link>
          </div>
          <ul className="trust-list"><li>Información verificable</li><li>Mirada local</li><li>Sin estrellas ni popularidad</li></ul>
        </div>
        <div className="hero-art" role="img" aria-label="Composición inspirada en el paisaje, los barrios y el papalote del logotipo">
          <div className="sun" /><div className="mountain mountain-back" /><div className="mountain mountain-front" />
          <div className="kite" aria-hidden="true"><i /><b /><em /><small /></div>
          <div className="hero-caption"><span>GASTRONOMÍA · CULTURA · COMUNIDAD</span><strong>Cholula se vive conSentido</strong></div>
          <div className="round-stamp"><small>EDICIÓN</small><strong>CHO<br />LULA</strong></div>
        </div>
      </section>

      <section className="intro-band">
        <p className="eyebrow">MÁS QUE UN DIRECTORIO</p>
        <div><h2>Elegir mejor también transforma la manera de viajar.</h2><p>Documentamos qué ofrece cada experiencia, quién la hace posible y cómo relacionarse con ella. No vendemos posiciones: construimos contexto y confianza.</p></div>
      </section>

      <section className="section surface" aria-labelledby="featured-title">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">EXPLORA CHOLULA</p><h2 id="featured-title">Experiencias para mirar más cerca.</h2></div>
          <div><p>Estas fichas son demostrativas hasta que la información sea confirmada por sus responsables.</p><Link className="text-link" href="/cholula/explora">Ver todas las experiencias →</Link></div>
        </div>
        <div className="experience-grid">{experiences.slice(0, 3).map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)}</div>
      </section>

      <section className="senses" aria-labelledby="senses-title">
        <div className="section-heading senses-heading"><p className="eyebrow">UNA FORMA DE EXPLORAR</p><h2 id="senses-title">Los sentidos no son decoración. Son una manera de prestar atención.</h2></div>
        <div className="senses-grid">{senses.map(([number, name, phrase], index) => <article className={`sense sense-${index + 1}`} key={name}><span className="sense-dot" /><small>{number}</small><h3>{name}</h3><p>{phrase}</p></article>)}</div>
      </section>

      <section className="section routes-preview">
        <div className="section-heading split-heading"><div><p className="eyebrow">RUTAS CON SENTIDO</p><h2>Itinerarios que dejan espacio para comprender.</h2></div><p>Propuestas editoriales para recorrer sin convertir al territorio en una lista de lugares por tachar.</p></div>
        <div className="editorial-grid">{routes.map((route, index) => <article className="route-card" key={route.slug}><span>0{index + 1} · {route.duration}</span><h3>{route.title}</h3><p>{route.summary}</p><Link href={`/cholula/rutas/${route.slug}`}>Abrir itinerario →</Link></article>)}</div>
      </section>

      <section className="recognition-feature">
        <div className="seal-mark" aria-hidden="true"><span>EC</span><small>RECONOCIMIENTO<br />INDEPENDIENTE</small></div>
        <div><p className="eyebrow">SELLO EXPERIENCIA CONSENTIDO</p><h2>Reconocer con criterios, no con popularidad.</h2><p>Una evaluación independiente de identidad, hospitalidad, claridad, accesibilidad, sostenibilidad e impacto. No es una certificación gubernamental y pagar nunca garantiza obtenerla.</p><div className="hero-actions"><Link className="button button-light" href="/reconocimiento">Cómo funciona</Link><Link className="text-link light" href="/postula">Postular una experiencia →</Link></div></div>
      </section>

      <section className="section agenda-preview">
        <div className="section-heading split-heading"><div><p className="eyebrow">PRÓXIMAMENTE EN CHOLULA</p><h2>Fechas que vale la pena planear.</h2></div><div><p>La agenda solo publicará eventos, talleres y temporadas confirmados por sus responsables.</p><Link className="text-link" href="/cholula/agenda">Abrir agenda →</Link></div></div>
        <div className="editorial-grid">{events.map((event) => <article className="event-card" key={event.slug}><span>{event.displayDate}</span><h3>{event.title}</h3><p>{event.summary}</p><small>{event.place}</small><Link href={`/cholula/agenda/${event.slug}`}>Ver información →</Link></article>)}</div>
      </section>

      <section className="section stories-preview">
        <div className="section-heading split-heading"><div><p className="eyebrow">HISTORIAS DEL DESTINO</p><h2>El contexto también forma parte del viaje.</h2></div><Link className="text-link" href="/cholula/historias">Leer todas las historias →</Link></div>
        <div className="editorial-grid">{stories.map((story) => <article className="story-card" key={story.slug}><span>{story.category} · {story.readingTime}</span><h3>{story.title}</h3><p>{story.excerpt}</p><Link href={`/cholula/historias/${story.slug}`}>Leer historia →</Link></article>)}</div>
      </section>

      <section className="manifesto"><p className="eyebrow">NUESTRA ESENCIA</p><blockquote>“Consentir al turista con un sentido de concientización.”</blockquote><p>Consentir es cuidar cada detalle. Concientizar es descubrir el origen, escuchar a la comunidad y viajar de una forma que deje algo bueno detrás.</p></section>
      <section className="final-cta"><div><p className="eyebrow">UNA PLATAFORMA VIVA</p><h2>¿Tu experiencia aporta algo valioso a Cholula?</h2></div><Link className="button button-light" href="/postula">Conoce cómo postularla</Link></section>
    </main>
  );
}

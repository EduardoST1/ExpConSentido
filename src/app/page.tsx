import Image from "next/image";

const contactUrl = "https://www.instagram.com/experiencia_consentido/";

const senses = [
  { number: "01", name: "Gusto", phrase: "Saborea el origen", className: "taste" },
  { number: "02", name: "Olfato", phrase: "Reconoce el territorio", className: "smell" },
  { number: "03", name: "Vista", phrase: "Observa con intención", className: "sight" },
  { number: "04", name: "Tacto", phrase: "Conecta con el oficio", className: "touch" },
  { number: "05", name: "Oído", phrase: "Escucha sus historias", className: "sound" },
];

const experiences = [
  {
    label: "Gastronomía y comunidad",
    title: "Sabores y saberes comunitarios",
    description:
      "Una experiencia para conocer ingredientes, técnicas, cocineras y relatos que mantienen viva la identidad de Puebla.",
    accent: "orange",
  },
  {
    label: "Tradición viva",
    title: "El Trueque de San Pedro Cholula",
    description:
      "Acércate a una de las expresiones comunitarias más significativas de Cholula desde el respeto y la interpretación local.",
    accent: "magenta",
  },
  {
    label: "Experiencia personalizada",
    title: "Puebla a tu propio ritmo",
    description:
      "Diseñamos una experiencia para grupos, empresas y viajeros que buscan una conexión auténtica con el territorio.",
    accent: "cyan",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Experiencias conSentido, inicio">
          <Image
            src="/logo-experiencias-consentido.png"
            alt="Experiencias conSentido"
            width={500}
            height={500}
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#experiencias">Experiencias</a>
          <a href="#sentidos">Los sentidos</a>
          <a href="#comunidades">Comunidades</a>
          <a href="#nosotros">Nosotros</a>
        </nav>
        <a className="button button-primary header-cta" href={contactUrl} target="_blank" rel="noreferrer">
          Consultar experiencia
        </a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menú"><span></span><span></span><span></span></summary>
          <nav aria-label="Navegación móvil">
            <a href="#experiencias">Experiencias</a>
            <a href="#sentidos">Los sentidos</a>
            <a href="#comunidades">Comunidades</a>
            <a href="#nosotros">Nosotros</a>
            <a href={contactUrl} target="_blank" rel="noreferrer">Consultar por Instagram</a>
          </nav>
        </details>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">TOUROPERADORA · CHOLULA, PUEBLA</p>
            <h1>Viaja con los <em>cinco sentidos.</em></h1>
            <p className="hero-lead">
              Consentimos al turista despertando sus sentidos y conectándolo con los sabores,
              las personas y las historias del territorio.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experiencias">Explorar experiencias</a>
              <a className="text-link" href="#nosotros">Conoce nuestra esencia <span>→</span></a>
            </div>
            <ul className="trust-list" aria-label="Características">
              <li>Experiencias locales</li>
              <li>Grupos pequeños</li>
              <li>Anfitriones reales</li>
            </ul>
          </div>

          <div className="hero-art" aria-label="Ilustración inspirada en el paisaje y los colores de Puebla" role="img">
            <div className="sun"></div>
            <div className="mountain mountain-back"></div>
            <div className="mountain mountain-front"></div>
            <div className="kite" aria-hidden="true"><i></i><b></b><em></em><small></small></div>
            <div className="hero-caption">
              <span>GASTRONOMÍA · CULTURA · COMUNIDAD</span>
              <strong>Puebla se vive conSentido</strong>
            </div>
            <div className="round-stamp"><small>VIVE</small><strong>CON<br />SENTIDO</strong></div>
          </div>
        </section>

        <section className="senses" id="sentidos" aria-labelledby="senses-title">
          <div className="section-heading senses-heading">
            <p className="eyebrow">NUESTRA MANERA DE VIAJAR</p>
            <h2 id="senses-title">Cada experiencia comienza cuando prestas atención.</h2>
          </div>
          <div className="senses-grid">
            {senses.map((sense) => (
              <article className={`sense ${sense.className}`} key={sense.name}>
                <span className="sense-dot"></span>
                <small>{sense.number}</small>
                <h3>{sense.name}</h3>
                <p>{sense.phrase}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experiences" id="experiencias" aria-labelledby="experiences-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">EXPERIENCIAS DESTACADAS</p>
              <h2 id="experiences-title">No visites Puebla. <em>Vívela.</em></h2>
            </div>
            <p>
              Recorridos gastronómicos y culturales diseñados para conectar con el territorio,
              no solamente pasar por él.
            </p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article className={`experience-card ${experience.accent}`} key={experience.title}>
                <div className="card-visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="card-shape"></div>
                </div>
                <div className="card-body">
                  <p className="card-label">{experience.label}</p>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <a href={contactUrl} target="_blank" rel="noreferrer">Solicitar información <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="community" id="comunidades">
          <div className="community-art" aria-hidden="true">
            <div className="community-circle one"></div>
            <div className="community-circle two"></div>
            <div className="community-circle three"></div>
            <p>El territorio<br />no es un escenario.<br /><strong>Es el anfitrión.</strong></p>
          </div>
          <div className="community-copy">
            <p className="eyebrow">COMUNIDADES Y TERRITORIO</p>
            <h2>Conocer también es reconocer.</h2>
            <p>
              Cada recorrido da nombre a quienes cultivan, cocinan, crean y conservan. Queremos
              que disfrutes la experiencia y que comprendas el valor humano detrás de cada producto.
            </p>
            <a className="text-link" href="https://www.instagram.com/experiencia_consentido/" target="_blank" rel="noreferrer">
              Ver experiencias reales en Instagram <span>→</span>
            </a>
          </div>
        </section>

        <section className="manifesto" id="nosotros">
          <p className="eyebrow">NUESTRA ESENCIA</p>
          <blockquote>
            “Consentir al turista con un sentido de concientización.”
          </blockquote>
          <p>
            Consentir es cuidar cada detalle. Concientizar es descubrir el origen, escuchar a la
            comunidad y viajar de una forma que deje algo bueno detrás.
          </p>
        </section>

        <section className="final-cta">
          <div>
            <p className="eyebrow">TU PRÓXIMA EXPERIENCIA</p>
            <h2>¿Qué sentido quieres despertar primero?</h2>
          </div>
          <a className="button button-light" href={contactUrl} target="_blank" rel="noreferrer">
            Escribir por Instagram
          </a>
        </section>
      </main>

      <footer>
        <Image src="/logo-experiencias-consentido.png" alt="Experiencias conSentido" width={500} height={500} />
        <p>Experiencias gastronómicas y culturales en Puebla.</p>
        <div><a href="https://www.instagram.com/experiencia_consentido/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/profile.php?id=61579055224698" target="_blank" rel="noreferrer">Facebook</a></div>
        <small>© 2026 Experiencias conSentido</small>
      </footer>
    </>
  );
}

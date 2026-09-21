import Image from "next/image";
import Link from "next/link";

const navigation = [
  ["Explora", "/cholula/explora"],
  ["Rutas", "/cholula/rutas"],
  ["Historias", "/cholula/historias"],
  ["Planea", "/cholula/planea"],
  ["Reconocimiento", "/reconocimiento"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Experiencias ConSentido, inicio">
        <Image src="/logo-experiencias-consentido.png" alt="" width={500} height={500} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="button button-primary header-cta" href="/postula">Postula una experiencia</Link>
      <details className="mobile-nav">
        <summary aria-label="Abrir menú"><span /><span /><span /></summary>
        <nav aria-label="Navegación móvil">
          {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/postula">Postula una experiencia</Link>
        </nav>
      </details>
    </header>
  );
}

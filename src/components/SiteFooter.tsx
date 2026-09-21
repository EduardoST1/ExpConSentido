import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image src="/logo-experiencias-consentido.png" alt="Experiencias ConSentido" width={500} height={500} />
        <p>Consentir al turista con un sentido de concientización.</p>
      </div>
      <div>
        <strong>Descubre</strong>
        <Link href="/cholula/explora">Explora Cholula</Link>
        <Link href="/cholula/rutas">Rutas con sentido</Link>
        <Link href="/cholula/agenda">Agenda</Link>
      </div>
      <div>
        <strong>Confianza</strong>
        <Link href="/reconocimiento">El reconocimiento</Link>
        <Link href="/reconocimiento/criterios">Criterios</Link>
        <Link href="/cholula/transparente">Cholula transparente</Link>
      </div>
      <div>
        <strong>Conecta</strong>
        <a href="https://www.instagram.com/experiencia_consentido/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61579055224698" target="_blank" rel="noreferrer">Facebook</a>
        <Link href="/postula">Postula tu experiencia</Link>
      </div>
      <small>© 2026 Experiencias ConSentido · Iniciativa independiente y no gubernamental.</small>
    </footer>
  );
}

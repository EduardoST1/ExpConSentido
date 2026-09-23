import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/content";

export const metadata: Metadata = { title: "Verifica un reconocimiento", robots: { index: false, follow: false } };

export default async function VerifyPage({ params }: { params: Promise<{ codigo: string }> }) {
  const { codigo } = await params;
  const experience = experiences.find((item) => item.verificationCode?.toLowerCase() === codigo.toLowerCase());
  if (!experience) return <main id="contenido"><section className="verification-page"><div className="verification-mark">?</div><p className="eyebrow">VERIFICACIÓN PÚBLICA</p><h1>Código no reconocido.</h1><p>No existe un reconocimiento público vigente asociado con <strong>{codigo}</strong>. La plataforma todavía no ha emitido sellos.</p><div className="notice"><strong>Evita usos engañosos</strong><p>Un logotipo o una imagen no prueban la vigencia. Esta URL es la fuente pública para consultar nivel, fecha y alcance.</p></div><Link className="button button-primary" href="/reconocimiento">Conocer el reconocimiento</Link></section></main>;

  return <main id="contenido"><section className="verification-page valid"><div className="verification-mark">✓</div><p className="eyebrow">RECONOCIMIENTO VERIFICADO</p><h1>{experience.title}</h1><p>El código <strong>{codigo}</strong> corresponde a esta experiencia.</p><dl className="verification-details"><div><dt>Nivel</dt><dd>{experience.recognition}</dd></div><div><dt>Evaluación</dt><dd>{experience.evaluationDate}</dd></div><div><dt>Vigencia</dt><dd>{experience.validUntil}</dd></div><div><dt>Última actualización</dt><dd>{experience.updatedAt}</dd></div></dl><Link className="button button-primary" href={`/cholula/experiencias/${experience.slug}`}>Ver ficha completa</Link></section></main>;
}

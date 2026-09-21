import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Verifica un reconocimiento", robots: { index: false, follow: false } };
export default async function VerifyPage({ params }: { params: Promise<{ codigo: string }> }) { const { codigo } = await params; return <main id="contenido"><section className="verification-page"><div className="verification-mark">?</div><p className="eyebrow">VERIFICACIÓN PÚBLICA</p><h1>Código no reconocido.</h1><p>No existe un reconocimiento público vigente asociado con <strong>{codigo}</strong>. La plataforma todavía no ha emitido sellos.</p><div className="notice"><strong>Evita usos engañosos</strong><p>Un logotipo o una imagen no prueban la vigencia. Esta URL será la fuente pública para consultar nivel, fecha y alcance.</p></div><Link className="button button-primary" href="/reconocimiento">Conocer el reconocimiento</Link></section></main>; }

import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReportForm } from "@/components/ReportForm";

export const metadata: Metadata = { title: "Reportar información", robots: { index: false, follow: false } };
export default async function ReportPage({ searchParams }: { searchParams: Promise<{ experiencia?: string }> }) { const experience = (await searchParams).experiencia ?? "no-especificada"; return <main id="contenido"><PageHero eyebrow="ACTUALIZACIÓN Y CONFIANZA" title="Ayúdanos a corregir información." description="Revisaremos el reporte antes de modificar una ficha. No publiques aquí datos sensibles ni acusaciones sin evidencia." /><section className="section application-section"><ReportForm experience={experience} /></section></main>; }

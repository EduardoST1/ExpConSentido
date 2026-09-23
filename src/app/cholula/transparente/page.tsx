import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { destination, experiences } from "@/data/content";

export const metadata: Metadata = { title: "Cholula transparente", description: "Indicadores agregados y metodología de actualización de Experiencias ConSentido Cholula." };

function countBy(values: string[]) {
  return [...new Set(values)].map((value) => ({ label: value, count: values.filter((item) => item === value).length }));
}

export default function TransparencyPage() {
  const accessible = experiences.filter((item) => item.accessible).length;
  const free = experiences.filter((item) => item.free).length;
  const sustainable = experiences.filter((item) => item.practices.some((value) => /local|ciclo|movilidad/i.test(value))).length;
  const categories = countBy(experiences.map((item) => item.category));
  const zones = countBy(experiences.map((item) => item.zone));
  const prices = countBy(experiences.map((item) => item.priceBand));
  return <main id="contenido">
    <PageHero eyebrow="INFORMACIÓN AGREGADA" title="Cholula transparente." description="Datos para comprender la oferta publicada sin exponer información privada, comercial o sensible de sus participantes." back={{ label: "Edición Cholula", href: "/cholula" }} />
    <section className="section surface">
      <div className="notice wide"><strong>Datos iniciales de demostración</strong><p>Los indicadores describen únicamente las fichas de muestra del prototipo. No representan todavía el universo turístico de Cholula.</p></div>
      <div className="metrics-grid"><article><strong>{experiences.length}</strong><span>fichas registradas</span></article><article><strong>0</strong><span>reconocimientos emitidos</span></article><article><strong>{accessible}</strong><span>con accesibilidad inicial</span></article><article><strong>{free}</strong><span>de acceso libre</span></article><article><strong>{sustainable}</strong><span>con prácticas relacionadas</span></article><article><strong>0</strong><span>evaluaciones concluidas</span></article></div>

      <div className="transparency-panels">
        <Breakdown title="Por categoría" data={categories} total={experiences.length} />
        <Breakdown title="Por zona" data={zones} total={experiences.length} />
        <Breakdown title="Por rango de precio" data={prices} total={experiences.length} />
      </div>

      <div className="detail-grid"><section><p className="eyebrow">QUÉ PUBLICAREMOS</p><h2>Indicadores útiles para el destino.</h2><ul className="feature-list"><li>Distribución por categoría y zona</li><li>Rangos de precio y duración</li><li>Accesibilidad documentada</li><li>Prácticas sostenibles</li><li>Participación de productores locales</li><li>Estacionalidad e impacto comunitario</li><li>Resultados agregados de evaluación</li></ul></section><section><p className="eyebrow">QUÉ PROTEGEREMOS</p><h2>Transparencia sin vulnerabilidad.</h2><ul className="feature-list"><li>Datos personales y comerciales</li><li>Ubicación de espacios sensibles</li><li>Evaluaciones internas individuales</li><li>Historias o fotografías sin permiso</li><li>Información que facilite apropiación o explotación</li></ul></section></div>

      <div className="method-note"><p className="eyebrow">METODOLOGÍA DE DATOS</p><h2>Publicar también implica explicar.</h2><p>Los indicadores se calcularán sobre fichas activas y mostrarán fecha de corte, definiciones y cambios metodológicos. La última actualización estructural de esta edición es: <strong>{destination.updatedAt}</strong>.</p></div>
    </section>
  </main>;
}

function Breakdown({ title, data, total }: { title: string; data: { label: string; count: number }[]; total: number }) {
  return <article><h2>{title}</h2>{data.map((item) => <div className="bar-row" key={item.label}><div><span>{item.label}</span><strong>{item.count}</strong></div><i><b style={{ width: `${(item.count / total) * 100}%` }} /></i></div>)}</article>;
}

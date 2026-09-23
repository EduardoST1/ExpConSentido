import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Reconocimiento Experiencia ConSentido", description: "Metodología, niveles, independencia y proceso del Sello Experiencia ConSentido." };
const levels = [
  ["01", "Experiencia Seleccionada", "Cumple criterios fundamentales y condiciones editoriales para formar parte de la colección."],
  ["02", "Experiencia ConSentido", "Ofrece una experiencia sobresaliente en identidad, hospitalidad, claridad y cuidado."],
  ["03", "Experiencia ConSentido Destacada", "Es referente por innovación, identidad, consistencia e impacto positivo demostrado."],
];
const special = ["Gastronomía con identidad", "Experiencia sensorial", "Patrimonio y cultura", "Impacto comunitario", "Sostenibilidad", "Innovación turística", "Hospitalidad con sentido"];

export default function RecognitionPage() {
  return <main id="contenido">
    <PageHero eyebrow="RECONOCIMIENTO INDEPENDIENTE" title="Un sello que explica por qué una experiencia importa." description="Una metodología privada para reconocer experiencias vinculadas con su territorio. No es una certificación oficial, distintivo municipal ni aval gubernamental." />
    <section className="section surface"><div className="principle-grid"><article><span>01</span><h2>Independiente</h2><p>Lo otorga Experiencias ConSentido. No depende de votos, popularidad ni afiliación gubernamental.</p></article><article><span>02</span><h2>Con criterios</h2><p>La decisión se fundamenta en evidencia, entrevista, información y, cuando aplique, visita.</p></article><article><span>03</span><h2>Sin compra de resultados</h2><p>Postular, promocionarse o cubrir un costo nunca garantiza recibir el reconocimiento.</p></article></div></section>

    <section className="section"><div className="section-heading split-heading"><div><p className="eyebrow">QUIÉN LO OTORGA</p><h2>Responsabilidad identificable.</h2></div><p>Experiencias ConSentido administra la metodología y el dictamen. Antes de emitir reconocimientos se publicarán las personas especialistas participantes, sus funciones y declaraciones de conflicto de interés.</p></div><div className="notice wide"><strong>Comité en conformación</strong><p>No se mostrarán nombres ni alianzas hasta contar con autorización y participación formal. Ninguna organización se presentará como respaldo sin convenio.</p></div></section>

    <section className="section surface"><div className="section-heading"><p className="eyebrow">NIVELES</p><h2>Una lectura clara del avance.</h2></div><div className="level-list">{levels.map(([number, title, text]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><div className="special-recognitions"><p className="eyebrow">MENCIONES ESPECIALES</p>{special.map((item) => <span key={item}>{item}</span>)}</div></section>

    <section className="process-band"><div><p className="eyebrow">PROCESO</p><h2>Postulación, revisión, evaluación, dictamen y seguimiento.</h2></div><ol><li>Revisión de requisitos</li><li>Documentación y entrevista</li><li>Evaluación y evidencia</li><li>Dictamen y vigencia</li></ol><div className="hero-actions"><Link className="button button-light" href="/reconocimiento/criterios">Revisar criterios</Link><Link className="text-link light" href="/postula">Comenzar postulación →</Link></div></section>

    <section className="section"><div className="governance-grid">
      <article><p className="eyebrow">RESULTADO</p><h2>Dictamen documentado</h2><p>El resultado indicará nivel, criterios destacados, observaciones, fecha de evaluación y vigencia. No se publicarán expedientes internos completos.</p></article>
      <article><p className="eyebrow">CONFLICTOS DE INTERÉS</p><h2>Declarar, separar, documentar</h2><p>Quien tenga relación comercial, familiar o personal con una experiencia no participará en su dictamen. La incidencia quedará registrada.</p></article>
      <article><p className="eyebrow">REEVALUACIÓN</p><h2>El sello no es permanente</h2><p>Puede revisarse al vencer, ante cambios sustanciales o por reportes con evidencia. También puede suspenderse o retirarse.</p></article>
      <article><p className="eyebrow">COSTO</p><h2>Transparente antes de aceptar</h2><p>Si aplica, cubrirá documentación y evaluación. Se publicará por separado de promoción o membresía y jamás garantizará aprobación.</p></article>
    </div></section>

    <section className="section surface faq-section"><div className="section-heading"><p className="eyebrow">PREGUNTAS Y CONTROL</p><h2>La confianza también se revisa.</h2></div><div className="faq-list">
      <details><summary>¿Cuánto dura el reconocimiento?</summary><p>La vigencia definitiva se publicará con la primera versión formal de la metodología y aparecerá en cada ficha y verificación QR.</p></details>
      <details><summary>¿Cómo se reporta una irregularidad?</summary><p>Cada ficha incluye un canal para reportar cambios. Los reportes se revisarán con evidencia y sin publicar datos sensibles.</p></details>
      <details><summary>¿Una experiencia puede perder el sello?</summary><p>Sí. La falta de actualización, información engañosa, cambios sustanciales o incumplimientos pueden provocar revisión, suspensión o retiro.</p></details>
      <details><summary>¿Es un concurso de popularidad?</summary><p>No. No utiliza votaciones abiertas ni estrellas para decidir el reconocimiento.</p></details>
    </div></section>
  </main>;
}

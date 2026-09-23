import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/ApplicationForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Postula una experiencia", description: "Requisitos, etapas y formulario para postular una experiencia de Cholula." };

const steps = [
  ["01", "Postulación", "La persona responsable comparte información básica y autoriza su revisión."],
  ["02", "Revisión documental", "Se valida identidad, operación, permisos y claridad de la propuesta."],
  ["03", "Evaluación", "Se recopila evidencia, se entrevista y, cuando corresponda, se realiza una visita."],
  ["04", "Dictamen", "Se comunica el resultado, observaciones, nivel y vigencia aplicable."],
  ["05", "Seguimiento", "La información se actualiza y puede revisarse ante cambios o irregularidades."],
];

export default function ApplyPage() {
  return <main id="contenido">
    <PageHero eyebrow="CONVOCATORIA INICIAL" title="Postula una experiencia con identidad y propósito." description="Buscamos propuestas conectadas con Cholula, claras para el visitante y respetuosas con las personas que las hacen posibles." />
    <section className="section surface"><div className="detail-grid">
      <section><p className="eyebrow">ANTES DE COMENZAR</p><h2>Requisitos iniciales</h2><ul className="feature-list"><li>Operar o desarrollarse en el territorio de Cholula</li><li>Contar con autorización de quienes participan</li><li>Explicar con claridad precio, duración y condiciones</li><li>Respetar identidad, patrimonio y datos personales</li><li>Aceptar revisión de información y criterios</li></ul></section>
      <aside className="trust-card"><p className="eyebrow">IMPORTANTE</p><h2>Postular no garantiza el reconocimiento.</h2><p>Si existe un costo de evaluación, se informará y aceptará antes de continuar. Cualquier pago cubrirá el proceso, nunca el resultado.</p><Link href="/reconocimiento/criterios">Leer criterios →</Link></aside>
    </div></section>

    <section className="section"><div className="section-heading"><p className="eyebrow">ETAPAS</p><h2>Un proceso trazable de principio a fin.</h2></div><div className="application-steps">{steps.map(([number, title, text]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="section surface"><div className="info-panels">
      <article><p className="eyebrow">COSTO</p><h2>Por definir públicamente</h2><p>No se cobrará nada sin informar alcance, entregables y condiciones. La promoción o membresía estará separada del dictamen.</p></article>
      <article><p className="eyebrow">VIGENCIA</p><h2>Se indicará en cada sello</h2><p>La metodología definitiva establecerá duración, seguimiento y causas de suspensión o retiro.</p></article>
      <article><p className="eyebrow">RESULTADO</p><h2>Con observaciones</h2><p>El dictamen explicará fortalezas, oportunidades y nivel alcanzado; no será una simple calificación pública.</p></article>
    </div></section>

    <section className="section faq-section"><div className="section-heading"><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Antes de postular.</h2></div><div className="faq-list">
      <details><summary>¿Es una certificación oficial?</summary><p>No. Es un reconocimiento privado e independiente, sin aval gubernamental.</p></details>
      <details><summary>¿Pagar garantiza obtener el sello?</summary><p>No. Cualquier costo corresponde al proceso de evaluación y nunca compra el resultado.</p></details>
      <details><summary>¿Puedo postular una experiencia que no es mía?</summary><p>Puedes recomendarla, pero necesitaremos autorización de la persona o comunidad responsable antes de evaluar o publicar.</p></details>
      <details><summary>¿Qué ocurre si cambian precios u horarios?</summary><p>La ficha debe actualizarse. Los cambios sustanciales pueden requerir una revisión del reconocimiento.</p></details>
      <details><summary>¿Se publican todas las evaluaciones?</summary><p>No. Solo se publicará información agregada y el resultado autorizado; se protegerán datos privados y comerciales.</p></details>
    </div></section>

    <section className="section application-section"><div className="section-heading"><p className="eyebrow">POSTULACIÓN</p><h2>Cuéntanos sobre la experiencia.</h2><p>El envío se activará al configurar el canal oficial y completar el aviso de privacidad legal.</p></div><ApplicationForm /></section>
  </main>;
}

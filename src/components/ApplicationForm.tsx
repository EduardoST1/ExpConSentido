"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/postulaciones", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "No fue posible enviar la postulación.");
      setStatus({ type: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Ocurrió un error." });
    }
  }

  return <form className="application-form" onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label htmlFor="company">Empresa</label><input id="company" name="company" tabIndex={-1} autoComplete="off" /></div>
    <div><label htmlFor="name">Nombre de quien postula</label><input id="name" name="name" required autoComplete="name" maxLength={120} /></div>
    <div><label htmlFor="email">Correo de contacto</label><input id="email" name="email" required type="email" autoComplete="email" maxLength={160} /></div>
    <div><label htmlFor="phone">Teléfono o WhatsApp</label><input id="phone" name="phone" required type="tel" autoComplete="tel" maxLength={30} /></div>
    <div><label htmlFor="role">Relación con la experiencia</label><select id="role" name="role" required defaultValue=""><option value="" disabled>Selecciona una</option><option>Propietario o responsable</option><option>Integrante del equipo</option><option>Comunidad u organización</option><option>Persona que la recomienda</option></select></div>
    <div className="full"><label htmlFor="experience">Nombre de la experiencia</label><input id="experience" name="experience" required maxLength={160} /></div>
    <div><label htmlFor="category">Categoría</label><select id="category" name="category" required defaultValue=""><option value="" disabled>Selecciona una</option><option>Gastronomía</option><option>Cultura</option><option>Patrimonio</option><option>Naturaleza</option><option>Arte</option><option>Bienestar</option><option>Comunidad</option><option>Otra</option></select></div>
    <div><label htmlFor="zone">Zona o localidad</label><input id="zone" name="zone" required maxLength={120} /></div>
    <div className="full"><label htmlFor="description">¿Qué sucede durante la experiencia y quién participa?</label><textarea id="description" name="description" required minLength={80} maxLength={2500} rows={6} /></div>
    <div className="full"><label htmlFor="impact">¿Cómo aporta al territorio o a la comunidad?</label><textarea id="impact" name="impact" required minLength={40} maxLength={1800} rows={4} /></div>
    <label className="check-row full"><input name="authorization" value="accepted" type="checkbox" required /> Confirmo que tengo autorización para postular y compartir esta información.</label>
    <label className="check-row full"><input name="privacy" value="accepted" type="checkbox" required /> Acepto el tratamiento de datos conforme al <Link href="/privacidad" target="_blank">aviso de privacidad</Link>.</label>
    <div className="full form-action"><button className="button button-primary" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Enviando…" : "Enviar postulación"}</button><small>Postular o pagar una evaluación no garantiza el reconocimiento.</small></div>
    {status.type === "success" && <div className="form-success full" role="status"><strong>Postulación recibida.</strong><p>{status.message}</p></div>}
    {status.type === "error" && <div className="form-error full" role="alert"><strong>No se pudo enviar.</strong><p>{status.message}</p></div>}
  </form>;
}

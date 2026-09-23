"use client";

import { FormEvent, useState } from "react";

export function ReportForm({ experience }: { experience: string }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage("Enviando…"); setError(false);
    const response = await fetch("/api/reportes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries())) });
    const result = await response.json() as { message: string }; setError(!response.ok); setMessage(result.message);
    if (response.ok) event.currentTarget.reset();
  }
  return <form className="application-form report-form" onSubmit={submit}>
    <input type="hidden" name="experience" value={experience} />
    <div><label htmlFor="report-name">Nombre</label><input id="report-name" name="name" required maxLength={120} /></div>
    <div><label htmlFor="report-email">Correo</label><input id="report-email" name="email" required type="email" maxLength={160} /></div>
    <div className="full"><label htmlFor="report-type">¿Qué información debe revisarse?</label><select id="report-type" name="type" required defaultValue=""><option value="" disabled>Selecciona una</option><option>Horario o disponibilidad</option><option>Precio</option><option>Ubicación</option><option>Accesibilidad</option><option>Contacto</option><option>Uso incorrecto del reconocimiento</option><option>Otro</option></select></div>
    <div className="full"><label htmlFor="report-detail">Describe el cambio e indica cómo puede verificarse</label><textarea id="report-detail" name="detail" required minLength={30} maxLength={1800} rows={5} /></div>
    <label className="check-row full"><input name="privacy" value="accepted" type="checkbox" required /> Acepto ser contactado únicamente para revisar este reporte.</label>
    <div className="full form-action"><button className="button button-primary" type="submit">Enviar reporte</button></div>
    {message && <div className={error ? "form-error full" : "form-success full"} role="status"><p>{message}</p></div>}
  </form>;
}

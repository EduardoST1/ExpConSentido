"use client";

import { FormEvent, useState } from "react";

export function ApplicationForm() {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setPrepared(true); }
  return <form className="application-form" onSubmit={submit}>
    <div><label htmlFor="name">Nombre de quien postula</label><input id="name" name="name" required autoComplete="name" /></div>
    <div><label htmlFor="email">Correo de contacto</label><input id="email" name="email" required type="email" autoComplete="email" /></div>
    <div className="full"><label htmlFor="experience">Nombre de la experiencia</label><input id="experience" name="experience" required /></div>
    <div><label htmlFor="category">Categoría</label><select id="category" name="category" required defaultValue=""><option value="" disabled>Selecciona una</option><option>Gastronomía</option><option>Cultura</option><option>Comunidad</option><option>Naturaleza</option><option>Otra</option></select></div>
    <div><label htmlFor="zone">Zona o localidad</label><input id="zone" name="zone" required /></div>
    <div className="full"><label htmlFor="description">¿Qué sucede durante la experiencia y quién participa?</label><textarea id="description" name="description" required rows={5} /></div>
    <label className="check-row full"><input type="checkbox" required /> Confirmo que puedo compartir esta información y acepto ser contactado para revisar la postulación.</label>
    <div className="full form-action"><button className="button button-primary" type="submit">Preparar postulación</button><small>Este prototipo no almacena ni envía datos todavía.</small></div>
    {prepared && <div className="form-success full" role="status"><strong>Tu información está lista para la siguiente etapa.</strong><p>La recepción automatizada se habilitará con la política de privacidad y el canal oficial. Por ahora puedes contactar al equipo por <a href="https://www.instagram.com/experiencia_consentido/" target="_blank" rel="noreferrer">Instagram</a>.</p></div>}
  </form>;
}

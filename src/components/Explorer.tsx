"use client";

import { useMemo, useState } from "react";
import type { Experience } from "@/data/content";
import { ExperienceCard } from "./ExperienceCard";

export function Explorer({ experiences }: { experiences: Experience[] }) {
  const [category, setCategory] = useState("Todas");
  const [sense, setSense] = useState("Todos");
  const [accessibility, setAccessibility] = useState(false);
  const [free, setFree] = useState(false);

  const filtered = useMemo(() => experiences.filter((experience) =>
    (category === "Todas" || experience.category === category) &&
    (sense === "Todos" || experience.senses.includes(sense)) &&
    (!accessibility || experience.accessible) &&
    (!free || experience.free)
  ), [accessibility, category, experiences, free, sense]);

  return (
    <div className="explorer-layout">
      <aside className="filter-panel" aria-label="Filtros de experiencias">
        <div>
          <label htmlFor="category">Categoría</label>
          <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
            {['Todas', 'Gastronomía', 'Cultura', 'Comunidad', 'Naturaleza'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="sense">Sentido</label>
          <select id="sense" value={sense} onChange={(event) => setSense(event.target.value)}>
            {['Todos', 'Gusto', 'Olfato', 'Vista', 'Tacto', 'Oído'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <label className="check-row"><input type="checkbox" checked={accessibility} onChange={(event) => setAccessibility(event.target.checked)} /> Con información de accesibilidad</label>
        <label className="check-row"><input type="checkbox" checked={free} onChange={(event) => setFree(event.target.checked)} /> Gratuitas</label>
        <button className="clear-button" type="button" onClick={() => { setCategory("Todas"); setSense("Todos"); setAccessibility(false); setFree(false); }}>Limpiar filtros</button>
      </aside>
      <div>
        <div className="results-heading"><strong>{filtered.length} experiencias</strong><span>Contenido inicial de demostración</span></div>
        {filtered.length ? <div className="experience-grid compact">{filtered.map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)}</div> : <div className="empty-state"><h2>No encontramos coincidencias</h2><p>Prueba quitando uno o más filtros.</p></div>}
      </div>
    </div>
  );
}

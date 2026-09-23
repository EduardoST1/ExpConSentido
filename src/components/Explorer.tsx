"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Experience } from "@/data/content";
import { ExperienceCard } from "./ExperienceCard";

const unique = (values: string[]) => [...new Set(values)].sort();

export function Explorer({ experiences }: { experiences: Experience[] }) {
  const [category, setCategory] = useState("Todas");
  const [zone, setZone] = useState("Todas");
  const [sense, setSense] = useState("Todos");
  const [price, setPrice] = useState("Todos");
  const [duration, setDuration] = useState("Todas");
  const [traveler, setTraveler] = useState("Todos");
  const [season, setSeason] = useState("Todas");
  const [accessibility, setAccessibility] = useState(false);
  const [free, setFree] = useState(false);
  const [view, setView] = useState<"list" | "map">("list");

  const categories = unique(experiences.map((item) => item.category));
  const zones = unique(experiences.map((item) => item.zone));
  const travelers = unique(experiences.flatMap((item) => item.travelerTypes));
  const seasons = unique(experiences.map((item) => item.season));

  const filtered = useMemo(() => experiences.filter((experience) => {
    const durationMatches = duration === "Todas"
      || (duration === "Hasta 2 horas" && experience.durationMinutes <= 120)
      || (duration === "2 a 4 horas" && experience.durationMinutes > 120 && experience.durationMinutes <= 240)
      || (duration === "Más de 4 horas" && experience.durationMinutes > 240);
    return (category === "Todas" || experience.category === category)
      && (zone === "Todas" || experience.zone === zone)
      && (sense === "Todos" || experience.senses.includes(sense))
      && (price === "Todos" || experience.priceBand === price)
      && durationMatches
      && (traveler === "Todos" || experience.travelerTypes.includes(traveler))
      && (season === "Todas" || experience.season === season)
      && (!accessibility || experience.accessible)
      && (!free || experience.free);
  }), [accessibility, category, duration, free, price, season, sense, traveler, zone, experiences]);

  const clear = () => {
    setCategory("Todas"); setZone("Todas"); setSense("Todos"); setPrice("Todos");
    setDuration("Todas"); setTraveler("Todos"); setSeason("Todas");
    setAccessibility(false); setFree(false);
  };

  return (
    <div className="explorer-layout">
      <aside className="filter-panel" aria-label="Filtros de experiencias">
        <Filter label="Categoría" id="category" value={category} options={["Todas", ...categories]} onChange={setCategory} />
        <Filter label="Zona" id="zone" value={zone} options={["Todas", ...zones]} onChange={setZone} />
        <Filter label="Precio" id="price" value={price} options={["Todos", "Gratis", "Hasta $500", "$501 a $1,000", "Más de $1,000"]} onChange={setPrice} />
        <Filter label="Duración" id="duration" value={duration} options={["Todas", "Hasta 2 horas", "2 a 4 horas", "Más de 4 horas"]} onChange={setDuration} />
        <Filter label="Tipo de viajero" id="traveler" value={traveler} options={["Todos", ...travelers]} onChange={setTraveler} />
        <Filter label="Temporada" id="season" value={season} options={["Todas", ...seasons]} onChange={setSeason} />
        <Filter label="Sentido" id="sense" value={sense} options={["Todos", "Gusto", "Olfato", "Vista", "Tacto", "Oído"]} onChange={setSense} />
        <label className="check-row"><input type="checkbox" checked={accessibility} onChange={(event) => setAccessibility(event.target.checked)} /> Con información de accesibilidad</label>
        <label className="check-row"><input type="checkbox" checked={free} onChange={(event) => setFree(event.target.checked)} /> Gratuitas</label>
        <button className="clear-button" type="button" onClick={clear}>Limpiar filtros</button>
      </aside>
      <div>
        <div className="results-heading">
          <div><strong>{filtered.length} experiencias</strong><span>Contenido inicial de demostración</span></div>
          <div className="view-switch" aria-label="Cambiar vista">
            <button className={view === "list" ? "active" : ""} type="button" onClick={() => setView("list")}>Lista</button>
            <button className={view === "map" ? "active" : ""} type="button" onClick={() => setView("map")}>Mapa</button>
          </div>
        </div>
        {view === "map" ? <MapView experiences={filtered} /> : filtered.length
          ? <div className="experience-grid compact">{filtered.map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)}</div>
          : <EmptyState />}
      </div>
    </div>
  );
}

function Filter({ label, id, value, options, onChange }: { label: string; id: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <div><label htmlFor={id}>{label}</label><select id={id} value={value} onChange={(event) => onChange(event.target.value)}>{options.map((item) => <option key={item}>{item}</option>)}</select></div>;
}

function EmptyState() {
  return <div className="empty-state"><h2>No encontramos coincidencias</h2><p>Prueba quitando uno o más filtros.</p></div>;
}

function MapView({ experiences }: { experiences: Experience[] }) {
  return <div className="map-layout">
    <div className="map-frame">
      <iframe
        title="Mapa general de Cholula"
        loading="lazy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-98.335%2C19.035%2C-98.265%2C19.085&layer=mapnik"
      />
      <p>Mapa general de referencia. Las ubicaciones exactas solo se publicarán con autorización.</p>
    </div>
    <div className="map-results">
      {experiences.length ? experiences.map((experience, index) => <article key={experience.slug}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div><strong>{experience.title}</strong><small>{experience.zone}</small><Link href={`/cholula/experiencias/${experience.slug}`}>Abrir ficha →</Link></div>
      </article>) : <EmptyState />}
    </div>
  </div>;
}

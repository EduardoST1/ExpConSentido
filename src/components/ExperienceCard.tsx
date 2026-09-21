import Link from "next/link";
import type { Experience } from "@/data/content";

const colorClass: Record<Experience["category"], string> = {
  Gastronomía: "orange",
  Cultura: "magenta",
  Comunidad: "cyan",
  Naturaleza: "green",
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className={`experience-card ${colorClass[experience.category]}`}>
      <div className="card-visual" aria-hidden="true">
        <span>{experience.category}</span><i /><b />
      </div>
      <div className="card-body">
        <div className="card-meta"><span>{experience.zone}</span><span>{experience.duration}</span></div>
        <h3><Link href={`/cholula/experiencias/${experience.slug}`}>{experience.title}</Link></h3>
        <p>{experience.summary}</p>
        <ul className="tag-list" aria-label="Sentidos">
          {experience.senses.map((sense) => <li key={sense}>{sense}</li>)}
        </ul>
        <div className="card-footer">
          <span>{experience.price}</span>
          <Link href={`/cholula/experiencias/${experience.slug}`}>Ver experiencia <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  );
}

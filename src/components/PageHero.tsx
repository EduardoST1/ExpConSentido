import Link from "next/link";

export function PageHero({ eyebrow, title, description, back }: { eyebrow: string; title: string; description: string; back?: { label: string; href: string } }) {
  return (
    <section className="page-hero">
      {back && <Link className="back-link" href={back.href}>← {back.label}</Link>}
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lead">{description}</p>
    </section>
  );
}

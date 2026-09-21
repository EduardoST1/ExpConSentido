import type { Metadata } from "next";
import { Explorer } from "@/components/Explorer";
import { PageHero } from "@/components/PageHero";
import { experiences } from "@/data/content";

export const metadata: Metadata = { title: "Explora Cholula", description: "Encuentra experiencias de Cholula por categoría, sentidos, precio y accesibilidad." };

export default function ExplorePage() {
  return <main id="contenido"><PageHero eyebrow="DIRECTORIO EDITORIAL" title="Explora Cholula a tu manera." description="Usa los filtros para encontrar experiencias acordes con tu tiempo, intereses y necesidades. La primera colección contiene fichas demostrativas en proceso de confirmación." back={{ label: "Edición Cholula", href: "/cholula" }} /><section className="section surface"><Explorer experiences={experiences} /></section></main>;
}

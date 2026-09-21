import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Experiencias conSentido | Turismo gastronómico en Puebla",
    template: "%s | Experiencias conSentido",
  },
  description:
    "Experiencias gastronómicas y culturales que despiertan los sentidos y conectan al viajero con Puebla, sus comunidades y sus sabores.",
  openGraph: {
    title: "Experiencias conSentido",
    description:
      "Viaja con los cinco sentidos y conecta con los sabores, las personas y las historias del territorio.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}

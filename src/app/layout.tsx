import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Experiencias ConSentido | Descubre Cholula con otra mirada",
    template: "%s | Experiencias ConSentido",
  },
  description:
    "Explora experiencias, rutas e historias de Cholula con información clara, mirada local y un reconocimiento turístico independiente.",
  openGraph: {
    title: "Experiencias conSentido",
    description:
      "Experiencias, rutas e historias para descubrir Cholula con información clara y mirada local.",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/logo-experiencias-consentido.png", width: 500, height: 500, alt: "Experiencias ConSentido" }],
  },
  twitter: { card: "summary_large_image", title: "Experiencias ConSentido", description: "Descubre las experiencias que le dan sentido a Cholula.", images: ["/logo-experiencias-consentido.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${lora.variable}`}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

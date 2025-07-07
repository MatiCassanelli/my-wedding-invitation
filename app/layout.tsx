import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Tangerine } from "next/font/google";
import "./globals.css";
import { InvitationProvider } from "@/context/invitation-context";

const inter = Inter({ subsets: ["latin"] });

// Load Tangerine font
const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tangerine",
});

export const metadata: Metadata = {
  title: "Invitación para la boda de Mati y Ro",
  description:
    "¡Esta es la invitación para nuestra boda! Leé toda la info y completá el formulario para confirmar tu asistencia.",
  metadataBase: new URL("https://boda-mati-ro.web.app"),
  openGraph: {
    title: "Invitación para la boda de Mati y Ro",
    description:
      "¡Esta es la invitación para nuestra boda! Leé toda la info y completá el formulario para confirmar tu asistencia.",
    url: "https://boda-mati-ro.web.app",
    siteName: "Boda Mati y Ro",
    images: [
      {
        url: "/mati-ro.jpeg",
        width: 1200,
        height: 630,
        alt: "Mati y Ro - Invitación de Boda",
        type: "image/jpeg",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitación para la boda de Mati y Ro",
    description:
      "¡Esta es la invitación para nuestra boda! Leé toda la info y completá el formulario para confirmar tu asistencia.",
    images: ["/mati-ro.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${tangerine.variable}`}>
      <body className={inter.className}>
        <InvitationProvider>{children}</InvitationProvider>
      </body>
    </html>
  );
}

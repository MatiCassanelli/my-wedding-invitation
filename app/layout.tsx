import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Tangerine } from "next/font/google"
import "./globals.css"
import { InvitationProvider } from "@/context/invitation-context"

const inter = Inter({ subsets: ["latin"] })

// Load Tangerine font
const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tangerine",
})

export const metadata: Metadata = {
  title: "Boda Mati & Ro",
  description: "Invitación a nuestra boda",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${tangerine.variable}`}>
      <body className={inter.className}>
        <InvitationProvider>{children}</InvitationProvider>
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'ISSAR Consulting SAS | Sostenibilidad y Gestion de Riesgos',
  description:
    'Consultoria especializada en gestion de riesgos, sostenibilidad ambiental, ingenieria y entrenamiento. Reinventa tu futuro de manera sostenible.',
  keywords: [
    'consultoria ambiental',
    'gestion de riesgos',
    'sostenibilidad',
    'ingenieria',
    'Colombia',
    'ISSAR',
  ],
}

export const viewport: Viewport = {
  themeColor: '#0d806d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

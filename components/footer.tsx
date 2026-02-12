"use client"

import { MapPin, Mail, Phone } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Gestion de Riesgos", href: "#servicios" },
    { label: "Sostenibilidad Ambiental", href: "#servicios" },
    { label: "Ingenieria y Adecuaciones", href: "#servicios" },
    { label: "Entrenamiento", href: "#servicios" },
  ],
  empresa: [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-sans font-bold text-lg text-primary-foreground">
                IS
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-none text-background">
                  ISSAR
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-background/50">
                  Consulting SAS
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Hoy es un dia perfecto para reinventar tu futuro de manera
              sostenible.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-background/50">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="text-xs">
                  Carrera 55a Nro 163 - 35, Bogota
                </span>
              </div>
              <a
                href="mailto:issar.consulting@gmail.com"
                className="flex items-center gap-2 text-background/50 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="text-xs">issar.consulting@gmail.com</span>
              </a>
              <a
                href="tel:+573194994381"
                className="flex items-center gap-2 text-background/50 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span className="text-xs">+57 319 499 4381</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-background/40">
              Servicios
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-background/40">
              Empresa
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-background/40">
              Contacto Rapido
            </h4>
            <p className="mt-4 text-sm text-background/60">
              Escribenos por WhatsApp y recibe asesoria inmediata.
            </p>
            <a
              href="https://wa.me/573194994381"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            {new Date().getFullYear()} ISSAR Consulting SAS. Todos los derechos
            reservados. Bogota, Colombia.
          </p>
        </div>
      </div>
    </footer>
  )
}

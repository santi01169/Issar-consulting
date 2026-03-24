"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img
            src="/images/logo-issar.png"
            alt="ISSAR Consulting SAS"
            className={cn(
              "h-12 w-auto transition-all duration-300",
              isScrolled ? "brightness-100" : "brightness-0 invert"
            )}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground after:bg-primary-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573194994381"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 md:flex"
          >
            <Phone className="h-4 w-4" />
            Contactar
          </a>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden",
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            aria-label={isMobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 md:hidden",
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573194994381"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

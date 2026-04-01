"use client"

import { useState } from "react"
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: MapPin,
    label: "Direccion",
    value: "Carrera 46 # 163B - 29 - interior 104",
    detail: "Bogota, Colombia",
  },
  {
    icon: Mail,
    label: "Email",
    value: "issar.consulting@gmail.com",
    href: "mailto:issar.consulting@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+57 319 499 4381",
    href: "tel:+573194994381",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escribe ahora",
    href: "https://wa.me/573194994381",
  },
]

function ContactInfoCard({
  item,
  index,
}: {
  item: (typeof contactInfo)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <item.icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          {item.label}
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">
          {item.value}
        </p>
        {item.detail && (
          <p className="text-xs text-muted-foreground">{item.detail}</p>
        )}
      </div>
    </>
  )

  const className = cn(
    "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
  )

  const style = { transitionDelay: `${index * 100}ms` }

  if (item.href) {
    return (
      <a
        ref={ref}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
        style={style}
      >
        {content}
      </a>
    )
  }

  return (
    <div ref={ref} className={className} style={style}>
      {content}
    </div>
  )
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={cn(
            "text-center transition-all duration-700",
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-sm font-bold tracking-wider uppercase text-primary">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Hablemos de tu{" "}
            <span className="text-primary">proyecto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Estamos listos para ayudarte a reinventar tu futuro de manera
            sostenible. Contactanos y empecemos juntos.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            {contactInfo.map((item, i) => (
              <ContactInfoCard key={item.label} item={item} index={i} />
            ))}
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Mensaje Enviado
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Organizacion
                  </label>
                  <input
                    id="organization"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Nombre de tu organizacion"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Servicio de Interes
                  </label>
                  <select
                    id="service"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="riesgos">Gestion de Riesgos</option>
                    <option value="sostenibilidad">
                      Sostenibilidad Ambiental
                    </option>
                    <option value="ingenieria">
                      Ingenieria y Adecuaciones
                    </option>
                    <option value="entrenamiento">
                      Entrenamiento en Gestion del Riesgo
                    </option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Cuentanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="h-4 w-4" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

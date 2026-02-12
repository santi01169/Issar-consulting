"use client"

import {
  Shield,
  Leaf,
  Building2,
  GraduationCap,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Shield,
    title: "Gestion de Riesgos",
    description:
      "Consultoria y asesoria en gestion de riesgos y desastres ayudando a organizaciones y municipios a identificar, evaluar y mitigar riesgos en cualquier proyecto de infraestructura.",
    features: [
      "Diagnostico de factores de riesgo ambiental",
      "Analisis de amenazas para proyectos",
      "Riesgos de seguridad y salud en el trabajo",
      "Planes de mitigacion integrales",
    ],
    color: "bg-primary/10 text-primary",
    borderColor: "group-hover:border-primary/30",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad Ambiental",
    description:
      "Estudios geologicos y ambientales con enfoque integral para garantizar la sostenibilidad de tus proyectos y el cumplimiento normativo.",
    features: [
      "Estudios geologicos y ambientales (PAGA, PMA, EIA)",
      "Medicion de Huella de Carbono",
      "Estudios de Sostenibilidad y ODS",
      "Gestion y procedimiento empresas BIC",
    ],
    color: "bg-accent/10 text-accent",
    borderColor: "group-hover:border-accent/30",
  },
  {
    icon: Building2,
    title: "Ingenieria y Adecuaciones",
    description:
      "Servicios de ingenieria para el desarrollo de proyectos innovadores y sostenibles, trabajando en la identificacion, evaluacion y mitigacion de riesgos.",
    features: [
      "Proyectos de infraestructura sostenible",
      "Evaluacion tecnica de proyectos",
      "Mitigacion para municipios y empresas",
      "Soluciones innovadoras de ingenieria",
    ],
    color: "bg-primary/10 text-primary",
    borderColor: "group-hover:border-primary/30",
  },
  {
    icon: GraduationCap,
    title: "Entrenamiento en Gestion del Riesgo",
    description:
      "Entrenamiento en gestion de riesgos y sostenibilidad ambiental a comunidades de trabajo y organizaciones para un futuro mas seguro.",
    features: [
      "Reduccion de riesgos operacionales",
      "Mejora de imagen y reputacion corporativa",
      "Cumplimiento de regulaciones",
      "Competitividad en el mercado",
    ],
    color: "bg-accent/10 text-accent",
    borderColor: "group-hover:border-accent/30",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1",
        service.borderColor,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number */}
      <span className="absolute top-6 right-6 text-7xl font-bold text-foreground/[0.03] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
          service.color
        )}
      >
        <service.icon className="h-7 w-7" />
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-bold text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Link */}
      <div className="mt-8">
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
        >
          Solicitar informacion
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={cn(
            "max-w-2xl transition-all duration-700",
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-sm font-bold tracking-wider uppercase text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Soluciones integrales para un{" "}
            <span className="text-primary">futuro sostenible</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ofrecemos consultoria especializada adaptada a las necesidades de
            cada organizacion, municipio o proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

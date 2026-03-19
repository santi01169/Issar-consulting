"use client"

import { Target, Eye, Award, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Target,
    title: "Mision",
    description:
      "Brindar consultoria integral y sostenible en gestion de riesgos, medio ambiente e ingenieria, ayudando a organizaciones y municipios a construir un futuro mas seguro y resiliente.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Ser la consultora lider en Colombia en soluciones sostenibles para la gestion de riesgos y el desarrollo ambiental responsable.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Cada proyecto se aborda con los mas altos estandares tecnicos y eticos, garantizando resultados que generan valor real y duradero.",
  },
  {
    icon: Users,
    title: "Compromiso Social",
    description:
      "Contribuimos a la sociedad con la integridad y bienestar de las personas y comunidades, preparandolas ante emergencias y desastres.",
  },
]

function ValueCard({ value, index }: { value: (typeof values)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
        <value.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-foreground">
        {value.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {value.description}
      </p>
    </div>
  )
}

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  return (
    <section id="nosotros" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div
            ref={titleRef}
            className={cn(
              "transition-all duration-700",
              titleVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <span className="text-sm font-bold tracking-wider uppercase text-primary">
              Quienes Somos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Una consultora con{" "}
              <span className="text-primary">proposito</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              ISSAR Consulting SAS es una empresa colombiana que ofrece servicios 
              integrados de ingeniería, adecuaciones arquitectónicas y apoyo a la 
              educación ambiental, sostenibilidad y riesgos de organizaciones en 
              beneficio de comunidades y desarrollo territorial.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nuestro equipo multidisciplinario trabaja con entidades como 
              Aeronáutica Civil, INVIAS, ENTerritorio y el sector petrolero, 
              entregando soluciones técnicas de alto impacto que promueven el 
              desarrollo sostenible del país.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Trabaja con Nosotros
              </a>
              <a
                href="#servicios"
                className="rounded-full border-2 border-border px-8 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Right: Values Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <ValueCard key={value.title} value={value} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

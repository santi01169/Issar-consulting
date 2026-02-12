"use client"

import {
  TrendingDown,
  ShieldCheck,
  Scale,
  TrendingUp,
  Heart,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: TrendingDown,
    number: "01",
    title: "Reduccion de Riesgos",
    description:
      "Reducir los riesgos asociados con las operaciones de la empresa y viabilidad de proyectos.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Mejora de Imagen",
    description:
      "Mejora de la imagen y reputacion corporativa. Evita sanciones e incidentes.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Cumplimiento Normativo",
    description:
      "Garantiza el cumplimiento de regulaciones ambientales y de seguridad vigentes.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Competitividad",
    description:
      "Incremento de la competitividad en el mercado a traves de practicas sostenibles.",
  },
  {
    icon: Heart,
    number: "05",
    title: "Impacto Social",
    description:
      "Contribucion a la sociedad con la integridad y bienestar de las personas ante emergencias.",
  },
]

function BenefitRow({ benefit, index }: { benefit: (typeof benefits)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group flex items-start gap-6 border-t border-border py-8 transition-all duration-500 hover:bg-card/50 hover:px-6 rounded-xl",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-6"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-4xl font-bold text-primary/20 transition-colors group-hover:text-primary/40 shrink-0">
        {benefit.number}
      </span>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <benefit.icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground">
          {benefit.title}
        </h3>
        <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {benefit.description}
        </p>
      </div>
    </div>
  )
}

export function BenefitsSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
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
            Por que Elegirnos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Beneficios que{" "}
            <span className="text-primary">transforman</span>
          </h2>
        </div>

        {/* Benefits */}
        <div className="mt-16 space-y-0">
          {benefits.map((benefit, i) => (
            <BenefitRow key={benefit.number} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  Search,
  Building2,
  Users,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Leaf,
  Footprints,
  Award,
  ShieldCheck,
  HeartPulse,
  Factory,
  HardHat,
  ClipboardCheck,
  Wrench,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { useState } from "react"

const pillars = [
  {
    id: "consultoria",
    letter: "C1",
    title: "Consultoría",
    subtitle: "Consultoría y Asesorías Especializadas",
    icon: Search,
    color: "from-primary to-primary/80",
    bgColor: "bg-primary",
    image: "/images/services/consultoria.jpg",
    services: [
      {
        icon: AlertTriangle,
        title: "Gestión de Riesgos",
        description: "Gestión de riesgos de proyectos y amenazas naturales de territorios.",
      },
      {
        icon: Leaf,
        title: "Estudios Ambientales",
        description: "Estudios Ambientales e Informes de Sostenibilidad.",
      },
      {
        icon: Footprints,
        title: "Huella de Carbono",
        description: "Medición y estrategias de reducción de Huella de Carbono.",
      },
      {
        icon: Award,
        title: "Empresas BIC",
        description: "Gestión y certificación de Responsabilidad Corporativa BIC.",
      },
    ],
  },
  {
    id: "construcciones",
    letter: "C2",
    title: "Construcciones",
    subtitle: "Ingeniería y Proyectos de Infraestructura",
    icon: Building2,
    color: "from-accent to-amber-500",
    bgColor: "bg-accent",
    image: "/images/services/construcciones.jpg",
    services: [
      {
        icon: HardHat,
        title: "Proyectos de Construcción",
        description: "Ingeniería y actividades en proyectos de construcción.",
      },
      {
        icon: ClipboardCheck,
        title: "Interventoría",
        description: "Supervisión técnica y control de calidad en obras.",
      },
      {
        icon: Wrench,
        title: "Adecuaciones Arquitectónicas",
        description: "Diseño y ejecución de adecuaciones de infraestructura.",
      },
      {
        icon: Building2,
        title: "Obras Civiles",
        description: "Desarrollo de proyectos de infraestructura sostenible.",
      },
    ],
  },
  {
    id: "coaching",
    letter: "C3",
    title: "Coaching",
    subtitle: "Coaching, Asesoría y Capacitación",
    icon: Users,
    color: "from-teal-600 to-teal-500",
    bgColor: "bg-teal-600",
    image: "/images/services/coaching.jpg",
    services: [
      {
        icon: ShieldCheck,
        title: "Seguridad y Salud en el Trabajo",
        description: "Sistema de gestión y seguridad integral (SG-SST).",
      },
      {
        icon: HeartPulse,
        title: "Prevención de Accidentes",
        description: "Coaching empresarial en prevención de accidentes.",
      },
      {
        icon: Factory,
        title: "Higiene Industrial",
        description: "Higiene Industrial y Ocupacional para empresas.",
      },
      {
        icon: Users,
        title: "Capacitación",
        description: "Educación ambiental y entrenamiento en gestión del riesgo.",
      },
    ],
  },
]

function PillarCard({
  pillar,
  index,
  isActive,
  onClick,
}: {
  pillar: (typeof pillars)[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border-2 p-6 transition-all duration-500",
        isActive
          ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
          : "border-border bg-card hover:border-primary/30 hover:shadow-lg",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Letter badge */}
      <div
        className={cn(
          "absolute -right-2 -top-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-white font-bold text-lg shadow-lg transition-transform duration-300",
          pillar.color,
          isActive ? "scale-110" : "group-hover:scale-105"
        )}
      >
        {pillar.letter}
      </div>

      {/* Icon */}
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300",
          isActive ? `${pillar.bgColor} text-white` : "bg-primary/10 text-primary group-hover:bg-primary/20"
        )}
      >
        <pillar.icon className="h-7 w-7" />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-xl font-bold text-foreground">{pillar.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{pillar.subtitle}</p>

      {/* Arrow indicator */}
      <div
        className={cn(
          "mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-300",
          isActive ? "text-primary gap-2" : "text-muted-foreground group-hover:text-primary group-hover:gap-2"
        )}
      >
        Ver servicios
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  )
}

function ServiceItem({
  service,
  index,
}: {
  service: (typeof pillars)[0]["services"][0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.05)

  return (
    <div
      ref={ref}
      className={cn(
        "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <service.icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="font-bold text-foreground">{service.title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [activePillar, setActivePillar] = useState(0)
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  const currentPillar = pillars[activePillar]

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto transition-all duration-700",
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-sm font-bold tracking-wider uppercase text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Los <span className="text-primary">3 Pilares</span> de ISSAR Consulting
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Servicios integrados de ingeniería, adecuaciones arquitectónicas y apoyo 
            a la educación ambiental, sostenibilidad y riesgos en beneficio de 
            comunidades y desarrollo territorial.
          </p>
        </div>

        {/* 3 Pillars Navigation */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={i}
              isActive={activePillar === i}
              onClick={() => setActivePillar(i)}
            />
          ))}
        </div>

        {/* Active Pillar Services */}
        <div className="mt-12">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Pillar Image */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 aspect-[4/3]">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white font-bold text-lg shadow-lg",
                        currentPillar.color
                      )}
                    >
                      {currentPillar.letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {currentPillar.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {currentPillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2">
                {currentPillar.services.map((service, i) => (
                  <ServiceItem key={service.title} service={service} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Solicitar Cotización
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

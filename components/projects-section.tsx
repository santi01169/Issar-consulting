"use client"

import { useState } from "react"
import { ArrowUpRight, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Evaluacion de Riesgos Hidrogeologicos",
    category: "Gestion de Riesgos",
    location: "Cundinamarca, Colombia",
    description:
      "Diagnostico integral de factores de riesgo hidrogeologico para el plan de ordenamiento territorial de multiples municipios.",
    image: "/images/project-risk.jpg",
    stats: { label: "Municipios", value: "12" },
  },
  {
    title: "Estudio de Huella de Carbono Corporativa",
    category: "Sostenibilidad Ambiental",
    location: "Bogota, Colombia",
    description:
      "Medicion y estrategia de reduccion de huella de carbono para empresas del sector industrial bajo estandares internacionales.",
    image: "/images/project-sustainability.jpg",
    stats: { label: "Reduccion CO2", value: "35%" },
  },
  {
    title: "Infraestructura Sostenible Municipal",
    category: "Ingenieria",
    location: "Boyaca, Colombia",
    description:
      "Desarrollo de proyectos de infraestructura con criterios de sostenibilidad y mitigacion de riesgos naturales.",
    image: "/images/project-engineering.jpg",
    stats: { label: "Obras", value: "8" },
  },
  {
    title: "Programa de Capacitacion en Riesgos",
    category: "Entrenamiento",
    location: "Nacional",
    description:
      "Entrenamiento masivo en gestion de riesgos y emergencias para comunidades y organizaciones en todo el pais.",
    image: "/images/project-training.jpg",
    stats: { label: "Personas", value: "500+" },
  },
]

const categories = [
  "Todos",
  "Gestion de Riesgos",
  "Sostenibilidad Ambiental",
  "Ingenieria",
  "Entrenamiento",
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Stat badge */}
        <div className="absolute bottom-4 right-4">
          <div className="rounded-xl bg-card/90 px-4 py-2 text-center backdrop-blur-sm">
            <div className="text-lg font-bold text-primary">
              {project.stats.value}
            </div>
            <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              {project.stats.label}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform duration-300 group-hover:scale-100 scale-75">
            <ArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{project.location}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="proyectos" className="bg-secondary/30 py-24 lg:py-32">
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
            Proyectos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Experiencia que{" "}
            <span className="text-primary">genera impacto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Algunos de nuestros proyectos mas destacados en gestion de riesgos,
            sostenibilidad e ingenieria.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

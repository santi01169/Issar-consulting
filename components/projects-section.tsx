"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, MapPin, X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Gestión de Riesgos Aeropuerto José María Córdova",
    category: "Consultoría",
    location: "Rionegro, Antioquia",
    description:
      "Identificación, clasificación, evaluación y calificación de los riesgos de la construcción de franjas de seguridad, obras hidráulicas, obras de mitigación y/o contención, incluyendo trámite ambiental y predial.",
    image: "/images/projects/aeropuerto-rionegro.png",
    clients: [
      { name: "Aeronáutica Civil", logo: "/images/clients/aeronautica-consorcio.png" },
    ],
    stats: { label: "Aeropuerto", value: "JMC" },
  },
  {
    title: "Estudio Puente El Paso, El Totumo y Río Sumapaz",
    category: "Construcciones",
    location: "Huila y Tolima",
    description:
      "Estudio de análisis y gestión del riesgo Puente El Paso. Estudios y diseños para los puentes El Totumo (Huila) y Puente sobre el Río Sumapaz, Puente El Paso (Tolima). Estudios técnicos Fase II avanzada.",
    image: "/images/projects/puente-el-paso.png",
    clients: [
      { name: "INVIAS - JPS Ingeniería", logo: "/images/clients/invias-jps.png" },
    ],
    stats: { label: "Puentes", value: "3" },
  },
  {
    title: "Corredor Vial Santa Lucía Los Mangos",
    category: "Construcciones",
    location: "Nariño, Colombia",
    description:
      "Estudio de Amenazas y Riesgos: Producto 11 del Contrato No. 2020517. Formulación, estructuración, estudios y diseños definitivos - Fase 3 del corredor vial y acompañamiento durante la etapa de viabilización con los requisitos del Sistema General de Regalías.",
    image: "/images/projects/santa-lucia-aerial.jpg",
    clients: [
      { name: "ENTerritorio - JPS Ingeniería", logo: "/images/clients/enterritorio-jps.png" },
    ],
    stats: { label: "Fase", value: "3" },
  },
  {
    title: "Marginal del Río Cauca - El Tambo, Cajibío, Morales",
    category: "Consultoría",
    location: "Cauca, Colombia",
    description:
      "Estudio de análisis y gestión de riesgo de la Marginal del Río Cauca - Conexión El Tambo - Cajibío - Morales, en el Departamento del Cauca.",
    image: "/images/projects/rio-cauca-road.jpg",
    clients: [
      { name: "Gobernación del Cauca", logo: "/images/clients/gobernacion-cauca.png" },
    ],
    stats: { label: "Municipios", value: "3" },
  },
  {
    title: "Gestión de Riesgo Variante Oriental de Popayán",
    category: "Consultoría",
    location: "Popayán, Cauca",
    description:
      "Estudio de análisis y gestión de riesgo de la Variante Oriental de Popayán, en el departamento del Cauca. Estudios y diseños técnicos definitivos a nivel Fase III.",
    image: "/images/projects/popayan1.png",
    imageClassName: "object-contain p-2",
    clients: [
      { name: "Consorcio VYJ 007 - Gobernación del Cauca", logo: "/images/clients/consorcio-vyj-007.png" },
    ],
    stats: { label: "Fase", value: "III" },
  },
  {
    title: "Gestión del Riesgo - Hospital de Coveñas",
    category: "Consultoría",
    location: "Sucre, Colombia",
    description:
      "Gestión del riesgo de desastres. Dotación del Hospital de Coveñas, en el Municipio de Coveñas, Departamento de Sucre, identificado en el marco del Pacto Funcional Golfo de Morrosquillo.",
    image: "/images/projects/hospital-covenas-coast.jpg",
    clients: [
      { name: "CURE y CIA - Findeter", logo: "/images/clients/cure-findeter.png" },
    ],
    stats: { label: "Pacto", value: "GMQ" },
  },
  {
    title: "Interventoría Vías Terciarias Colombia Rural - Meta",
    category: "Construcciones",
    location: "Meta, Colombia",
    description:
      "Interventoría Técnica, Administrativa, Financiera y Ambiental para el mantenimiento y mejoramiento de vías terciarias del Programa Colombia Rural, Municipios Grupo 4 del Departamento del Meta (2021). Plan de Adaptación a la Guía Ambiental de INVIAS PAGA. Construcción de placa huella, afirmado y base tratada con cemento de la vía San Juanito – Calvario, Meta (2022).",
    image: "/images/projects/vias-meta.png",
    clients: [
      { name: "INVIAS - JPS Ingeniería", logo: "/images/clients/invias-jps-meta.png" },
    ],
    stats: { label: "Año", value: "2022" },
  },
  {
    title: "Interventoría Ambiental - Corredor El Calvario – Caño Negro",
    category: "Consultoría",
    location: "El Calvario, Meta",
    description:
      "Interventoría Ambiental para el mantenimiento y mejoramiento del Corredor El Calvario \u2013 Caño Negro en el marco del Programa Colombia Rural del Instituto Nacional de Vías (INVIAS), en el Municipio de El Calvario, Departamento del Meta.",
    image: "/images/projects/calvario-cano-negro.jpg",
    clients: [
      { name: "INVIAS - Alcaldía de El Calvario", logo: "/images/clients/invias-calvario.png" },
    ],
    stats: { label: "Meta", value: "INVIAS" },
  },
  {
    title: "Plan de Manejo Ambiental - Edificio Calle 97",
    category: "Consultoría",
    location: "Bogotá D.C., Colombia",
    description:
      "Elaboración del Plan de Manejo Ambiental (PMA) y Plan de Gestión Integral de Residuos de Construcción y Demolición (RCD) para la construcción del proyecto arquitectónico Edificio Calle 97 No. 19A – 54 / 68, en cumplimiento de la normativa ambiental vigente.",
    image: "/images/projects/edificio-calle97.jpg",
    clients: [
      { name: "CURE Y CIA S.A.S - Inversiones Chila S.A.S", logo: "/images/clients/cure-chila.png" },
    ],
    stats: { label: "Bogotá", value: "RCD" },
  },
  {
    title: "SST – Pozos Ecopetrol / Global Petroleum Services",
    category: "Coaching",
    location: "Colombia",
    description:
      "Asesoría en la gestión de Seguridad y Salud en el Trabajo (SST/HSE) a Global Petroleum Services Ltda. en el Contrato 3021707 de ECOPETROL: servicio de ingeniería y supervisión integral de pozos para planeación, perforación, terminación, completamiento, pruebas, reacondicionamiento, mantenimiento y abandono de pozos. Cumplimiento de anexos y obligaciones HSE del contratista. 2020 – 2021.",
    image: "/images/clients/wes1.png",
    clients: [
      { name: "Unión Temporal WES – Global Petroleum Services", logo: "/images/clients/wes.png" },
    ],
    stats: { label: "HSE", value: "2021" },
  },
  {
    title: "Adecuación de Espacios Interiores",
    category: "Adecuaciones Arquitectónicas",
    location: "Medellín, Antioquia",
    description:
      "Adecuación de espacios interiores con acabados en drywall, cielos rasos y pintura de alta calidad. Transformación total de ambientes residenciales y comerciales con materiales premium y mano de obra especializada.",
    image: "/images/projects/adecuaciones/techo-drywall.jpg",
    clients: [],
    stats: { label: "Acabados", value: "A+" },
  },
  {
    title: "Remodelación Integral de Cocina",
    category: "Adecuaciones Arquitectónicas",
    location: "Medellín, Antioquia",
    description:
      "Remodelación integral de cocina con mesón en cuarzo blanco, muebles en laca de alta gama, isla central funcional, enchape hexagonal botánico y luminarias tipo péndulo con detalles en dorado. Diseño moderno y funcional.",
    image: "/images/projects/adecuaciones/cocina-premium.png",
    clients: [],
    stats: { label: "Diseño", value: "XL" },
  },
  {
    title: "Adecuación de Baño con Enchape en Mármol",
    category: "Adecuaciones Arquitectónicas",
    location: "Medellín, Antioquia",
    description:
      "Adecuación completa de baño con enchape en mármol veteado, ducha de lluvia empotrada, vanity en madera natural, mesón en cuarzo y espejo con iluminación integrada. Acabados de lujo con atención al detalle.",
    image: "/images/projects/adecuaciones/bano-marmol.png",
    clients: [],
    stats: { label: "Lujo", value: "5★" },
  },
]

const categories = [
  "Todos",
  "Consultoría",
  "Construcciones",
  "Adecuaciones Arquitectónicas",
  "Coaching",
]

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0]
  index: number
  onClick: () => void
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const isArq = project.category === "Adecuaciones Arquitectónicas"

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-700 cursor-pointer hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", isArq ? "aspect-[3/4]" : "aspect-[4/3]", (isArq || project.imageClassName) && "bg-white")}>
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "h-full w-full transition-transform duration-700",
            project.imageClassName
              ? `${project.imageClassName} group-hover:scale-105`
              : (isArq ? "object-contain group-hover:scale-105" : "object-cover group-hover:scale-110")
          )}
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
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Client logos */}
        {project.clients && project.clients.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Clientes
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {project.clients.map((client) => (
                <div
                  key={client.name}
                  className="h-12 bg-white rounded-lg p-2 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>()

  // When "Todos" is selected, show one representative project from each pillar
  // When a specific pillar is selected, show all projects of that pillar
  const filtered =
    activeFilter === "Todos"
      ? [
        projects[0], // Aeropuerto - Consultoría
        projects[1], // Puentes - Construcciones
        projects[5], // Hospital Coveñas - Consultoría (shifted from 4)
        projects[6], // Vías Meta - Construcciones (shifted from 5)
        projects[9], // SST Ecopetrol - Coaching (shifted from 8)
        projects[8], // PMA Calle 97 - Consultoría (shifted from 7)
      ]
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
        <div className={cn(
          "mt-12 grid gap-6",
          filtered.length >= 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-2"
        )}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 9999 }}>
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative z-50 w-full max-w-3xl overflow-hidden rounded-2xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="max-h-[85vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 hover:bg-background backdrop-blur-md text-foreground transition-all shadow-sm"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header Image */}
              <div className={cn("relative w-full overflow-hidden", selectedProject.category === "Adecuaciones Arquitectónicas" || selectedProject.imageClassName ? "aspect-video bg-white" : "aspect-video")}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={cn("h-full w-full", selectedProject.imageClassName ? selectedProject.imageClassName : (selectedProject.category === "Adecuaciones Arquitectónicas" ? "object-contain" : "object-cover"))}
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm shadow-md">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-muted-foreground mb-3 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{selectedProject.location}</span>
                </div>

                <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4 text-balance">
                  {selectedProject.title}
                </h2>

                <p className="text-base leading-relaxed text-muted-foreground mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-border">
                  {/* Clients */}
                  {selectedProject.clients && selectedProject.clients.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-4">
                        Clientes / Aliados
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {selectedProject.clients.map((client) => (
                          <div key={client.name} className="flex flex-col gap-2">
                            <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center border border-border shadow-sm">
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground text-center line-clamp-2 max-w-[128px]">{client.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats / Highlights */}
                  {selectedProject.stats && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-4">
                        Dato Destacado
                      </p>
                      <div className="flex items-center gap-4 bg-secondary/30 rounded-xl p-5 border border-border/50">
                        <div className="text-4xl font-black text-primary">
                          {selectedProject.stats.value}
                        </div>
                        <div className="flex flex-col">
                          <div className="text-xs font-semibold text-foreground uppercase tracking-wider">
                            Impacto
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {selectedProject.stats.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

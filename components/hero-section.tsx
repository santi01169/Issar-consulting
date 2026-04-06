"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Shield, Leaf, Building2, GraduationCap } from "lucide-react"

const highlights = [
  { icon: Shield, label: "Gestion de Riesgos" },
  { icon: Leaf, label: "Sostenibilidad" },
  { icon: Building2, label: "Ingenieria" },
  { icon: GraduationCap, label: "Entrenamiento" },
]

const carouselImages = [
  { src: "/images/hero-bg.jpg", alt: "Paisaje colombiano sostenible" },
  { src: "/images/carousel/ingenieria-puentes.jpg", alt: "Ingenieria de puentes e infraestructura" },
  { src: "/images/carousel/sostenibilidad-ambiental.jpg", alt: "Sostenibilidad y conservacion ambiental" },
  { src: "/images/carousel/gestion-riesgos.jpg", alt: "Gestion de riesgos urbanos" },
  { src: "/images/carousel/construccion-moderna.jpg", alt: "Construccion sostenible moderna" },
  { src: "/images/carousel/mirador-colibri.jpg", alt: "Visita tecnica Mirador El Colibri" },
]

const SLIDE_INTERVAL = 5000 // ms

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState<number | null>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentSlide + 1) % carouselImages.length
      setNextSlide(next)
      setFading(true)
      setTimeout(() => {
        setCurrentSlide(next)
        setNextSlide(null)
        setFading(false)
      }, 900) // match transition duration
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [currentSlide])

  const goToSlide = (index: number) => {
    if (index === currentSlide || fading) return
    setNextSlide(index)
    setFading(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setNextSlide(null)
      setFading(false)
    }, 900)
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {/* Current slide */}
        <img
          key={`current-${currentSlide}`}
          src={carouselImages[currentSlide].src}
          alt={carouselImages[currentSlide].alt}
          className="absolute h-full w-full object-cover transition-opacity duration-[900ms]"
          style={{ opacity: fading ? 0 : 1 }}
        />
        {/* Next slide (fades in) */}
        {nextSlide !== null && (
          <img
            key={`next-${nextSlide}`}
            src={carouselImages[nextSlide].src}
            alt={carouselImages[nextSlide].alt}
            className="absolute h-full w-full object-cover transition-opacity duration-[900ms]"
            style={{ opacity: fading ? 1 : 0 }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { l: 10, t: 15, d: 0, dur: 4 },
          { l: 25, t: 30, d: 0.5, dur: 5 },
          { l: 40, t: 10, d: 1, dur: 3.5 },
          { l: 55, t: 45, d: 1.5, dur: 6 },
          { l: 70, t: 20, d: 2, dur: 4.5 },
          { l: 85, t: 60, d: 0.3, dur: 5.5 },
          { l: 15, t: 70, d: 1.2, dur: 3.8 },
          { l: 35, t: 55, d: 2.5, dur: 4.2 },
          { l: 60, t: 75, d: 0.8, dur: 6.5 },
          { l: 80, t: 35, d: 1.8, dur: 3.2 },
          { l: 5, t: 50, d: 2.2, dur: 5.2 },
          { l: 50, t: 85, d: 0.6, dur: 4.8 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm transition-all duration-700 ${loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
              }`}
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary-foreground/90">
              Consultoria Sostenible
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`mt-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-7xl text-balance transition-all duration-700 delay-200 ${loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            Reinventa tu futuro{" "}
            <span className="text-accent">de manera sostenible</span>
          </h1>

          {/* Description */}
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 transition-all duration-700 delay-400 ${loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            Servicios de consultoría y asesoría especializada en gestión de proyectos, sostenibilidad ambiental e ingeniería, orientados a fortalecer el desarrollo eficiente de organizaciones y municipios en Colombia.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <a
              href="#servicios"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="relative z-10">Conoce Nuestros Servicios</span>
              <div className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center font-bold text-accent-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Conoce Nuestros Servicios
              </span>
            </a>
            <a
              href="#contacto"
              className="rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-sm font-bold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
            >
              Hablemos
            </a>
          </div>
        </div>

        {/* Service Highlight Pills */}
        <div
          className={`mt-16 flex flex-wrap gap-3 transition-all duration-700 delay-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              <item.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentSlide
                ? "w-6 bg-accent"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#servicios"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          aria-label="Scroll abajo"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Descubre
          </span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

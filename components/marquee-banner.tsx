"use client"

const items = [
  "Gestion de Riesgos",
  "Sostenibilidad Ambiental",
  "Estudios Geologicos",
  "Huella de Carbono",
  "Ingenieria Sostenible",
  "Entrenamiento",
  "Empresas BIC",
  "Seguridad y Salud",
  "Estudios Ambientales",
  "ODS",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-primary py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/90">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

const stats = [
  { value: 20, suffix: "+", label: "Proyectos Ejecutados" },
  { value: 10, suffix: "+", label: "Clientes Estratégicos" },
  { value: 5, suffix: "+", label: "Años de Experiencia" },
  { value: 100, suffix: "%", label: "Compromiso Sostenible" },
]

function StatCounter({
  stat,
  isVisible,
  delay,
}: {
  stat: (typeof stats)[0]
  isVisible: boolean
  delay: number
}) {
  const { count, start } = useCountUp(stat.value, 2000, true)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(start, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, start, delay])

  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-primary-foreground lg:text-6xl">
        {count}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-primary-foreground/70">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.3)

  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/5" />
      </div>

      <div
        ref={ref}
        className={cn(
          "relative mx-auto max-w-7xl px-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              delay={i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

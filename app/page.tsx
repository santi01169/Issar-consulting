import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <AboutSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

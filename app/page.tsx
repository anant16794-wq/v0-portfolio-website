import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}

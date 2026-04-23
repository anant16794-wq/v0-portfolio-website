"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into my most impactful projects, showcasing problem-solving approach and measurable outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, Code } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

const iconMap = {
  education: GraduationCap,
  hackathon: Trophy,
  work: Briefcase,
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Timeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My path through education, hackathons, and building expertise in AI and robotics.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const Icon = iconMap[item.type as keyof typeof iconMap] || Briefcase;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background -translate-x-1/2 mt-1.5 z-10 ${
                    item.type === "hackathon" ? "bg-amber-500" : "bg-primary"
                  }`} />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-sm font-medium text-primary">{item.period}</span>
                        {item.type === "hackathon" && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
                            Hackathon
                          </span>
                        )}
                      </div>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Icon className={`w-5 h-5 ${item.type === "hackathon" ? "text-amber-500" : "text-primary"}`} />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
                      <p className="text-sm text-foreground/80">{item.description}</p>
                      
                      {item.project && (
                        <div className={`flex items-center gap-2 mt-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Code className="w-4 h-4 text-primary" />
                          <span className="text-xs font-medium text-primary">Project: {item.project}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

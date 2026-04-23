"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Lightbulb, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    solution: string;
    impact: { metric: string; label: string }[];
    techStack: string[];
    category: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                {project.category}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground">{project.subtitle}</p>
            </div>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-foreground/80 leading-relaxed">{project.description}</p>

          {/* Problem, Solution Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Problem</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Solution</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {project.impact.map((item, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-2xl md:text-3xl font-bold text-primary">{item.metric}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-secondary/50 border-border text-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

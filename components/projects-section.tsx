import { Code2, Github, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    name: "pdf-editor",
    description: "Lightweight PDF tooling with a focus on clean UX for document tweaks.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://github.com/AttaUrRehman121/pdf-editor",
    highlight: true,
  },
  {
    name: "IMDCLONE",
    description: "An IMDb-inspired experience with movie discovery and detail views.",
    tech: ["React", "TypeScript", "TMDB API"],
    url: "https://github.com/AttaUrRehman121/IMDCLONE",
  },
  {
    name: "cv-editor",
    description: "Resume builder that keeps content structured and export-friendly.",
    tech: ["TypeScript", "Tailwind"],
    url: "https://github.com/AttaUrRehman121/cv-editor",
  },
  {
    name: "Birthday_Wish-site",
    description: "Delightful celebratory microsite with animations and custom flows.",
    tech: ["TypeScript", "Vercel"],
    url: "https://github.com/AttaUrRehman121/Birthday_Wish-site",
  },
  {
    name: "qBankly-Clone",
    description: "Banking experience clone focusing on layout fidelity and UX polish.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://github.com/AttaUrRehman121/qBankly-Clone",
  },
  {
    name: "Retail-Management-System",
    description: "Retail ops tooling with inventory, sales, and reporting workflows.",
    tech: ["TypeScript", ".NET"],
    url: "https://github.com/AttaUrRehman121/Retail-Management-System",
  },
  {
    name: "Project-LifeChain",
    description: "Blockchain-inspired project hub built for transparency and tracking.",
    tech: ["HTML", "JS"],
    url: "https://github.com/AttaUrRehman121/Project-LifeChain",
    highlight: true,
  },
  {
    name: "nextjs-dashboard",
    description: "Admin analytics starter with charts, tables, and auth wiring.",
    tech: ["Next.js", "TypeScript"],
    url: "https://github.com/AttaUrRehman121/nextjs-dashboard",
  },
  {
    name: "ChatApp",
    description: "Realtime messaging foundation with a clean, responsive shell.",
    tech: ["JavaScript", "Sockets"],
    url: "https://github.com/AttaUrRehman121/ChatApp",
  },
  {
    name: "CompanyPortfolio",
    description: "Corporate portfolio site emphasizing brand, services, and case studies.",
    tech: ["TypeScript", "Next.js"],
    url: "https://github.com/AttaUrRehman121/CompanyPortfolio",
    highlight: true,
  },
  {
    name: "DeepSeek-V3",
    description: "Playing with the DeepSeek model stack and experimentation setups.",
    tech: ["Python"],
    url: "https://github.com/AttaUrRehman121/DeepSeek-V3",
  },
  {
    name: "Gemini-Clone",
    description: "Conversational UI mimic with prompt/response presentation.",
    tech: ["JavaScript", "CSS"],
    url: "https://github.com/AttaUrRehman121/Gemini-Clone",
  },
  {
    name: "SuperLearning-Reactjs-App-Project",
    description: "Learning-focused app with modular lessons and progress tracking.",
    tech: ["React", "APIs"],
    url: "https://github.com/AttaUrRehman121/SuperLearning-Reactjs-App-Project",
  },
  {
    name: "SuperLearningAPI-ASP.NET-Core-MVC-API-_",
    description: "API backend powering learning experiences with ASP.NET Core MVC.",
    tech: ["ASP.NET Core", "SQL"],
    url: "https://github.com/AttaUrRehman121/SuperLearningAPI-ASP.NET-Core-MVC-API-_",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-16">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & Experiments"
          description="A curated mix of client work, personal experiments, and product explorations from my GitHub."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              className={`h-full border-white/10 bg-slate-900/70 ${project.highlight ? "ring-1 ring-blue-400/40" : ""}`}
            >
              <CardHeader className="flex flex-row items-start justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code2 className="h-5 w-5 text-blue-300" />
                    {project.name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </div>
                {project.highlight ? (
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                    Featured
                  </span>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    className="px-4"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Repo
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-blue-200"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Open
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

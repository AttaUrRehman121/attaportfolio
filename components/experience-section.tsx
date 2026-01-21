import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  current?: boolean;
};

const experience: ExperienceItem[] = [
  {
    company: "Patronecs",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Present",
    location: "Remote / Pakistan",
    summary:
      "Shipping production-ready features across web platforms with a focus on developer experience, performance, and modern UI.",
    highlights: [
      "Implementing front-end features in TypeScript/Next.js aligned with established design systems.",
      "Collaborating with senior engineers on API integration, state management, and automated testing.",
      "Improving component reusability and reducing duplication across product surfaces.",
      "Building and extending internal tools using no-code/low-code platforms such as Bubble.io.",
    ],
    current: true,
  },
  {
    company: "IEEE USKT Student Branch",
    role: "Chairperson",
    period: "Oct 2023 – Present",
    location: "University of Sialkot",
    summary:
      "Leading a student engineering community and running national-level technical events.",
    highlights: [
      "Orchestrated a national competition with 700+ participants from 15+ universities.",
      "Mentored junior members on organizing workshops, hackathons, and tech talks.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-16">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve been recently"
          description="Roles that shaped how I think about shipping software, leading teams, and building for real users."
        />

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <Card
              key={`${item.company}-${item.role}`}
              className={`border-white/10 bg-slate-900/80 ${item.current ? "ring-1 ring-blue-400/40" : ""}`}
            >
              <CardHeader className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base md:text-lg">
                      {item.role}
                      {item.current ? (
                        <span className="ml-2 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                          Current
                        </span>
                      ) : null}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm text-slate-300">
                      {item.company}
                      {item.location ? ` · ${item.location}` : null}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-300/90">
                  {item.period}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-slate-200">
                  {item.summary}
                </p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


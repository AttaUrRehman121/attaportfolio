'use client';

import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

function formatDuration(months: number): string {
  if (months >= 12) {
    const yrs = Math.floor(months / 12);
    const remainder = months % 12;
    return remainder > 0 ? `${yrs}+ yrs` : `${yrs} yr${yrs > 1 ? "s" : ""}`;
  }
  return `${months} mos`;
}

function monthsBetween(start: Date, end: Date): number {
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  return Math.max(0, months);
}

function formatPeriod(start: Date, end: Date | null): string {
  const fmt = (d: Date) => d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return end ? `${fmt(start)} – ${fmt(end)}` : `${fmt(start)} – Present`;
}

type RoleEntry = {
  role: string;
  startDate: Date;
  endDate: Date | null;
  current?: boolean;
};

type ExperienceItem = {
  company: string;
  employmentType: string;
  startDate: Date;
  location: string;
  roles: RoleEntry[];
  summary: string;
  highlights: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Patronecs",
    employmentType: "Full-time",
    startDate: new Date(2025, 6, 1), // Jul 2025
    location: "Sialkot, Punjab, Pakistan · On-site",
    roles: [
      {
        role: "Software Engineer",
        startDate: new Date(2025, 8, 1), // Sep 2025
        endDate: null,
        current: true,
      },
      {
        role: "Associate Software Engineer",
        startDate: new Date(2025, 6, 1), // Jul 2025
        endDate: new Date(2025, 8, 0), // Aug 2025 (last day)
      },
    ],
    summary:
      "Shipping production-ready features across web platforms with a focus on R&D, new tech implementation, developer experience, and modern UI.",
    highlights: [
      "Handling R&D and new tech implementation across product and tooling.",
      "Implementing front-end features in TypeScript/Next.js aligned with established design systems.",
      "Collaborating with senior engineers on API integration, state management, and automated testing.",
      "Improving component reusability and reducing duplication across product surfaces.",
      "Building and extending internal tools using no-code/low-code platforms such as Bubble.io.",
    ],
  },
  {
    company: "IEEE USKT Student Branch",
    employmentType: "Volunteer",
    startDate: new Date(2023, 9, 1), // Oct 2023
    location: "University of Sialkot",
    roles: [
      {
        role: "Chairperson",
        startDate: new Date(2023, 9, 1), // Oct 2023
        endDate: null,
        current: true,
      },
    ],
    summary:
      "Leading a student engineering community and running national-level technical events.",
    highlights: [
      "Orchestrated a national competition with 700+ participants from 15+ universities.",
      "Mentored junior members on organizing workshops, hackathons, and tech talks.",
    ],
  },
];

export function ExperienceSection() {
  const now = new Date();

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-16">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been recently"
          description="Roles that shaped how I think about shipping software, leading teams, and building for real users."
        />

        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
          {experience.map((item) => (
            <Card
              key={item.company}
              className={`border-white/10 bg-slate-900/80 ${item.roles.some((r) => r.current) ? "ring-1 ring-blue-400/40" : ""}`}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Company header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {item.company}
                    </h3>
                    <p className="mt-0.5 text-sm text-slate-400">
                      {item.employmentType} · {formatDuration(monthsBetween(item.startDate, now))}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-400">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Timeline of roles */}
                <div className="mt-6">
                  <div className="relative flex">
                    <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-600/80" />
                    <div className="flex flex-col gap-0">
                      {item.roles.map((role) => {
                        const roleEnd = role.endDate ?? now;
                        const duration = monthsBetween(role.startDate, roleEnd);
                        return (
                          <div
                            key={role.role}
                            className="relative flex gap-4 pb-6 last:pb-0"
                          >
                            <div
                              className={`relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${role.current ? "bg-blue-400 ring-2 ring-blue-400/30" : "bg-slate-500"}`}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-white">
                                {role.role}
                                {role.current ? (
                                  <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                                    Current
                                  </span>
                                ) : null}
                              </p>
                              <p className="mt-0.5 text-sm text-slate-400">
                                {formatPeriod(role.startDate, role.endDate)} · {formatDuration(duration)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Summary & highlights */}
                <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                  <p className="text-sm leading-relaxed text-slate-200">
                    {item.summary}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

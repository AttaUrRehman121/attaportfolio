'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type TabKey = "skills" | "certifications" | "experience" | "education";

const tabs: { key: TabKey; label: string }[] = [
  { key: "skills", label: "Skills" },
  { key: "certifications", label: "Certifications" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
];

const tabContent: Record<TabKey, { title: string; description: string }[]> = {
  skills: [
    {
      title: "Front-end Engineering",
      description: "Next.js, React, TypeScript, Tailwind — fast and polished UIs.",
    },
    {
      title: "Full-stack Delivery",
      description: "Node.js and ASP.NET backends with clean APIs and persistence.",
    },
    {
      title: "Desktop Apps",
      description: "C#/.NET builds for robust Windows experiences.",
    },
    {
      title: "DevOps & CI/CD",
      description: "Pipelines, deployments, observability, and delivery discipline.",
    },
    {
      title: "UX Craft",
      description: "Interaction patterns, accessibility, and micro-interactions.",
    },
  ],
  certifications: [
    { title: "HTML and CSS in Depth", description: "Meta — Coursera" },
    { title: "Introduction to DevOps", description: "IBM — Coursera" },
    { title: "Introduction to Artificial Intelligence", description: "IBM — Coursera" },
  ],
  experience: [
    {
      title: "Chairperson — IEEE USKT Student Branch",
      description:
        "Led national competitions (700+ participants, 15+ universities) driving visibility and engagement.",
    },
    {
      title: "Associate Software Engineer → Software Engineer — Patronecs",
      description:
        "Promoted from Associate to Software Engineer. Handling R&D and new tech implementation. Building and maintaining modern web interfaces in TypeScript/Next.js and internal tools on platforms like Bubble.io since July 2025. On-site position.",
    },
    {
      title: "Executive Committee Member — IEEE USKT",
      description: "Ran student initiatives, workshops, and community programs.",
    },
  ],
  education: [
    {
      title: "BS — Software Engineering",
      description: "2021 – current · University of Sialkot, Pakistan",
    },
    {
      title: "ICS — Economics",
      description: "2019 – 2021 · Government Degree College, Zaferwal",
    },
    {
      title: "Matric",
      description: "2017 – 2019 · Unique Higher Education School, Darman",
    },
  ],
};

export function AboutSection() {
  const [active, setActive] = useState<TabKey>("skills");

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 lg:px-16">
        <div className="flex-1 space-y-6">
          <SectionHeading
            eyebrow="About"
            title="A builder with product instincts"
            description="I blend engineering depth with product sense to deliver interfaces that users remember. I care about performance, accessibility, and the tiny details that make experiences feel premium."
          />

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                variant={active === tab.key ? "primary" : "ghost"}
                onClick={() => setActive(tab.key)}
                className="rounded-xl px-4 py-2 text-sm"
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <Card className="bg-slate-900/80">
            <CardContent className="space-y-4">
              {tabContent[active].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-white/5 pb-3 last:border-none last:pb-0"
                >
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import {
  Layers,
  Smartphone,
  MonitorSmartphone,
  ShieldCheck,
  Database,
  Zap,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Product Engineering",
    description:
      "From discovery to launch — requirements, UX, build, and delivery with measurable outcomes.",
    icon: Zap,
  },
  {
    title: "Web Platforms",
    description:
      "Responsive, performant web apps using React, Next.js, TypeScript, and design systems.",
    icon: Layers,
  },
  {
    title: "Mobile Experiences",
    description:
      "Native and cross-platform builds with smooth flows, accessibility, and offline-first thinking.",
    icon: Smartphone,
  },
  {
    title: "Desktop Applications",
    description:
      "Windows desktop solutions with C#/.NET, robust data handling, and distribution readiness.",
    icon: MonitorSmartphone,
  },
  {
    title: "Lifecycle & Support",
    description:
      "Performance tuning, observability, maintenance, and continuous improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Data & Integrations",
    description:
      "Schema design, API integrations, and data workflows across SQL, NoSQL, and cloud.",
    icon: Database,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-16">
        <SectionHeading
          eyebrow="Services"
          title="Ways I can help"
          description="I partner end-to-end: aligning product goals, shaping UX, and delivering resilient, scalable software."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="h-full border-white/10 bg-slate-900/70">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-slate-900 to-slate-900 px-6 py-6 shadow-lg shadow-black/30">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Need something bespoke?
            </h3>
            <p className="text-sm text-slate-300">
              Let&apos;s scope your next release or MVP together.
            </p>
          </div>
          <Button href="#contact">Start a conversation</Button>
        </div>
      </div>
    </section>
  );
}

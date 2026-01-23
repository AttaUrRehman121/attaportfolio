import Image from "next/image";
import { ArrowUpRight, Briefcase, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "ASP.NET",
  "Tailwind",
  "CI/CD",
  "UI Engineering",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.12),transparent_32%)]" />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 md:flex-row md:items-center lg:px-16">
        <div className="flex-1 space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-blue-100">
            <Badge className="bg-blue-500/15 text-blue-100 text-xs">
              <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Software Engineer
            </Badge>
            <span className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 sm:px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-200">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              Pakistan
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 sm:px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-200">
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
              Freelance-ready
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Building purposeful digital products.
            <span className="block text-blue-300">
              Web, mobile, and desktop with polish.
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200">
            I design and engineer experiences that balance craft with delivery.
            From rapid prototypes to production apps, I ship interfaces that
            feel modern, fast, and thoughtfully branded.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Button href="#projects" className="w-full sm:w-auto">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" href="/docs/atta-ur-rehman-cv.pdf" download className="w-full sm:w-auto">
              Download CV
            </Button>
            <Button variant="ghost" href="#contact" className="text-blue-200 w-full sm:w-auto">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[340px] md:w-[340px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 sm:p-3 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.7)]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/Atta-Home.JPG"
                alt="Atta Ur Rehman"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 340px"
                className="object-cover"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

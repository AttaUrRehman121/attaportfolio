'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { href: "https://www.facebook.com/mani.rana.10420321?mibextid=kFxxJD", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/manirana9/#", icon: Instagram, label: "Instagram" },
  { href: "http://www.linkedin.com/in/atta-ur-rehman62", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/AttaUrRehman121", icon: Github, label: "GitHub" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all",
        scrolled
          ? "backdrop-blur-md bg-slate-950/85 border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-slate-950/70 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-16">
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("#home");
          }}
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white"
        >
          <span>Atta</span>
          <span className="text-blue-400">Ur</span>
          <span>Rehman</span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-100 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className="transition-colors hover:text-blue-300"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 pl-6">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-blue-500 hover:text-blue-300"
                title={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            <Button
              variant="outline"
              className="ml-2"
              href="/docs/atta-ur-rehman-cv.pdf"
              download
            >
              Download CV
            </Button>
            <Button onClick={() => handleNavigate("#contact")}>Let&apos;s Talk</Button>
          </div>
        </nav>

        <div className="md:hidden">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-blue-500 hover:text-blue-300"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-md" />
          <div className="fixed inset-x-4 top-20 z-40 space-y-6 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-black/50">
            <div className="space-y-3 text-base font-medium text-white">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigate(link.href)}
                  className="w-full rounded-xl px-3 py-2 text-left transition hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-blue-500 hover:text-blue-300"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="outline" href="/docs/atta-ur-rehman-cv.pdf" download>
                Download CV
              </Button>
              <Button onClick={() => handleNavigate("#contact")}>Let&apos;s Talk</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

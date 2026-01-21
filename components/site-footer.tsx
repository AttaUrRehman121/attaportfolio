import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const socials = [
  { href: "https://www.facebook.com/mani.rana.10420321?mibextid=kFxxJD", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/manirana9/#", icon: Instagram, label: "Instagram" },
  { href: "http://www.linkedin.com/in/atta-ur-rehman62", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/AttaUrRehman121", icon: Github, label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 md:flex-row lg:px-16">
        <a href="#home" className="text-xl font-semibold text-white">
          Atta<span className="text-blue-400">Ur</span>Rehman
        </a>
        <div className="flex items-center gap-3">
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
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

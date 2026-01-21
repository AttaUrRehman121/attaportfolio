'use client';

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.body) {
      setState("error");
      setMessage("Please fill out all fields before sending.");
      return;
    }

    setState("success");
    setMessage("Thanks! Your message is ready to be sent.");
    setForm({ name: "", email: "", subject: "", body: "" });
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something bold"
          description="Available for freelance, product partnerships, and rapid prototyping. Reach out via email, phone, or the form."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/15 via-slate-900 to-slate-900 p-6 shadow-2xl shadow-black/30">
              <div className="flex items-center gap-3 text-slate-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-300">
                    Phone
                  </p>
                  <a
                    href="tel:+923095896203"
                    className="text-lg font-medium text-white"
                  >
                    +92 309 5896203
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-300">
                    Email
                  </p>
                  <a
                    href="mailto:Manirana770@gmail.com"
                    className="text-lg font-medium text-white"
                  >
                    Manirana770@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="Project idea or role"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.body}
                  onChange={(e) => setForm({ ...form, body: e.target.value })}
                  placeholder="Tell me about your project, timeline, and goals."
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Button type="submit">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                {message ? (
                  <p
                    className={`text-sm ${
                      state === "success"
                        ? "text-green-300"
                        : state === "error"
                          ? "text-amber-300"
                          : "text-slate-300"
                    }`}
                  >
                    {message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [drafted, setDrafted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Project inquiry${company ? ` from ${company}` : ""}`;
    const body = `Name: ${name}\nCompany: ${company}\n\n${message}`;
    trackEvent("contact_form_submitted", { has_company: Boolean(company) });
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setDrafted(true);
  }

  if (drafted) {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <CheckCircle className="size-10 text-violet-300" />
        <h3 className="text-lg font-semibold text-foreground">Draft opened in your mail app.</h3>
        <p className="text-sm text-muted-foreground">
          Hit send there and we respond within 24 hours. Nothing opened? Email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-violet-300 hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" className="h-10" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Your company" className="h-10" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">What&apos;s the problem?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the workflow, the bottleneck, the systems involved..."
        />
      </div>
      <button
        type="submit"
        className={cn(
          buttonVariants(),
          "h-11 gap-2 self-start px-6 text-sm shadow-accent transition-transform hover:-translate-y-0.5"
        )}
      >
        Send message <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

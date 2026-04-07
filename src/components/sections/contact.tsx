"use client";

import { useState } from "react";
import { Mail, Phone, Globe } from "lucide-react";

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API || "";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "Info@ExtinctionServices.com",
    href: "mailto:Info@ExtinctionServices.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(727) 721-1982",
    href: "tel:+17277211982",
  },
  {
    icon: Globe,
    label: "Web",
    value: "ExtinctionServices.com",
    href: "https://ExtinctionServices.com",
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-bg-surface py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto text-center">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          CONTACT
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          Start a Confidential Conversation
        </h2>
        <p className="font-sans text-base text-text-secondary mt-4 max-w-[600px] mx-auto leading-relaxed">
          Every engagement begins with a private consultation. Submit the form
          below or reach out directly — all inquiries are confidential.
        </p>

        {/* Contact Form */}
        {status === "sent" ? (
          <div className="max-w-[600px] mx-auto mt-10 border border-gold/30 p-10">
            <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
              MESSAGE RECEIVED
            </span>
            <p className="font-sans text-base text-text-primary mt-4">
              Thank you for reaching out. A member of our team will respond
              within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="font-sans text-sm text-gold mt-6 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="max-w-[600px] mx-auto mt-10 text-left"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs text-text-muted tracking-[1px] block mb-1.5">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="John"
                  className="w-full bg-bg-card border border-border-custom px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-xs text-text-muted tracking-[1px] block mb-1.5">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-bg-card border border-border-custom px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="font-sans text-xs text-text-muted tracking-[1px] block mb-1.5">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-bg-card border border-border-custom px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="mt-4">
              <label className="font-sans text-xs text-text-muted tracking-[1px] block mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us briefly about your situation..."
                className="w-full bg-bg-card border border-border-custom px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-gold/50 focus:outline-none transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="font-sans text-sm text-red-400 mt-3">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-gold text-bg-primary font-sans text-sm font-medium py-3.5 px-8 mt-6 hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Confidential Inquiry"}
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-bg-card border border-border-custom p-6 flex flex-col items-center gap-3 hover:border-gold/50 transition-colors"
            >
              <item.icon className="text-gold" size={24} />
              <span className="font-sans text-[11px] tracking-[3px] text-text-muted uppercase">
                {item.label}
              </span>
              <span className="font-sans text-sm text-text-primary">
                {item.value}
              </span>
            </a>
          ))}
        </div>

        <p className="font-sans text-[13px] text-text-muted italic mt-8 max-w-[600px] mx-auto">
          All inquiries are confidential. Operational team identities are
          provided under NDA upon engagement.
        </p>
      </div>
    </section>
  );
}

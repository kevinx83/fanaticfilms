"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mwprlpzd", { 
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    if (res.ok) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="container-max py-14">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-2 text-white/80">Ready to pitch? Tell us about your project and we’ll get back quickly.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="card grid gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" name="name" required className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows={5} required className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2" />
          </div>
          <button className="btn w-fit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <p className="text-green-400 text-sm">✅ Email sent! We’ll be in touch soon.</p>}
          {status === "error" && <p className="text-red-400 text-sm">⚠️ Something went wrong. Please try again.</p>}
        </form>

        <div className="card">
          <h3 className="text-lg font-semibold">Details</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>📧 <span className="text-brand-accent">chris@fanaticfilms.net</span></li>
            <li>📍 Vancouver (HQ) • Tokyo • London</li>
            <li>🎯 Services: production, casting, voice direction, editing, writing, storyboarding</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

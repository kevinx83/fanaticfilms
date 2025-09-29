import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function ServiceCard({ icon, title, desc, items }: { icon: string; title: string; desc: string; items?: string[] }) {
    return (
      <div className="card h-full">
        <div className="text-2xl">{icon}</div>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-white/80">{desc}</p>
        {items && (
          <ul className="mt-3 list-disc list-inside text-sm text-white/70 space-y-1">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="container-max py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              We don’t just make pilots — <span className="text-brand-accent">we launch possibilities.</span>
            </h1>
            <p className="mt-4 text-white/80">
              We offer full-service production for both animation and live-action projects, guiding your idea from the earliest 
              concept all the way through to a polished, pitch-ready final cut. Whether you’re building a pilot from scratch or 
              need support in specific stages, our team ensures your story is brought to life with clarity, creativity, and impact.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn">Get Started</Link>
              <Link href="/work" className="btn-outline">View Our Work</Link>
            </div>
            <p className="mt-3 text-xs text-white/60">Based in Vancouver • Tokyo • London</p>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/images/studio.png" 
              alt="Film set with lights and camera"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container-max mt-6 md:mt-2">
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon="🎥"
            title="Film & Video Production"
            desc="End-to-end oversight ensuring pitch-ready pilots."
            items={["Project management", "Scheduling", "Creative direction"]}
          />
          <ServiceCard
            icon="🗣"
            title="Voice Direction"
            desc="Casting and directing sessions so every line lands with intent."
            items={["Talent casting", "Session direction", "Script interpretation"]}
          />
          <ServiceCard
            icon="✂"
            title="Video Editing"
            desc="From rough cut to delivery: syncing, sound, transitions, and polish."
            items={["Rough & final cuts", "Sound design", "Studio-friendly delivery"]}
          />
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/services" className="btn">All Services</Link>
        </div>
      </section>
    </>
  );
}

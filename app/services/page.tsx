export default function Services() {
  const services: { icon: string; title: string; desc: string; items?: string[] }[] = [
    { icon: "🎥", title: "Film & Video Production", desc: "Oversight across pre, production, and post; creative direction and scheduling.", items: ["Project management", "Animation coordination", "Scheduling", "Direction"] },
    { icon: "🗣", title: "Voice Direction", desc: "Casting and performance direction to capture tone, timing, and emotion.", items: ["Casting voice talent", "Directing sessions", "Script interpretation"] },
    { icon: "✂", title: "Video Editing", desc: "Post-production: sync, transitions, sound design, polish, delivery.", items: ["Rough/final cuts", "Audio syncing", "Transitions", "Sound design"] },
    { icon: "✍", title: "Screenwriting", desc: "Concept development and pilot scripts built to sell.", items: ["Concept → outline", "Drafts", "Revisions", "Punch-ups"] },
    { icon: "🎞", title: "Storyboarding", desc: "Blueprints for animation and pre-viz with timing.", items: ["Scene planning", "Blocking & framing", "Animatic prep"] },
    { icon: "🌀", title: "Live Action and Hybrid Animation", desc: "Wide range of live action and hybrid services — filming, blending animation, or video podcasts.", 
      items: [ "Concept development", "Talent management", "Studio shoots", "Live action direction", ] }
  ];

  return (
    <section className="container-max py-14">
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <p className="mt-2 text-white/80">Full-scale or à la carte, we slot into your pipeline.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {services.map((s) => (
          <div key={s.title} className="card h-full">
            <div className="text-2xl">{s.icon}</div>
            <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/80">{s.desc}</p>
            {s.items && (
              <ul className="mt-3 list-disc list-inside text-sm text-white/70 space-y-1">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

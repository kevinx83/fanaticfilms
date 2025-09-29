import Image from "next/image";

export default function Team() {
  const people = [
    {
      name: "Chris Mackay",
      role: "Studio Head / Executive Producer",
      bio: "Founder of Fanatic Films (2012). Produced, wrote, directed, edited, and voiced over 50 characters across projects including the 'Transformers G1 Returns!' pilot. Host of the Retromania podcast with 2.5M+ YouTube viewers.",
      available:
        "Live action & animated production, direction, writing, storyboarding, editing, voice acting",
      image: "/images/chris.jpg",
    },
    {
      name: "Brodie Alladice",
      role: "Stunt Performer & Podcast Contributor",
      bio: "Vancouver film industry veteran since 2016. Experience ranges from arborist and diver to stunt performer and rigging trainer. Known for sharp wit and lifelong passion for film.",
      available: "Live action, stunt performing, rigging",
      image: "/images/brodie.jpg",
    },
    {
      name: "Jamar Miller",
      role: "Producer & Creative Consultant",
      bio: "Producer of 'The Secret Files of Teletraan 2'. Based in Japan/USA, leads Asia representation. Founded Rising Sun Comics (50+ published issues). Now focused on production, writing, editing, and consulting.",
      available: "Production, concept development, writing, editing",
      image: "/images/jamar.jpg",
    },
    {
      name: "Pete Parrotta",
      role: "Co-Host, Retromania",
      bio: "25+ years in entertainment with credits including NBA Vancouver Grizzlies, CFL BC Lions, and CW’s Hellcats. Experienced choreographer, actor, host, and emcee for major events. Current co-host of Retromania.",
      available: "Live action, voice acting, hosting, choreography",
      image: "/images/pete.jpg",
    },
    {
      name: "Kevin Xu",
      role: "Web Developer & Audio Engineer",
      bio: "UBC Computer Science student who met Chris while volunteering at a local hospital. Brings technical skills in audio engineering and web development to Fanatic Films.",
      available: "Web development",
      image: "/images/kevin.jpg",
    },
    {
      name: "Benjamin Aryequey",
      role: "On-Screen Talent",
      available: "Screen acting, production assistance, LX",
      image: "", // fallback to generic
    },
    {
      name: "Alexandra Aur",
      role: "On-Screen Talent & Graphic Design",
      available: "Screen acting, voice acting",
      image: "",
    },
    {
      name: "Stephen Parkes",
      role: "UK Representation & Lead Voice Actor",
      available: "Voice acting, editing, audio & visual FX processing",
      image: "",
    },
    {
      name: "Mark Eatough",
      role: "UK Representation & Lead Voice Actor",
      available: "Voice acting",
      image: "",
    },
    {
      name: "Matthew Hubert",
      role: "Voice Actor & FX Contributor",
      available: "Voice acting, writing, editing",
      image: "",
    },
  ];

  return (
    <section className="container-max py-14">
      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-10">
        <Image
          src="/images/banner.png"
          alt="Team Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <p className="text-center text-lg md:text-xl max-w-3xl text-white px-4">
            Fanatic Films is built on a collective of creative voices — producers,
            performers, editors, and dreamers — united by a love for storytelling
            across film, audio, and digital media.
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-semibold">Team</h1>
      <p className="mt-2 text-white/80">
        Meet the people behind Fanatic Films. Headshots and expanded bios will
        continue to be added as they are provided.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {people.map((p) => (
          <div key={p.name + p.role} className="card">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/30">
              <Image
                src={p.image || "/images/generic.jpg"}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-brand-accent">{p.role}</p>
            {p.bio && (
              <p className="mt-2 text-sm text-white/70">{p.bio}</p>
            )}
            {p.available && (
              <p className="mt-1 text-sm text-white/70">
                Available for: {p.available}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

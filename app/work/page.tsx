export default function Work() {
  const videos = [
    { title: "Animated Pilot (recut & edited in-house)", url: "https://www.youtube.com/watch?v=gXA0EKSz7Ms", note: "Everything done in-house aside from original animation." },
    { title: "Comedy Series (animation + live action)", url: "https://www.youtube.com/watch?v=vFxrImLHlY4" },
    { title: "Live Action Video Podcast", url: "https://www.youtube.com/watch?v=b5EAC5H4QrM" },
  ];

  function VideoCard({ title, url, note }: { title: string; url: string; note?: string }) {
    const id = new URL(url).searchParams.get("v") || "";
    return (
      <div className="card">
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        {note && <p className="mt-1 text-sm text-white/70">{note}</p>}
      </div>
    );
  }

  return (
    <section className="container-max py-14">
      <h1 className="text-3xl font-semibold">Our Work</h1>
      <p className="mt-2 text-white/80">Samples across animation, hybrid, and live-action.</p>
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {videos.map((v) => <VideoCard key={v.title} {...v} />)}
      </div>
      <div className="mt-10 text-sm text-white/60">More coming soon — thumbnails and case studies to be added.</div>
    </section>
  );
}

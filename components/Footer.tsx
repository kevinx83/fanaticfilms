import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="container-max py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">Fanatic Films</h4>
          <p className="text-sm text-brand-subtle">
            Vancouver • Tokyo • London
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/services" className="hover:text-brand-accent">Services</Link></li>
            <li><Link href="/work" className="hover:text-brand-accent">Our Work</Link></li>
            <li><Link href="/team" className="hover:text-brand-accent">Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">chris@fanaticfilms.net</p>
          <div className="mt-3 flex gap-3">
            <Link href="/contact" className="btn-outline">Contact Form</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-max py-4 text-xs text-center text-white/60">
          © {new Date().getFullYear()} Fanatic Films. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

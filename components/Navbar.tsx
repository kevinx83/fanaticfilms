"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";   // 👈 make sure this is here

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-brand-bg/70 border-b border-white/5">
      <nav className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Fanatic Films logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold tracking-wide">Fanatic Films</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`hover:text-brand-accent ${
                  path === l.href ? "text-brand-accent" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

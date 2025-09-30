import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fanatic Films",
  description:
    "Fanatic Films produces pitch-ready pilots and full-service productions: writing, casting, voice direction, editing, animation, and live action.",
  keywords: [
    "Fanatic Films",
    "animation studio",
    "live action production",
    "voice acting",
    "casting",
    "video editing",
    "storyboarding",
    "Vancouver film production"
  ],
  openGraph: {
    title: "Fanatic Films – We launch possibilities.",
    description:
      "Animation & live-action pilots and productions. Vancouver-based studio with global reach.",
    url: "https://fanaticfilms.net",
    siteName: "Fanatic Films",
    images: [
      { url: "/logo.png", width: 800, height: 600, alt: "Fanatic Films logo" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanatic Films – We launch possibilities.",
    description:
      "Full-service animation & live-action production: writing, casting, voice direction, editing, and more.",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HR58TMMZSH"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HR58TMMZSH');
          `}
        </Script>
      </head>
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

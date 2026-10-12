import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

// Downloaded at build time and self-hosted — no request to Google from the
// visitor's browser.
const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Beurant",
    default: "Beurant — Interior & Exhibition Design Studio",
  },
  description:
    "Beurant is an interior and exhibition design studio in Sri Lanka, designing residential, retail, corporate and exhibition spaces.",
};

export const viewport: Viewport = {
  themeColor: "#221e18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. crxlauncher) add
    // attributes to <html> before React hydrates. Only affects this element.
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="btn btn-primary fixed left-4 top-3 z-[60] -translate-y-20 focus-visible:translate-y-0"
        >
          Skip to Content
        </a>
        <Nav />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

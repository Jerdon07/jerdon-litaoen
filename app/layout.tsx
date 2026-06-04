import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'});

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerdon Litaoen",
  description: "Personal Portfolio of Jerdon Litaoen",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", geistSans.variable, geistMono.variable, "font-sans", outfit.variable, geistHeading.variable)}
    >
      <body className="min-h-screen flex flex-col bg-background">
        <header className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-zinc-800/60">
          <Link
            href="/"
            className="text-sm font-bold tracking-widest uppercase transition-colors duration-200"
          >
            JL
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-foreground hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

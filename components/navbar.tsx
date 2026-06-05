"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-full flex items-center">
      {navLinks.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <div key={href} className="relative h-full flex items-center">
            <Link
  href={href}
  className={cn(
    "inline-flex items-center text-sm h-9 px-3 transition-colors duration-200 tracking-wide",
    isActive ? "text-primary" : "text-foreground hover:text-primary"
  )}
>
  {label}
</Link>
            {isActive && (
              <div className="absolute h-0.5 bottom-0 left-0 w-full bg-primary" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
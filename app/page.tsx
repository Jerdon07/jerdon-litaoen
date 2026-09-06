import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TechItem {
  name: string;
  iconClass: string;
}

const technologies: TechItem[] = [
  { name: "Laravel",    iconClass: "devicon-laravel-plain colored"    },
  { name: "Vue",        iconClass: "devicon-vuejs-plain colored"      },
  { name: "React",      iconClass: "devicon-react-plain colored"      },
  { name: "Inertia",    iconClass: "devicon-inertiajs-plain colored"  },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { name: "Figma",      iconClass: "devicon-figma-plain colored"      },
];

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden flex flex-col justify-center lg:block">

      {/* Profile */}
      <div className="flex justify-center pt-6 lg:hidden">
        <div className="relative size-40 rounded-full overflow-hidden ring-2 ring-primary/30">
          <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
          <Image
            src="/profile.png"
            alt="Jerdon Litaoen"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 right-10 size-130 z-10">
        <div className="absolute -inset-x-4 bottom-0 top-8 bg-primary/10 rounded-t-full blur-2xl" />
        <div className="relative w-full h-full">
          <Image
            src="/profile.png"
            alt="Jerdon Litaoen"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col gap-6 px-6 sm:py-10 items-center text-center
                      lg:absolute lg:bottom-0 lg:left-0 lg:px-20 lg:pb-24 lg:items-start lg:text-left">

        {/* Headline */}
        <div className="sm:w-lg">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Hi, I'm Jerdon.
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-primary leading-tight">
            Building scalable full-stack applications with a focus on robust backend architecture and clean code patterns.
          </h2>
        </div>

        {/* University */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 shrink-0 bg-emerald-900 rounded-full flex items-center justify-center">
            <Image
              src="/uc.png"
              alt="UC Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <p className="text-foreground text-base font-medium">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-foreground/40 text-sm">
              From{" "}
              <span className="text-foreground">University of the Cordilleras</span>
              , Baguio City
            </p>
          </div>
        </div>

        {/* Tesda Certificate */}
        <div className="pl-10 flex items-center gap-4">
          <div className="w-10 h-10 shrink-0 bg-blue-900 rounded-full flex items-center justify-center">
            <Award className="object-contain text-5xl" />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <p className="text-foreground text-base font-medium">
              Web Development NC III
            </p>
            
            <p className="text-foreground/40 text-sm">
              Technical Education and Skills Development Authority
                (<Badge className="px-2">TESDA</Badge>)
            </p>
          </div>
        </div>

        {/* Tech icons */}
        <div className="flex items-center flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="group flex items-center justify-center w-10 h-10 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
              <i className={`${tech.iconClass} text-4xl`} />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="px-6 py-2.5 bg-primary hover:bg-primary/80 text-primary-foreground text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-6 py-2.5 border border-muted hover:border-primary text-foreground/60 hover:text-primary text-sm font-semibold rounded-lg backdrop-blur-sm transition-colors duration-200"
          >
            About Me
          </Link>
        </div>

      </div>
    </div>
  );
}

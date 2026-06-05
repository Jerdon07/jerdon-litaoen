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
      <div className="flex justify-center pt-10 lg:hidden">
        <div className="relative size-40 rounded-full overflow-hidden ring-2 ring-emerald-500/30">
          <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full" />
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
        <div className="absolute -inset-x-4 bottom-0 top-8 bg-emerald-500/10 rounded-t-full blur-2xl" />
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
      <div className="z-10 flex flex-col gap-6 px-6 py-10 items-center text-center
                      lg:absolute lg:bottom-0 lg:left-0 lg:px-20 lg:pb-24 lg:items-start lg:text-left">

        {/* Headline */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-100 leading-tight">
            Hi, I'm Jerdon
          </h1>
          <h2 className="text-5xl sm:text-6xl font-semibold text-emerald-400 leading-tight">
            web developer.
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
            <p className="text-zinc-200 text-base font-medium">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-zinc-500 text-sm">
              From{" "}
              <span className="text-zinc-300">University of the Cordilleras</span>
              , Baguio City
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
              <i className={`${tech.iconClass} text-4xl text-zinc-500 group-hover:text-emerald-400 transition-colors duration-200`} />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-6 py-2.5 border border-zinc-700 hover:border-emerald-500/60 text-zinc-400 hover:text-emerald-400 text-sm font-semibold rounded-lg backdrop-blur-sm transition-colors duration-200"
          >
            About Me
          </Link>
        </div>

      </div>
    </div>
  );
}

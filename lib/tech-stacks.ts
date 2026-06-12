import { Server, MonitorSmartphone, Workflow, LucideIcon } from "lucide-react"

export interface ISkill {
    id: number
    title: string
    description: string
    icon: LucideIcon
    tools: {
        name: string
        color: string
    }[]
}

export const skills: ISkill[] = [
    {
        id: 1,
        title: "Backend & Core Architecture",
        description: "Building structured server-side logic, ensuring data integrity, and applying clean architectural patterns to keep systems maintainable.",
        icon: Server,
        tools: [{
            name: "Laravel",
            color: "bg-orange-500/50"
        }, {
            name: "NextJS",
            color: "bg-black text-white"
        }, {
            name: "PostgreSQL",
            color: "bg-indigo-500/50"
        }, {
            name: "Supabase",
            color: "bg-green-500/50"
        }]
    }, {
        id: 2,
        title: "Frontend & Reactive UI",
        description: "Developing responsive, component-driven user interfaces and managing application state across single-page architectures.",
        icon: MonitorSmartphone,
        tools: [{
            name: "Vue",
            color: "bg-emerald-500/50"
        }, {
            name: "React",
            color: "bg-cyan-500/50"
        }, {
            name: "InertiaJS",
            color: "bg-purple-500/50"
        }, {
            name: "TypeScript",
            color: "bg-blue-500/50"
        }, {
            name: "Tailwind CSS",
            color: "bg-sky-500/50"
        }, {
            name: "Leaflet",
            color: "bg-lime-500/50"
        }, {
            name: "Tanstack Table",
            color: "bg-yellow-500/50"
        }, {
            name: "Chart JS",
            color: "bg-pink-500/50"
        }, {
            name: "Figma",
            color: "bg-fuchsia-500/50"
        }]
    }, {
        id: 3,
        title: "Tooling & Workflow",
        description: "Optimizing the local development environment for quick iterations using lightweight tools, version control, and testing frameworks.",
        icon: Workflow,
        tools: [{
            name: "Git",
            color: "bg-black"
        }, {
            name: "Bun",
            color: "bg-pink-500/50"
        }, {
            name: "Composer",
            color: "bg-taupe-500/50"
        }, {
            name: "Postman",
            color: "bg-amber-500/50"
        }, {
            name: "Laravel Herd",
            color: "bg-red-500/50"
        }, {
            name: "DBngin",
            color: "bg-violet-500/50"
        }, {
            name: "Pest",
            color: "bg-teal-500/50"
        }]
    }
]
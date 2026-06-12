import { Server, MonitorSmartphone, Workflow, LucideIcon } from "lucide-react"

export interface ISkill {
    id: number
    title: string
    description: string
    icon: LucideIcon
    tools: string[]
}

export const skills: ISkill[] = [
    {
        id: 1,
        title: "Backend & Core Architecture",
        description: "I focus on server-side stability, data integrity, and scalable system patterns.",
        icon: Server,
        tools: ["Laravel", "NextJS", "PostgreSQL", "MySQL"]
    }, {
        id: 2,
        title: "Frontend & Reactive UI",
        description: "I focus on user interaction, state management, and building fluid single-page experiences.",
        icon: MonitorSmartphone,
        tools: ["Vue 3", "React", "InertiaJS", "TypeScript", "Tailwind CSS", "Figma"]
    }, {
        id: 3,
        title: "Tooling & Workflow",
        description: "I focus on modern developer efficiency, quick iteration, and lightweight environments.",
        icon: Workflow,
        tools: ["Git", "Bun", "Composer", "Laravel Herd", "DBngin", "Pest"]
    }
]
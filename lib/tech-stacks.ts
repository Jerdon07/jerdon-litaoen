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
        description: "Building structured server-side logic, ensuring data integrity, and applying clean architectural patterns to keep systems maintainable.",
        icon: Server,
        tools: ["Laravel", "NextJS", "PostgreSQL", "MySQL"]
    }, {
        id: 2,
        title: "Frontend & Reactive UI",
        description: "Developing responsive, component-driven user interfaces and managing application state across single-page architectures.",
        icon: MonitorSmartphone,
        tools: ["Vue 3", "React", "InertiaJS", "TypeScript", "Tailwind CSS", "Figma"]
    }, {
        id: 3,
        title: "Tooling & Workflow",
        description: "Optimizing the local development environment for quick iterations using lightweight tools, version control, and testing frameworks.",
        icon: Workflow,
        tools: ["Git", "Bun", "Composer", "Laravel Herd", "DBngin", "Pest"]
    }
]
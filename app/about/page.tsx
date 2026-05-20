import { MonitorSmartphone, Server, Workflow } from "lucide-react";

export default function About() {
    const skills = [
        {
            title: "Backend & Core Architecture",
            description: "I focus on server-side stability, data integrity, and scalable system patterns.",
            icon: <Server size={40} className="text-emerald-900" />,
            tools: ["Laravel", "NextJS", "PostgreSQL", "MySQL"]
        },
        {
            title: "Frontend & Reactive UI",
            description: "I focus on user interaction, state management, and building fluid single-page experiences.",
            icon: <MonitorSmartphone size={40} className="text-emerald-900" />,
            tools: ["Vue 3", "React", "InertiaJS", "TypeScript", "Tailwind CSS", "Figma"]
        },
        {
            title: "Tooling & Workflow",
            description: "I focus on modern developer efficiency, quick iteration, and lightweight environments.",
            icon: <Workflow size={40} className="text-emerald-900" />,
            tools: ["Git", "Bun", "Composer", "Laravel Herd", "DBngin", "Pest"]
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-172 h-52 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="my-5 flex-0 text-center w-2/3 space-y-4">
                <h1 className="text-2xl font-bold">Backend Specialized Web Developer</h1>
                <p className="text-zinc-400 leading-relaxed">I build full-stack web applications using Laravel, Vue, and Inertia. My approach is straightforward: I write clean, highly testable code to deliver smooth user experiences backed by reliable backend architecture.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 overflow-hidden flex-1 w-[80%]">
                {skills.map((skill) => (
                    <div key={skill.title} className="flex flex-col py-10 items-center gap-3 border h-full text-center bg-zinc-900 border-zinc-600 rounded-lg px-8">
                        <div className="rounded-full flex items-center justify-center size-16 bg-emerald-600">
                            {skill.icon}
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">{skill.title}</h3>
                            <p className="text-zinc-400">{skill.description}</p>
                        </div>

                        <div className="px-12">
                            <h3 className="text-emerald-500 text-lg">Tools:</h3>
                            <p className="text-sm text-zinc-300">{skill.tools.join(", ")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
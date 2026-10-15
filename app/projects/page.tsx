import ProjectCard from "./_components/project-card"
import { ProjectProps, projects } from "@/lib/projects"

export default function Projects() {

    return (
        <div className="flex flex-col justify-center items-center p-3 md:px-50">
            <div className="my-5 flex-0 text-center w-full md:w-2/3 space-y-4">
                <h1 className="text-2xl font-bold">My Personal and Team Projects</h1>
                <h3 className="text-zinc-400 leading-relaxed">A showcase of my personal and collaborative work.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 overflow-hidden flex-1 w-full md:w-[80%] items-stretch">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard 
                        key={project.id}
                        project={project} 
                    />
                ))}
            </div>
        </div>
    )
}

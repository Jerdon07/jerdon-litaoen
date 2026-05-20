import { Globe } from "lucide-react"

export default function Projects() {
    const projects = [
        {
            title: "Hrvst",
            description: "A Laravel-based inventory management system for a local farm supply store, featuring real-time stock tracking and automated order processing.",
            technologies: ["Laravel", "Vue 3", "InertiaJS", "PostgreSQL"],
            image: "/hrvst.png",
            link: "https://hrvst.free.laravel.cloud/",
            repository: "https://github.com/Cresco-Team/Hrvst-v2",
            icon: "devicon-github-original",
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="my-5 flex-0 text-center w-2/3 space-y-4">
                <div className="text-2xl font-bold">My Works</div>
                <p className="text-zinc-400 leading-relaxed">A collection of projects I've worked on.</p>
            </div>

            <div className="grid grid-cols-3 gap-6 overflow-hidden flex-1 w-[80%]">
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col bg-zinc-900 items-center border border-zinc-800 rounded-xl overflow-hidden">
                        <div className="relative overflow-hidden bg-zinc-900">
                            <img src={ project.image } alt={ project.title } className="w-full h-full object-contain" />
                        </div>

                        <div className="relative p-4">
                            <h3 className="text-lg font-semibold">{ project.title }</h3>
                            <p className="text-sm text-zinc-400">{ project.description }</p>
                            
                            <div className="flex justify-end gap-3">
                                <a href={project.link} target="_blank">
                                    <Globe size={26}/>
                                </a>

                                <a href={project.repository} target="_blank">
                                    <i className={`${project.icon} text-2xl`}></i>
                                </a>
                            </div>

                            <div className="absolute bottom-[-20] left-[-20] w-30 h-15 rounded-tl-full blur-2xl bg-emerald-600"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
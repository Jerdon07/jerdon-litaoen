import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/projects"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {

    return (
        <div className="flex flex-col justify-center items-center px-4">
            <div className="my-5 flex-0 text-center w-full md:w-2/3 space-y-4">
                <div className="text-2xl font-bold">My Works</div>
                <p className="text-zinc-400 leading-relaxed">A collection of projects I've worked on.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden flex-1 w-full md:w-[80%]">
                {projects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id}>
                        <Card className="pt-0 cursor-pointer border">
                            <div className="relative aspect-video bg-black/35">
                                <Image src={project.thumbnail} alt={project.title} fill />
                            </div>

                            <CardHeader>
                                <CardTitle>{ project.title }</CardTitle>
                                <CardDescription>{ project.subtitle }</CardDescription>
                                <CardAction><ArrowRight /></CardAction>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectProps } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
    project: ProjectProps
}

const ProjectCard = ({
    project
}: ProjectCardProps) => (
    <Link
        href={`/projects/${project.id}`}
        key={project.id}
        className="block h-full border rounded as-child"
    >
        <Card className="pt-0 border rounded cursor-pointer h-full as-child">
            <div className="relative aspect-video bg-black/35">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                />

                <Badge className="absolute right-2 bottom-2 bg-card px-2 py-1">
                    {project.badge}
                </Badge>
            </div>

            <CardHeader>
                <CardTitle>{project.title}</CardTitle>

                <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
        </Card>
    </Link>
)

export default ProjectCard
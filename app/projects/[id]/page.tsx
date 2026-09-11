import InsightCard from "@/components/cards/InsightCard"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/lib/projects"
import { Award, Key, Sparkles, Target, TextAlignStart, Type } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProjectSidebar from "./_components/project-sidebar"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export default async function Show({ params }: PageProps) {
    const { id } = await params

    const project = projects.find(
        p => p.id === Number(id)
    )

    if (!project) notFound()

    return (
        <div className="md:mx-12 my-4 font-semibold space-y-6 cursor-default">
            <div className="grid md:grid-cols-3 gap-10">

                {/* Sidebar */}
                <div className="col-span-1 bg-sidebar">
                    <ProjectSidebar project={project} />
                </div>

                {/* Main */}
                <ScrollArea className="rounded md:max-h-[80vh] p-4 border md:col-span-2">
                    <div className="space-y-4 text-foreground/80">

                        {/* Subtitle */}
                        <div className="hover:text-foreground duration-500 cursor-default">
                            <span className="text-xs flex items-center"><Type size={15} className="mr-1" />Subtitle</span>
                            <h3 className="md:text-xl">{ project.subtitle }</h3>
                        </div>

                        <Separator />

                        <div className="hover:text-foreground duration-500 cursor-default">
                            <span className="text-xs flex items-center"><TextAlignStart size={15} className="mr-1" />Description</span>
                            <h5 className="text-xs md:text-sm">{ project.description }</h5>
                        </div>

                        <Separator />

                        <div className="hover:text-foreground duration-500 cursor-default">
                            <span className="text-xs flex items-center"><Target size={15} className="mr-1" />Mission:</span>
                            <p className="text-sm md:text-base">{ project.mission }</p>
                        </div>

                        <Separator />

                        {/* Features */}
                        <div className="text-center space-y-2 hover:text-foreground duration-500 cursor-default">
                            <h5 className="text-sm md:text-2xl flex items-center md:justify-center">
                                <Sparkles className="mr-1 size-4 md:size-6" />
                                Features
                            </h5>

                            <div className="grid md:grid-cols-2 gap-2">
                                { project.features.map((feat) => (
                                    <InsightCard key={feat.title} data={feat} />
                                ))}
                            </div>
                        </div>

                        {project.results && (
                            <>
                                <Separator />
                                <div className="text-center space-y-2 hover:text-foreground duration-500 cursor-default">
                                    <h5 className="text-sm md:text-2xl flex items-center md:justify-center">
                                        <Award className="mr-1 size-4 md:size-6" />
                                        Results
                                    </h5>

                                    <div className="grid md:grid-cols-2 gap-2">
                                        { project.results?.map((result) => (
                                            <InsightCard key={result.title} data={result} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {project.takeaways && (
                            <>
                                <Separator />
                                <div className="text-center space-y-2 hover:text-foreground duration-500 cursor-default">
                                    <h5 className="text-sm md:text-2xl flex items-center md:justify-center">
                                        <Key className="mr-1 size-4 md:size-6" />
                                        Key Takeaways
                                    </h5>

                                    <div className="grid md:grid-cols-2 gap-2">
                                        { project.takeaways?.map((takeaway) => (
                                            <InsightCard key={takeaway.title} data={takeaway} />
                                        ))}
                                    </div>
                                </div>
                                </>
                            )}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
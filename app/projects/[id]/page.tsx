import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"

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

    console.log(project?.id)
    return (
        <div className="mx-12 my-4 font-semibold space-y-6">
            <div className="grid grid-cols-3 gap-10">

                {/* Left */}
                <div className="col-span-1">
                    <Card className="pt-0">
                        <Link href={project!.link} target="_blank" className="relative aspect-video">
                            <Image src={project!.thumbnail} alt={project!.title} fill/>
                        </Link>

                        <CardHeader>
                            <CardTitle>
                                { project?.title }
                            </CardTitle>

                            <CardDescription>
                            <div className="space-x-2">{ project?.stack.map((stack) => (
                                    <Badge key={stack.name} className={`${stack.color}} text-foreground px-1`}>{ stack.name }</Badge>
                                )) }</div>
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <Separator />

                            <div>
                                <span className="text-xs italic">Role:</span>
                                <p>{ project?.role }</p>
                            </div>

                            <div className="flex space-x-4">
                                <div>
                                    <span className="text-xs italic">Year:</span>
                                    <p>{ project?.year }</p>
                                </div>

                                <Separator orientation="vertical" />

                                <div>
                                    <span className="text-xs italic">Timeline:</span>
                                    <p>{ project?.timeline }</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right */}
                <ScrollArea className="max-h-[80vh] p-4 rounded-md border col-span-2">
                    <div className="space-y-4">

                        <div>
                            <span className="text-xs">Subtitle</span>
                            <h3 className="text-xl">{ project?.subtitle }</h3>
                        </div>

                        <div>
                            <span className="text-xs">Description</span>
                            <h5 className="text-md">{ project?.description }</h5>
                        </div>

                        <div>
                            <span className="text-xs">Mission:</span>
                            <p className="text-md">{ project?.mission }</p>
                        </div>

                        {/* Features */}
                        <div className="text-center space-y-2">
                            <h5 className="text-2xl">Features</h5>

                            <div className="grid md:grid-cols-2">
                                { project?.features.map((feat) => (
                                        <Card key={feat.title}>
                                        <CardHeader>
                                            <CardTitle>{ feat.title }</CardTitle>
                                            <CardDescription>{ feat.description }</CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Results */}
                        <div className="text-center space-y-2">
                            <h5 className="text-2xl">Results</h5>

                            <div className="grid md:grid-cols-2">
                                { project?.results.map((result) => (
                                        <Card key={result.title}>
                                        <CardHeader>
                                            <CardTitle>{ result.title }</CardTitle>
                                            <CardDescription>{ result.description }</CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="text-center space-y-2">
                            <h5 className="text-2xl">Key Takeaways</h5>

                            <div className="grid md:grid-cols-2">
                                { project?.takeaways.map((takeaway) => (
                                        <Card key={takeaway.title}>
                                        <CardHeader>
                                            <CardTitle>{ takeaway.title }</CardTitle>
                                            <CardDescription>{ takeaway.description }</CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
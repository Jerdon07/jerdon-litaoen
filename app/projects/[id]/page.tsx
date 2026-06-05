import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/lib/projects"
import { Award, Key, Sparkles, Target, TextAlignStart, Type } from "lucide-react"
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
        <div className="md:mx-12 my-4 font-semibold space-y-6 cursor-default">
            <div className="grid md:grid-cols-3 gap-10">

                {/* Left */}
                <div className="col-span-1">
                    <Card className="pt-0">
                        <Link href={project!.link} target="_blank" className="relative aspect-video overflow-hidden">
                            <Image src={project!.thumbnail} alt={project!.title} fill className="grayscale-50 brightness-75 hover:brightness-100 hover:grayscale-0 transition hover:scale-115 ease-in-out duration-800"/>
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

                            <CardAction>
                                <Link href={project!.github} target="_blank">
                                    <i className="devicon-github-original white text-2xl" />
                                </Link>
                            </CardAction>
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
                <ScrollArea className="md:max-h-[80vh] p-4 border md:col-span-2">
                    <div className="space-y-4 text-foreground/80">

                        <div className="hover:text-foreground duration-500 cursor-default">
                            <span className="text-xs flex items-center"><Type size={15} className="mr-1" />Subtitle</span>
                            <h3 className="md:text-xl">{ project?.subtitle }</h3>
                        </div>

                        <Separator />

                        <div className="hover:text-foreground duration-500 cursor-default">
                            <span className="text-xs flex items-center"><TextAlignStart size={15} className="mr-1" />Description</span>
                            <h5 className="text-xs md:text-md">{ project?.description }</h5>
                        </div>

                        <Separator />

                        <div className="hover:text-foreground duration-500 cursor-default">
                            <span className="text-xs flex items-center"><Target size={15} className="mr-1" />Mission:</span>
                            <p className="text-sm md:text-md">{ project?.mission }</p>
                        </div>

                        <Separator />

                        {/* Features */}
                        <div className="text-center space-y-2 hover:text-foreground duration-500 cursor-default">
                            <h5 className="text-sm md:text-2xl flex items-center md:justify-center">
                                <Sparkles className="mr-1 size-4 md:size-6" />
                                Features
                            </h5>

                            <div className="grid md:grid-cols-2">
                                { project?.features.map((feat) => {
                                    const Icon = feat.icon

                                    return (

                                        <Card key={feat.title} className="gap-1">
                                        <CardHeader className="flex flex-col items-center justify-center">
                                            <div className="size-10 rounded-full bg-emerald-500/50 text-emerald-500 flex items-center justify-center mb-2">
                                                <Icon className="size-5" />
                                            </div>
                                            <CardTitle>{ feat.title }</CardTitle>
                                        </CardHeader>

                                        <CardContent>
                                            <p className="font-normal">{ feat.description }</p>
                                        </CardContent>
                                    </Card>
                                )})}
                            </div>
                        </div>

                        <Separator />

                        {/* Results */}
                        <div className="text-center space-y-2 hover:text-foreground duration-500 cursor-default">
                            <h5 className="text-sm md:text-2xl flex items-center md:justify-center">
                                <Award className="mr-1 size-4 md:size-6" />
                                Results
                            </h5>

                            <div className="grid md:grid-cols-2">
                                { project?.results.map((result) => {
                                    const Icon = result.icon

                                    return(
                                        <Card key={result.title} className="gap-1">
                                        <CardHeader className="flex flex-col items-center justify-center">
                                            <div className="size-10 rounded-full bg-emerald-500/50 text-emerald-500 flex items-center justify-center mb-2">
                                                <Icon className="size-5" />
                                            </div>
                                            <CardTitle>{ result.title }</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="font-normal">{ result.description }</p>
                                        </CardContent>
                                    </Card>
                                )})}
                            </div>
                        </div>

                        <Separator />

                        {/* Key Takeaways */}
                        <div className="text-center space-y-2 hover:text-foreground duration-500 cursor-default">
                            <h5 className="text-sm md:text-2xl flex items-center md:justify-center">
                                <Key className="mr-1 size-4 md:size-6" />
                                Key Takeaways
                            </h5>

                            <div className="grid md:grid-cols-2">
                                { project?.takeaways.map((takeaway) => {
                                    const Icon = takeaway.icon

                                    return(
                                        <Card key={takeaway.title} className="gap-1">
                                        <CardHeader className="flex flex-col items-center justify-center">
                                            <div className="size-10 rounded-full bg-emerald-500/50 text-emerald-500 flex items-center justify-center mb-2">
                                                <Icon className="size-5" />
                                            </div>
                                            <CardTitle>{ takeaway.title }</CardTitle>
                                        </CardHeader>

                                        <CardContent>
                                            <p className="font-normal">{ takeaway.description }</p>
                                        </CardContent>
                                    </Card>
                                )})}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
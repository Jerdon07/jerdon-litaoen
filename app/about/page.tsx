'use client'

import { useEffect, useRef, useState } from "react"
import { sections } from "@/lib/about-me-sections"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ILife } from "@/lib/my-life"
import { ITimeline } from "@/lib/timelines"
import { ISkill } from "@/lib/tech-stacks"

export default function About() {
    const [activeId, setActiveId] = useState<string>('Get to Know Me')

    const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({})

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0,
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        sections.forEach((item) => {
            const element = itemRefs.current[item.title]

            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    })

    const scrollToSection = (id: string) => {
        const element = itemRefs.current[id];
        if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        }
    }

    return (
        <div className="mx-w-2xl mx-auto px-4 py-12">

            <div className="grid grid-cols-4 gap-8 items-start">
                {/* Left */}
                <div className="col-span-3">
                    <ol>
                        {sections.map((section) => (
                            <li key={section.title} id={section.title} ref={(el) => { itemRefs.current[section.title] = el }} className="relative py-3 group scroll-mt-24">
                                <h5 className="text-4xl font-bold">{ section.title }</h5>
                                <div className="pl-4">
                                    <div>
                                        { section.title === 'Get to Know Me' && (
                                            <div>
                                                { section.content.map((life: ILife) => (
                                                    <div key={life.id} className="py-6 space-y-3">
                                                        <h1 className="text-2xl font-semibold">{ life.title }</h1>
                                                        <p className="pl-4 border-l-2">{ life.content }</p>
                                                    </div>
                                                )) }
                                            </div>
                                        ) }

                                        { section.title === 'Achievements and Progress' && (
                                            <ol className="relative my-6 border-l border-gray-700 ml-4 md:ml-10 space-y-12 mr-50">
                                                { section.content.map((timeline: ITimeline) => (
                                                    <li key={timeline.id} className="relative pl-8 md:pl-10 group scroll-mt-24">
                                                        <div className="absolute -left-5.25 top-0 flex h-10 w-20 items-center justify-center overflow-y-visible rounded-full bg-gray-900 border border-gray-700">
                                                            { timeline.year }
                                                        </div>

                                                        <div className="pl-10 transition-all duration-300">
                                                            <div className="mb-3 space-y-3">
                                                                <h3 className="text-lg font-bold">
                                                                    { timeline.title }
                                                                </h3>
                                                                <p>
                                                                    { timeline.content }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )) }
                                            </ol>
                                        ) }

                                        { section.title === 'Tech Skills' && (
                                            <div className="space-y-4 py-6 mr-50">
                                                { section.content.map((skill: ISkill) => {
                                                    const Icon = skill.icon
                                                    return (
                                                        <Card key={skill.id} className="flex flex-row items-center px-10">
                                                            <div className="rounded-full flex items-center justify-center aspect-square size-16 mx-0 bg-emerald-800 text-emerald-400">
                                                                <Icon />
                                                            </div>

                                                            <CardHeader className="w-full flex flex-col justify-center">
                                                                <CardTitle className="text-2xl font-semibold">{ skill.title }</CardTitle>
                                                                <CardDescription className="pl-4">{ skill.description }</CardDescription>
                                                                
                                                                <CardAction className="w-full flex flex-row justify-end">
                                                                { skill.tools.map((tool) => (
                                                                    <Badge key={tool} className="mx-1 px-1 bg-emerald-800">{ tool }</Badge>
                                                                )) }
                                                                </CardAction>
                                                            </CardHeader>
                                                        </Card>
                                                    )
                                                }) }
                                            </div>
                                        ) }
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Right */}
                <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 pl-6 border-l border-emerald-700">
                    <nav className="space-y-1">
                        { sections.map((section) => {
                            const isActive = activeId === section.title

                            return (
                                <button key={section.title} onClick={() => scrollToSection(section.title)} className="w-full text-left block py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer">
                                    <div className={`flex items-center gap-2  ${ isActive ? 'text-gray-300 font-semibold' : 'text-gray-500' }`}>
                                        <span className="h-3 w-0.5 rounded-full transition-all duration-200" />

                                        {section.title}
                                    </div>
                                </button>
                            )
                        }) }
                    </nav>
                </aside>
            </div>
        </div>
    )
}

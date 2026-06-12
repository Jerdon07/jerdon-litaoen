'use client'

import { useEffect, useRef, useState } from "react"
import { sections } from "@/lib/about-me-sections"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ILife } from "@/lib/my-life"
import { ITimeline } from "@/lib/timelines"
import { ISkill } from "@/lib/tech-stacks"
import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item"

export default function About() {
    const [activeId, setActiveId] = useState<string>('Get to Know Me')
    const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({})
    const mobileNavRef = useRef<HTMLDivElement>(null)

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
    }, [])

    useEffect(() => {
        if (!mobileNavRef.current) return
        const activeBtn = mobileNavRef.current.querySelector<HTMLElement>('[data-active="true"]')
        activeBtn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }, [activeId])

    const scrollToSection = (id: string) => {
        const element = itemRefs.current[id]
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">

            <div
                ref={mobileNavRef}
                className="lg:hidden sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-gray-800 mb-8 flex gap-2 overflow-x-auto py-3 px-1"
            >
                {sections.map((section) => {
                    const isActive = activeId === section.title
                    return (
                        <button
                            key={section.title}
                            data-active={isActive}
                            onClick={() => scrollToSection(section.title)}
                            className={`shrink-0 text-sm px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                                isActive
                                    ? 'bg-emerald-800 text-emerald-200 font-semibold'
                                    : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {section.title}
                        </button>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                {/* Content */}
                <div className="col-span-1 lg:col-span-3">
                    <ol>
                        {sections.map((section) => (
                            <li
                                key={section.title}
                                id={section.title}
                                ref={(el) => { itemRefs.current[section.title] = el }}
                                className="relative py-3 scroll-mt-24"
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold">{section.title}</h2>

                                <div className="pl-2 sm:pl-4">

                                    {section.title === 'Get to Know Me' && (
                                        <div>
                                            {section.content.map((life: ILife) => (
                                                <div key={life.id} className="py-6 space-y-3">
                                                    <h3 className="text-xl sm:text-2xl font-semibold">{life.title}</h3>
                                                    <p className="pl-4 border-l-2">{life.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.title === 'Achievements and Progress' && (
                                        <ol className="relative my-6 border-l border-gray-700 ml-4 sm:ml-8 space-y-12">
                                            {section.content.map((timeline: ITimeline) => (
                                                <li key={timeline.id} className="relative pl-8 sm:pl-12 scroll-mt-24">
                                                    <div className="absolute -left-[42px] top-0 flex h-10 w-20 items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-sm">
                                                        {timeline.year}
                                                    </div>

                                                    <div className="transition-all duration-300">
                                                        <div className="mb-3 space-y-3">
                                                            <h3 className="text-lg font-bold">{timeline.title}</h3>
                                                            <p>{timeline.content}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    )}

                                    {section.title === 'Tech Tools' && (
                                        <div className="space-y-4 py-6">
                                            {section.content.map((skill: ISkill) => {
                                                const Icon = skill.icon
                                                return (
                                                    <Item variant={'muted'} key={skill.title}>
                                                        <ItemMedia variant={'icon'}>
                                                            <Icon />
                                                        </ItemMedia>

                                                        <ItemContent className="overflow-hidden">
                                                            <ItemTitle>{ skill.title }</ItemTitle>
                                                            <ItemDescription>{ skill.description }</ItemDescription>
                                                            <div className="gap-2 w-fill pl-30 flex justify-end flex-wrap">
                                                                { skill.tools.map((tool) => (
                                                                    <Badge key={tool.name} className={`px-2 bg-emerald-800 ${ tool.color }`}>{ tool.name }</Badge>
                                                                )) }
                                                            </div>
                                                        </ItemContent>
                                                    </Item>
                                                )
                                            })}
                                        </div>
                                    )}

                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 pl-6 border-l border-emerald-700">
                    <nav className="space-y-1">
                        {sections.map((section) => {
                            const isActive = activeId === section.title
                            return (
                                <button
                                    key={section.title}
                                    onClick={() => scrollToSection(section.title)}
                                    className="w-full text-left py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer"
                                >
                                    <div className={`flex items-center gap-2 ${isActive ? 'text-gray-300 font-semibold' : 'text-gray-500 hover:text-gray-400'}`}>
                                        <span className={`h-3 w-0.5 rounded-full transition-all duration-200 ${isActive ? 'bg-emerald-400' : 'bg-transparent'}`} />
                                        {section.title}
                                    </div>
                                </button>
                            )
                        })}
                    </nav>
                </aside>
            </div>
        </div>
    )
}
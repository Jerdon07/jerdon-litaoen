'use client'

import { useEffect, useRef, useState } from "react"
import { AboutSectionProps, sections } from "@/lib/about"
import { Badge } from "@/components/ui/badge"
import { GeToKnowMeProps } from "@/lib/about/sections/get-to-know-me"
import { TimelineProps } from "@/lib/about/sections/timeline"
import { ToolProps } from "@/lib/about/sections/tools"
import { CertificateProps } from '@/lib/about/sections/certificates'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import useActiveSection from "@/src/hooks/use-active-section"
import { certificates } from "@/lib/about/sections/certificates"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import useMobileNavigation from "@/src/hooks/use-mobile-navigation"
import { ContactProps } from "@/lib/about/sections/contact"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AboutProps {
    sections: {
        title: string
        content: any
    }[]
}

export default function About() {
    const {activeId, itemRefs, scrollToSection} = useActiveSection(sections)
    const mobileNav = useMobileNavigation( activeId )

    /* Certificate */
    const [ selectedCertificate, setSelectedCertificate ] = useState<CertificateProps | null>(null)
    const handleOpenCertificate = (certificateId: number) => {
        const certificate = certificates.find((cert) => cert.id === certificateId)
        setSelectedCertificate(certificate ?? null)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            <div
                ref={mobileNav}
                className="lg:hidden sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border mb-8 flex gap-2 overflow-x-auto py-3 px-1"
            >
                {sections.map((section: AboutSectionProps) => {
                    const isActive = activeId === section.title
                    return (
                        <button
                            key={section.title}
                            data-active={isActive}
                            onClick={() => scrollToSection(section.title)}
                            className={`shrink-0 text-sm px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                                isActive
                                    ? 'bg-primary text-primary-foreground font-semibold'
                                    : 'text-muted-foreground hover:text-muted'
                            }`}
                        >
                            {section.title}
                        </button>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Content */}
                <div className="col-span-1 lg:col-span-9">
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
                                            {section.content.map((life: GeToKnowMeProps) => (
                                                <div key={life.id} className="py-6 space-y-3">
                                                    <h3 className="text-xl sm:text-2xl font-semibold">{life.title}</h3>
                                                    <p className="pl-4 border-l-2">{life.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.title === 'Achievements and Progress' && (
                                        <ol className="relative my-6 ml-4 sm:ml-8 space-y-12">
                                            {section.content.map((timeline: TimelineProps) => (
                                                <li key={timeline.id} className="relative pl-8 sm:pl-12 scroll-mt-24">
                                                    <div className="absolute -left-10.5 top-0 flex h-10 w-20 items-center justify-center rounded-full bg-muted border text-sm">
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

                                    {section.title === 'Certificates' && (
                                        <div className="space-y-4 py-6">
                                            {section.content.map((certificate: CertificateProps) => {
                                                return (
                                                    <Item variant="outline" key={certificate.id}>
                                                        <ItemContent>
                                                            <ItemTitle>
                                                                {certificate.title} 
                                                                <Badge variant="outline">
                                                                    {certificate.abbreviation}
                                                                </Badge>
                                                            </ItemTitle>
                                                            <ItemDescription>{certificate.authority}</ItemDescription>
                                                        </ItemContent>
                                                        <ItemActions>
                                                            <Button variant="link">
                                                                <a 
                                                                    href={certificate.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    url
                                                                </a>
                                                            </Button>
                                                            <Button 
                                                                onClick={() => handleOpenCertificate(certificate.id)}
                                                                variant="secondary"
                                                            >
                                                                Certificate
                                                            </Button>
                                                        </ItemActions>
                                                    </Item>
                                                )
                                            })}
                                        </div>
                                    )}

                                    {section.title === 'Tech Tools' && (
                                        <div className="space-y-4 py-6">
                                            {section.content.map((skill: ToolProps) => {
                                                const Icon = skill.icon
                                                return (
                                                    <Card key={skill.id}>
                                                        <CardHeader>
                                                            <CardTitle className="flex items-center gap-3">
                                                                <Icon className="size-5 shrink-0" />
                                                                {skill.title}
                                                            </CardTitle>
                                                            <CardDescription>{skill.description}</CardDescription>
                                                        </CardHeader>

                                                        <CardContent className="flex flex-wrap gap-2">
                                                            {skill.tools.map((tool) => (
                                                                <Badge
                                                                    key={tool.name}
                                                                    title={tool.level}
                                                                    className={cn(
                                                                        tool.color,
                                                                        "px-2 py-1",
                                                                        tool.level === "learning" &&
                                                                            "opacity-45 border border-dashed border-current"
                                                                    )}
                                                                >
                                                                    {tool.name}
                                                                </Badge>
                                                            ))}
                                                        </CardContent>
                                                    </Card>
                                                )
                                            })}
                                        </div>
                                    )}

                                    {section.title === "Contact Me" && (
                                        <div>
                                            {section.content.map((contact: ContactProps) => (
                                                <Button 
                                                    key={contact.platform}
                                                    variant={'link'}
                                                >
                                                    <Link href={contact.link} target="_blank">
                                                        <i className={`${contact.iconClass} text-2xl`} />
                                                        {contact.platform}
                                                    </Link>
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 pl-6 border-l border-primary">
                    <nav className="space-y-1">
                        {sections.map((section) => {
                            const isActive = activeId === section.title
                            return (
                                <button
                                    key={section.title}
                                    onClick={() => scrollToSection(section.title)}
                                    className="w-full text-left py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer"
                                >
                                    <div className={`flex items-center gap-2 ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground/40 hover:text-muted-foreground'}`}>
                                        <span className={`h-3 w-0.5 rounded-full transition-all duration-200 ${isActive ? 'bg-primary' : 'bg-transparent'}`} />
                                        {section.title}
                                    </div>
                                </button>
                            )
                        })}
                    </nav>
                </aside>
            </div>

            <Dialog 
                open={!!selectedCertificate}
                onOpenChange={(open) => !open && setSelectedCertificate(null)}
            >
                <DialogContent>
                    <DialogTitle className="sr-only">
                        {selectedCertificate?.title}
                    </DialogTitle>
                    <img 
                        src={selectedCertificate?.image} alt="" />
                </DialogContent>
            </Dialog>
        </div>
    )
}
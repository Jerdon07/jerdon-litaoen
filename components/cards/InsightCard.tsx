'use client'

import { getIcon } from "@/lib/icon-map"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface InsightCardProps {
    data: {
        title: string
        description: string
        icon: string
    }
}

export default function InsightCard({ data }: InsightCardProps) {
    const Icon = getIcon(data.icon)

    return (
        <Card className="gap-1 py-3">
            <CardHeader className="px-2 flex flex-col items-center justify-center">
                <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2">
                    <Icon className="size-5" />
                </div>

                <CardTitle>{ data.title }</CardTitle>
            </CardHeader>

            <CardContent className="px-2">
                <p className="text-xs md:text-mdfont-normal">
                    { data.description }
                </p>
            </CardContent>
        </Card>
    )
}
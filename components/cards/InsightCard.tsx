import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface InsightCardProps {
    data: {
        title: string
        description: string
        icon: React.ComponentType<{ className?: string }> // Proper type for Lucide Icons
    }
}

export default async function InsightCard({ data }: InsightCardProps) {
    const { title, description, icon: IconComponent } = data

    return (
        <Card className="gap-1 py-3">
            <CardHeader className="px-2 flex flex-col items-center justify-center">
                <div className="size-10 rounded-full bg-emerald-500/50 text-emerald-500 flex items-center justify-center mb-2">
                    <IconComponent className="size-5" />
                </div>

                <CardTitle>{ title }</CardTitle>
            </CardHeader>

            <CardContent className="px-2">
                <p className="text-xs md:text-mdfont-normal">
                    { description }
                </p>
            </CardContent>
        </Card>
    )
}
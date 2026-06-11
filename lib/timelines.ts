import { Compass, GitMerge, LucideIcon, Sparkles } from "lucide-react"

interface TimelineItem {
    id: string
    icon: LucideIcon
    title: string
    subtitle: string
    content: string[]
}

export const timelineData: TimelineItem[] = [
        {
            id: "beyond-codebase",
            icon: Compass,
            title: "Beyond the Codebase",
            subtitle: "My Drive & Philosophy",
            content: [
                "I thrive at the intersection of robust backend architecture and real-world impact. For me, full-stack development isn't just about writing code—it's about building scalable digital solutions that solve tangible problems for communities and stakeholders every single morning.",

                "Great software requires balancing technical excellence with real-world constraints. I view teamwork as a collaborative exercise in navigating stakeholder feedback, architectural trade-offs, and project goals to deliver reliable, maintainable systems."
            ]
        }, {
            id: "operating-principles",
            icon: GitMerge,
            title: "My Operating Principles",
            subtitle: "Engineering Standards",
            content: [
                "Predictable architectural patterns (Thin Controllers, Service/Action layers",

                "Comprehensive automated testing and comprehensive documentation",

                "Performance-driven frontend components paired with tight type safety",
            ]
        }, {
            id: "off-screen",
            icon: Sparkles,
            title: "Off-Screen",
            subtitle: "Grounded Hobbies",
            content: [
                "When I step away from the IDE, I focus on tactile, deliberate crafts. Whether that is architecting meticulous, highly organized miniature survival worlds block-by-block, or experimenting in the kitchen optimizing production ratios for premium, creamy frozen desserts, I love the patience of building things from scratch."
            ]
        },
    ];
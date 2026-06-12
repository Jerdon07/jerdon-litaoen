
export interface ITimeline {
    id: number
    year: string
    title: string
    content: string
}

export const timelineData: ITimeline[] = [
    {
        id: 1,
        year: '2022-2023',
        title: 'Academic Foundations',
        content: 'Started my IT degree at the University of the Cordilleras. Built core programming fundamentals, covering Data Structures & Algorithms in Java, Object-Oriented Programming in Python, and System Analysis & Design.'
    }, {
        id: 2,
        year: '2023-2024',
        title: 'Transition to Web Dev',
        content: 'Shifted focus to web fundamentals. Spent the year mastering CSS layouts, vanilla JavaScript DOM manipulation, and building basic backend CRUD functionality using PHP and SQL.'
    }, {
        id: 3,
        year: '2024-2025',
        title: 'The Backend Pivot',
        content: 'Introduced to Laravel in a major subject while kicking off my first capstone project. Since the framework was brand new to me, I built the capstone without it. The project ultimately failed—a tough setback, but one that clearly demonstrated the risks of building complex applications without a structured framework foundation.'
    }, {
        id: 4,
        year: '2025-2026',
        title: 'Present: Capstone & Industry Experience',
        content: 'Applied the lessons from the previous year to my final capstone project, this time building with a solid framework foundation and clean architecture. Concurrently stepped into a real-world development, working as a Project Manager and Quality Assurance intern at IOL Inc.'
    },
];
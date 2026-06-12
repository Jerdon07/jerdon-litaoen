
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
            title: 'University of the Cordilleras',
            content: 'Where I step in the University. Learned the fundamentals of programming and Data Structures & Algorithms with Java, Object-oriented programming with Python, System Analysis & Design'
        }, {
            id: 2,
            year: '2023-2024',
            title: "Beginning of Web Development",
            content: 'Focused on learning CSS for styling, JavaScript for DOM manipulation, PHP for basic CRUD, introduction to SQL'
        }, {
            id: 3,
            year: '2024-2025',
            title: "Introduction to Backend Framework",
            content: "This is like a roller coaster ride for me. Laravel was introduced, and so was my first capstone project. Did my very best to pass the project, but still fail. Didn't really mind the framework since I'm too focused on the project but it ended up wasting my half year. I shall return, Laravel!"
        }, {
            id: 4,
            year: '2025-2026',
            title: "Present",
            content: "This is where things get sky-rocketed. Doing my second and last shot in capstone project. I got the privilege to word as a Project Manager and Quality Assurance intern in IOL Inc."
        },
    ];
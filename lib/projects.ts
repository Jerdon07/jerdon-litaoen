
export const projects = [
    {
        id: 1,
        title: 'Hrvst',
        subtitle: 'Connecting Farmers & Dealers through a Real-Time Aggricultural Marketplace.',
        description: 'A specialized agriculture logistics and marketplace platform designed to streamline crop trading within the Cordillera region. Built to replace volatile, word-of-mouth scheduling, the platform synchronizes trading activities at the La Trinidad Vegetable Trading Post. By providing a symmetrical, single-parent posting system, Hrvst allows both farmers to broadcast upcoming supply and dealers to log current demand, stabilizing local supply chains through data-driven transparency.',
        year: 2026,
        thumbnail: '/hrvst.PeG',
        stack: [
            {
                name: 'Laravel',
                color: 'bg-orange-500/50 text-orange-500'
            }, {
                 name: 'Vue',
                 color: 'bg-emerald-500/50 text-emerald-500'
            }, {
                name: 'Inertia',
                color: 'bg-purple-500/50 text-purple-500'
            }, {
                name: 'PostgreSQL',
                color: 'bg-indigo-500/50 text-indigo-500'
            }
        ],
        mission: 'To empower the Cordillera agricultural community by replacing unpredictable trading habits with predictive, rolling lifecycle data—ensuring fair market visibility for farmers and reliable sourcing for dealers.',
        role: ['Solo Developer'],
        timeline: ['6 Months Capstone Project'],
        link: 'https://hrvst.free.laravel.cloud',
        github: 'https://github.com/Cresco-Team/Hrvst-v2',
        features: [
            {
                title: 'Symmetrical Unified Marketplace',
                description: 'Utilizes a shared parent posting structure that handles both supply and demand symmetrically, ensuring a balanced, single-source-of-truth architecture.'
            }, {
                title: 'Rolling Yield Forecasts',
                description: 'Replaces restrictive static harvest dates with a flexible, monthly rolling lifecycle model that adapts seamlessly to the natural unpredictability of agricultural yields.'
            }, {
                title: 'Geospatial Farmer Clustering',
                description: 'Integrates interactive mapping and marker clustering to map out farmer locations, optimizing regional logistics and pick-up routing for dealers.'
            }, {
                title: 'Real-Time Price Management',
                description: 'Provides immediate visibility into shifting market rates at the La Trinidad Trading Post, allowing users to make informed, data-driven pricing decisions.'
            }
        ],
        results: [
            {
                title: 'Architectural Efficiency',
                description: 'Designed and deployed a highly scalable decoupled architecture using a lean Service/Action pattern in Laravel 13, keeping controllers exceptionally thin and maintainable.'
            }, {
                title: 'Fluid User Experience',
                description: 'Built a high-performance, SPA-like frontend using Vue 3 (Composition API) and Tailwind CSS v4, bound seamlessly to the backend via Inertia.js v2 for rapid data synchronization without complex state management.'
            }, {
                title: 'Optimized Spatial Data',
                description: 'Handled heavy regional coordinate datasets efficiently on the frontend using Leaflet.js and marker clustering, preventing UI lag during map interactions.'
            }
        ],
        takeaways: [
            {
                title: 'Software Must Flex for Real Life',
                description: 'Shifting from strict static harvest deadlines to a monthly forecast model proved that software architecture must bend to real-world operational realities—like weather and farming cycles—rather than forcing users into rigid digital boxes.'
            }, {
                title: 'Domain Logic Belongs in Actions',
                description: 'Keeping the backend maintainable over a long development cycle heavily depended on isolating business logic into single-responsibility Action layers, proving that strict architectural patterns pay off as project scope scales.'
            }, {
                title: "State Sharing Doesn't Need Over-Engineering",
                description: 'Leveraging the Inertia.js bridge allowed for rapid data flow between Laravel and Vue 3 devtools without the overhead of managing a separate REST API or heavy global frontend state stores.'
            }
        ],

    }
]
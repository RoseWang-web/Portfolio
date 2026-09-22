const projects = [
    {
        id: 1,
        title: "Santa Cloude's database",
        description: "A database project that manages Santa's gift inventory and delivery routes.",
        image: "projects/Santa_Cloude_project.png",
        tags: ["Firebase", "Web design", "Project Management"],
        demoUrl: "#",
        githubUrl: "https://github.com/RoseWang-web/Santa_Workshop"
    },
    {
        id: 2,
        title: "English Slang",
        description: "An app that helps users learn and understand variety English slang terms through flashcards.",
        image: "projects/English_Slang_Project.png",
        tags: ["App", "Expo", "Node.js"],
        demoUrl: "#",
        githubUrl: "https://github.com/RoseWang-web/English_Slang"
    },
    {
        id: 3,
        title: "Sales Dashboard",
        description: "A governed sales analytics dashboard on Databricks with role-based access, audit logging, and natural-language-to-SQL search powered by OpenAI.",
        award: "🏆 2nd Place – HackUSU",
        image: "projects/Sales_Dashboard.png",
        tags: ["Databricks", "OpenAI", "Streamlit", "Plotly", "SQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Ash-Uchida/sales-dashboard-factory"
    }
]
export const ProjectSection = ({ title, description, link }) => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    here are some of my projects that I have worked on. I hope you like them and find them interesting. If you want to see more, please check out my GitHub profile.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                ></img>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="h-7 mb-2">
                                    {project.award && (
                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                                            {project.award}
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagKey) => (
                                        <span
                                            key={tagKey}
                                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    )
}
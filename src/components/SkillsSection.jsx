const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    },
    {
        title: "Frameworks",
        skills: ["React", "Next.js", "Flask", "Streamlit", "React Native"],
    },
    {
        title: "Data & Cloud",
        skills: ["Databricks", "PostgreSQL", "AWS", "SQL"],
    },
    {
        title: "Engineering",
        skills: [
            "REST APIs",
            "Distributed Systems",
            "Data Pipelines",
            "Automated Testing",
            "CI/CD",
        ],
    },
    {
        title: "Tools",
        skills: ["Git/GitHub", "Dynatrace", "Splunk", "Postman", "Bruno", "Selenium"],
    },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Technologies and tools I use to build, ship, and debug software —
                    from frontend interfaces to backend systems and data pipelines.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <h3 className="font-semibold text-lg mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillKey) => (
                                    <span
                                        key={skillKey}
                                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

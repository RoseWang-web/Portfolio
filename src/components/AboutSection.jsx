export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 items-center relative">
                    <div className="space-y-6">
                        <h3>Curious Engineer Who Loves Solving Real Problems</h3>

                        <p className="text-muted-foreground">
                            I’m Rose, a Computer Science student at Brigham Young University–Idaho and an aspiring software engineer.
                        </p>

                        <p className="text-muted-foreground">
                            My internships gave me hands-on experience with backend systems, APIs, data pipelines, and frontend apps, and I especially enjoy debugging and turning ideas into something people can actually use.
                        </p>

                        <p className="text-muted-foreground">
                            I learn best by building, so I’m always picking up new technologies through production work and personal projects alike.
                        </p>

                        <p className="text-muted-foreground">
                            Outside of coding, I enjoy traveling, trying new foods, and spending time outdoors — and I’m currently looking for opportunities to keep learning and grow alongside other engineers.
                        </p>

                        <p className="text-muted-foreground font-medium">
                            Currently: 🎓 CS Student → 💻 Software Engineer → 🌱 Always Learning
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
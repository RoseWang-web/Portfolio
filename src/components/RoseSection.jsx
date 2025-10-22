export const RoseSection = () => {
    return (
        <section id="rose"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >

            <div className="justify-center container max-w-4xl mx-auto text-center z-10">

                <div className="space-y-6"></div>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rose</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Wang</span>
                </h1>
                <p className="text-lg md-text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Hi! Friend, welcome to my universe!
                    Hope we can become a good Interstellar Alliance in Software World!
                    See you soon, my friend!
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
                <img
                    src="/src/components/Rose-image.jpg"
                    alt="Rose picture"

                    className="mt-8 mx-auto w-48 md:w-64 opacity-20 pointer-events-none select-none block"
                ></img>
            </div>

        </section>
    )
}
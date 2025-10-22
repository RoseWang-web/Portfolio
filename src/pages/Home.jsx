import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { RoseSection } from "../components/RoseSection";
import { AboutSection } from "../components/AboutSection";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <p>Hello, world!</p>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}

            <Navbar />

            {/* Main Content */}
            <main>
                <RoseSection />
                <AboutSection />
            </main>


            {/* Footer */}

        </div>
    );
}
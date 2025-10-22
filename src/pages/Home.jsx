import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { RoseSection } from "../components/RoseSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

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
                <ContactSection />
            </main>


            {/* Footer */}

        </div>
    );
}
import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "../components/StarBackground";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <p>Hello, world!</p>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}

            <navBar />

            {/* Main Content */}


            {/* Footer */}

        </div>
    );
}
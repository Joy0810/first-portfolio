import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />
            <main className="pt-20">
                <ProjectsSection />
            </main>
            <Footer />
        </div>
    );
}

import AntigravityBackground from "@/components/AntigravityBackground";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden selection:bg-purple-500/30">
            <Navbar />
            <AntigravityBackground />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />

            {/* Simple Footer */}
            <footer className="relative z-10 w-full py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Bristin Biju.
                </p>
            </footer>
        </main>
    );
}

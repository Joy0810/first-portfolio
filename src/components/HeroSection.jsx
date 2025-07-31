import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return <section 
    id="hero"
    className="realtive min-h-screen flex flex-col items-center justify-center px-4"
  >
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                <span className="opacity-0 animate-fade-in">Hey, </span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-1">this is </span>
                <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Joy</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground 
                max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                I'm a highly motivated engineering student with a strong interest in Web Development,
                Web3 and AI. I love building projects and experimenting stuff.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    View Projects
                </a>
            </div>

        </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform 
        -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-foreground text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="w-5 h-5 mt-2 text-primary animate-bounce" />
    </div>
  </section>
}
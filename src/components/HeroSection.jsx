import { ArrowDown } from "lucide-react"
import profilePic from "../assets/image.png"

export const HeroSection = () => {
  return <section 
    id="hero"
    className="realtive min-h-screen flex flex-col items-center justify-center px-4"
  >
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            {/* Profile Picture */}
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-primary/20 p-1 mb-8 opacity-0 animate-fade-in shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="L Joy Nirantar Profile Picture" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                <span className="opacity-0 animate-fade-in">Hey, this is</span>
                <br />
                <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Joy</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground 
                max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                I'm an AI undergraduate and full-stack engineer who builds backend systems, ML pipelines, and AI-augmented developer workflows — from production ERP platforms to computer vision on satellite imagery.
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

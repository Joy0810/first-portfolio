import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card realtive border-t border-border 
        mt-12 pt-8 flex flex-wrap jistify-between items-center">
        <div className="flex gap-4 justify-center items-center">
            <p className="text-sm text-muted-foreground"
            >
                &copy; {new Date().getFullYear()} Made by Joy
            </p>
            
            <a 
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
            >
                <ArrowUp/>
            </a>
        </div>
    </footer>
  )
}
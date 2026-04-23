import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
]

export const Navbar = () => {

    const [isScrolled, SetIsScrolled] = useState(false);
    const [isMenuOpen,setIsMenuOpen]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
            SetIsScrolled(window.screenY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return <nav
        className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
    >
        <div className="flex container items-center justify-between">
            <a
                className="text-xl font-bold text-primary flex items-center"
                href="#hero"
            >
                <span className="realtive z-10">
                    <span className="text-glow text-foreground">My</span> Portfolio
                </span>
            </a>

            {/* For desktop */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <NavLink
                        key={key}
                        to={item.href}
                        className={({ isActive }) => cn(
                            "text-sm font-medium transition-colors duration-300",
                            isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                        )}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <button
                onClick={()=>setIsMenuOpen(c=>!c)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen?<X/>:<Menu/>}
            </button>

            {/* For mobile */}
            <div className={cn("fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <NavLink
                            key={key}
                            to={item.href}
                            className={({ isActive }) => cn(
                                "transition-colors duration-300",
                                isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                            )}
                            onClick={()=>setIsMenuOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>

        </div>
    </nav>
}
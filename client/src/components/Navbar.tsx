import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location !== "/") {
      // If not on home page, let the Link handle navigation first
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/images/logo.png" alt="BridgeX Logo" className="h-12 w-auto object-contain" />
          <span className="font-display font-bold text-3xl tracking-tight text-foreground">
            Bridge<span className="text-primary">X</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("/#")) {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }
              }}
              className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            Get the App
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/#")) {
                        e.preventDefault();
                        scrollToSection(link.href.substring(1));
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/40"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <Button className="w-full rounded-full py-6 text-lg font-semibold">
                Download App
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

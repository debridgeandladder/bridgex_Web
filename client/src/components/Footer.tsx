import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="BridgeX Logo" className="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                Bridge<span className="text-primary">X</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Connecting you with verified service providers across Nigeria. Your bridge to trusted services, anytime, anywhere.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-semibold text-foreground">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="/#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</a></li>
              <li><a href="/#how-it-works" className="text-muted-foreground hover:text-primary text-sm transition-colors">How it Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-semibold text-foreground">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Provider Agreement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">User Agreement</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-semibold text-foreground">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:hello@bridgexng.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">hello@bridgexng.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">+234 800 BRIDGE X</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} BridgeX Nigeria. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground/60">Designed for Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

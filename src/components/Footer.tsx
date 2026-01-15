import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Story", href: "/#ourstory" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Amor VIP Concierge" className="h-14 mb-4" />
            <p className="text-foreground/50 text-sm leading-relaxed">
              Your premier luxury concierge service in Marbella, Spain. 
              Creating unforgettable experiences since 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium mb-4 tracking-wider uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-foreground/50 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-foreground font-medium mb-4 tracking-wider uppercase text-sm">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary text-foreground/50 hover:text-primary transition-all duration-300 rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary text-foreground/50 hover:text-primary transition-all duration-300 rounded-full"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:hello@amorvipconcierge.com"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary text-foreground/50 hover:text-primary transition-all duration-300 rounded-full"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-foreground/50 text-sm">
              Marbella, Málaga, Spain
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Amor VIP Concierge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/40 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/40 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

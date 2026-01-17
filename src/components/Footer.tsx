import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-round.png";

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
              Your luxury concierge service in Marbella, Spain. 
              Creating unforgettable experiences since 2023.
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

          {/* Contact Us */}
          <div>
            <h4 className="text-foreground font-medium mb-4 tracking-wider uppercase text-sm">
              Contact Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://wa.me/+34600250154"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary text-foreground/50 hover:text-primary transition-all duration-300 rounded-full"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/amorvipconcierge?igsh=cHJlbzZ5bG16bDg5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary text-foreground/50 hover:text-primary transition-all duration-300 rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@amorvip?_r=1&_t=ZN-935lXc6ZCq6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary text-foreground/50 hover:text-primary transition-all duration-300 rounded-full"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-round.png";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "Our Story" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If on home page, scroll to section
    if (isHomePage && href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.02 }}>
          <Link to="/">
            <img src={logo} alt="Amor VIP Concierge" className="h-12 md:h-14" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              {isHomePage ? (
                <motion.a
                  href={link.href}
                  className="relative text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300 group"
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ) : (
                <Link
                  to={link.href}
                  className="relative text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border"
          >
            <ul className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {isHomePage ? (
                    <a
                      href={link.href}
                      className="block text-lg tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-lg tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
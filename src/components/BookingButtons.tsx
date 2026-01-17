import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34600250154?text=Hi%2C%20I%20would%20like%20to%20make%20a%20booking";
const EMAIL = "Amorvipconcierge@gmail.com";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Booking%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20make%20a%20booking.`;

interface BookingButtonsProps {
  variant?: "hero" | "cta" | "compact";
  className?: string;
}

export default function BookingButtons({ variant = "cta", className = "" }: BookingButtonsProps) {
  const primaryButtonClass = variant === "hero" 
    ? "group relative px-6 py-4 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:scale-105 rounded-lg flex items-center gap-2"
    : variant === "compact"
    ? "group inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase text-xs rounded-md transition-all duration-300 cursor-pointer hover:scale-105 hover:brightness-110 hover:[box-shadow:var(--shadow-lime)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    : "inline-flex items-center gap-2 px-6 py-3 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-lg hover:scale-105 hover:brightness-110 hover:shadow-[0_0_15px_2px_rgba(163,230,53,0.4)] transition-all duration-300";

  const secondaryButtonClass = variant === "hero"
    ? "px-6 py-4 border border-foreground/30 text-foreground font-medium tracking-wider uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300 rounded-lg flex items-center gap-2"
    : variant === "compact"
    ? "group inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-primary/30 text-foreground font-medium tracking-wider uppercase text-xs rounded-md transition-all duration-300 cursor-pointer hover:border-primary hover:text-primary hover:[box-shadow:var(--shadow-lime)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    : "inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground font-medium tracking-wider uppercase text-sm rounded-lg hover:border-primary hover:text-primary transition-all duration-300";

  const iconSize = variant === "compact" ? "w-3 h-3" : "w-4 h-4";

  const whatsappLabel = variant === "compact" ? "WhatsApp" : "Book or Schedule a Call With WhatsApp";
  const emailLabel = variant === "compact" ? "Email" : "Book With Email";

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 ${className}`}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={primaryButtonClass}
      >
        <MessageCircle className={iconSize} />
        <span>{whatsappLabel}</span>
      </a>
      <a
        href={GMAIL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={secondaryButtonClass}
      >
        <Mail className={iconSize} />
        <span>{emailLabel}</span>
      </a>
    </div>
  );
}

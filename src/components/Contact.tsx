import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipientEmail = "Amorvipconcierge@gmail.com";
    const subject = `Booking Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Preferred Date: ${formData.date || "Not specified"}

Message:
${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, "_blank");
    
    toast({
      title: "Opening Email",
      description: "Complete sending your message in the new tab.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary tracking-[0.4em] uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Start Your <span className="text-gradient-lime">Journey</span>
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed mb-10">
              Ready to experience Marbella like never before? Contact us to discuss your 
              perfect getaway. Our team is available 24/7 to assist with your inquiries.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-foreground/60">Marbella, Málaga, Spain</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <a href="mailto:Amorvipconcierge@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                    Amorvipconcierge@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <a href="tel:+34600250154" className="text-foreground/60 hover:text-primary transition-colors">
                    +34 600 250 154
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-2">
                <p className="text-foreground font-medium mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://wa.me/34600250154" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-full transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/amorvipconcierge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-full transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a 
                    href="https://tiktok.com/@amorvipconcierge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-full transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Write here..."
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Write here..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-foreground/60 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Write here..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Write here..."
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm text-foreground/60 mb-2">
                  Describe what you are looking for, with dates and party size
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Write here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform rounded-lg"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

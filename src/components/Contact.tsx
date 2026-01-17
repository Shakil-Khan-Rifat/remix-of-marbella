import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
                    placeholder="John"
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
                    placeholder="Doe"
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
                  placeholder="john@example.com"
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
                    placeholder="+34 XXX XXX XXX"
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
                  placeholder="Tell us about your dream Marbella experience..."
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

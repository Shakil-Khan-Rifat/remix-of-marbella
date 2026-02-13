import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const packages = [
  {
    name: "Silver Package",
    price: "€4,500",
    tagline: "A seamless introduction to luxury with VIP essentials for an unforgettable Marbella experience",
    features: [
      "VIP Airport Transfer (Mercedes V-Class, up to 7 people)",
      "Luxury Car Hire (24 hours, refundable deposit required) – Audi RS6, M4, Porsche 911, or similar",
      "4-Hour Private Yacht Charter (includes captain, fuel, champagne & snacks, max 11 people)",
      "Jet Ski Experience (2 jet skis, 1 hour, max 4 people)",
      "Golf Day (for 4 people, select courses)",
      "Pool & Nightclub VIP Booking Service",
    ],
  },
  {
    name: "Gold Package",
    price: "€9,400",
    tagline: "An elevated VIP experience with premium access to Marbella's most exclusive services",
    features: [
      "VIP Airport Transfer (Mercedes V-Class, up to 7 people)",
      "Luxury Car Hire (48 hours, refundable deposit required) – G-Wagon, McLaren, Audi RSQ8, or similar",
      "6-Hour Private Yacht Charter (includes captain, fuel, champagne & gourmet snacks, max 11 people)",
      "Jet Ski Experience (2 jet skis, 2 hours, max 4 people)",
      "Two VIP Golf Days (for 4 people, includes buggies, select courses)",
      "Wine Tasting Experience (Ronda, for 4 people, includes executive chauffeur driver)",
      "Personal Shopper Experience (Gucci, Valentino, Chanel, Louis Vuitton, Hermes, Dior, Dolce & Gabbana, Fendi, Celine, Loro Piana – includes champagne & private driver)",
      "Private Helicopter Tour (15-20 min scenic flight over Marbella & coastline)",
      "Beachfront 3-Course Lunch (includes wine, premium location)",
      "Michelin-Star VIP Reservation (exclusive dining experience at a top-rated restaurant)",
      "Restaurant, Pool Club & Nightclub VIP Booking Service",
    ],
  },
  {
    name: "Platinum Package",
    price: "€25,000",
    tagline: "The ultimate VIP lifestyle package—pure luxury, curated to perfection",
    features: [
      "VIP Airport Transfer (Mercedes V-Class, up to 7 people)",
      "Dedicated Personal Concierge Assistance (available 24/7 for any request)",
      "Luxury Car Hire (72 hours, refundable deposit required) – Lamborghini Urus, Rolls-Royce or similar",
      "8-Hour Super Yacht Charter (pickup & drop-off, captain, crew, jet skis, water sports accessories, 4K videographer, live DJ, breakfast, lunch & dinner, champagne, wine, soft drinks, snacks, towels, max 10 people)",
      "Jet Ski Experience (2 jet skis, 2 hours, max 4 people)",
      "Two VIP Golf Days (for 4 people, includes buggies, select courses)",
      "Wine Tasting Experience (Ronda, for 4 people, includes executive chauffeur driver)",
      "Personal Shopper Experience (Gucci, Valentino, Chanel, Louis Vuitton, Hermes, Dior, Dolce & Gabbana, Fendi, Celine, Loro Piana – includes champagne & private driver)",
      "Private Helicopter Tour (15-20 min scenic flight over Marbella & coastline)",
      "Exclusive Michelin-Star Dining Experience (multi-course tasting menu with sommelier-selected wines)",
      "Luxury Spa Day (for 4 people, full-body massage & wellness experience)",
      "Off-Road Buggy Adventure (2 buggies, 2 hours of adrenaline-filled fun)",
      "Private Chef Experience (3-course gourmet dinner at your villa, includes live entertainment & 4K videography)",
      "Restaurant, Pool Club & Nightclub VIP Booking Service",
    ],
  },
];

const upgradeOptions = [
  "Luxury Villa Rental or Penthouse Upgrade (bespoke high-end accommodation tailored to your needs)",
  "Private Jet Charter (seamless VIP travel arrangements)",
  "Extended Yacht Charters (full-day or multi-day private cruises)",
  "Additional Supercar Hire (Ferrari, Lamborghini, Rolls-Royce, or similar)",
];

export default function VipX() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipientEmail = "Amorvipconcierge@gmail.com";
    const subject = `VIP Experience Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Message:
${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, "_blank");
    
    toast({
      title: "Opening Email",
      description: "Complete sending your message in the new tab.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light tracking-wider mb-8"
          >
            VIP PACKAGES
          </motion.h1>
        </div>
      </section>

      {/* Packages Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Exclusive Marbella Packages
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              At Amor VIP, we specialize in creating effortless luxury for high-net-worth travelers. From elite transportation to private yacht charters and VIP concierge services, we take care of everything—so you can relax and enjoy your Marbella getaway stress-free.
            </p>

            {/* Package Cards */}
            <div className="space-y-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border-t border-border pt-8"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                    {pkg.name} – {pkg.price}
                  </h3>
                  <p className="text-foreground/70 italic mb-6">{pkg.tagline}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Upgrade Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-t border-border pt-8 mt-12"
            >
              <h3 className="text-xl font-semibold mb-4">
                Upgrade Options (Available on Request):
              </h3>
              <ul className="space-y-2">
                {upgradeOptions.map((option, index) => (
                  <li key={index} className="text-foreground/80">
                    • {option}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-border pt-8 mt-12"
            >
              <h3 className="text-xl font-semibold mb-4 underline">
                Book Your Ultimate VIP Experience Today
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                At Amor VIP, we handle every detail, so you don't have to. From luxury transport to VIP access, private chefs, and yacht charters, we craft the perfect stress-free getaway.
              </p>
              <p className="text-foreground/70 mb-6">
                Contact us now to reserve your package or create a tailor-made itinerary designed just for you.
              </p>
              <a
                href="https://wa.me/34600250154?text=Hi%2C%20I%20am%20interested%20in%20a%20bespoke%20VIP%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-lg hover:scale-105 transition-all duration-300"
              >
                Bespoke Packages Available on Request
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Contact us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  Describe what you are looking for, with dates and party size.
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

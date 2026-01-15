import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, Home, Car, Utensils, ShoppingBag, Calendar, Clock, Shield, Star, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickup and drop-off with luxury vehicles, ensuring your journey begins and ends in style.",
  },
  {
    icon: Home,
    title: "Villa & Accommodation",
    description: "Hand-picked luxury villas and penthouses tailored to your preferences and party size.",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "From supercars to chauffeur services, we handle all your transportation needs.",
  },
  {
    icon: Utensils,
    title: "Dining Reservations",
    description: "Priority bookings at Marbella's most exclusive restaurants and private chef arrangements.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping",
    description: "From designer fashion to everyday essentials—even a mobile charger at midnight.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Birthday celebrations, corporate retreats, or intimate gatherings—we orchestrate every detail.",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support for any request, big or small.",
  },
  {
    icon: Shield,
    title: "Budget Management",
    description: "Entrust us with your funds—we handle all bookings and expenses transparently.",
  },
  {
    icon: Star,
    title: "Bespoke Experience",
    description: "Every detail customized to your unique preferences and lifestyle.",
  },
  {
    icon: Sparkles,
    title: "Stress-Free Stay",
    description: "You relax and enjoy—we take care of absolutely everything else.",
  },
];

export default function LifestyleManagement() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium tracking-wider uppercase mb-6">
              Complete Concierge Service
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Luxury Lifestyle
              <span className="block text-gradient-lime">Management</span>
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              From the moment you land in Marbella until your departure, we handle every detail of your stay. 
              Relax, enjoy, and let us create your perfect Mediterranean experience.
            </p>
            <BookingButtons variant="hero" />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              How It <span className="text-gradient-lime">Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-charcoal-light rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Share Your Vision</h3>
                <p className="text-foreground/60 text-sm">Tell us your preferences, dates, and what you're looking for in your Marbella experience.</p>
              </div>
              <div className="p-6 bg-charcoal-light rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Set Your Budget</h3>
                <p className="text-foreground/60 text-sm">Provide us with your budget and we'll manage all expenses transparently on your behalf.</p>
              </div>
              <div className="p-6 bg-charcoal-light rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Enjoy & Relax</h3>
                <p className="text-foreground/60 text-sm">Arrive and enjoy—we've arranged everything. Need something? We're just a message away.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What We <span className="text-gradient-lime">Handle</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              From airport pickup to finding a phone charger at midnight—no request is too big or too small.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-charcoal-light rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Why Choose <span className="text-gradient-lime">Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-charcoal-light/50 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Ready for a <span className="text-gradient-lime">Stress-Free</span> Marbella Experience?
            </h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Contact us today and let us craft your perfect Mediterranean getaway. 
              Share your vision, set your budget, and leave the rest to us.
            </p>
            <BookingButtons variant="cta" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

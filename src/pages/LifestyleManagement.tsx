import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, Home, Car, Utensils, ShoppingBag, Calendar, Clock, Shield, Star, Sparkles, MapPin, Users, Navigation, Timer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import lifestyleHero from "@/assets/service-lifestyle-new.jpg";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Luxury vehicle meet-and-greet at Málaga Airport. We track your flight, handle luggage, and deliver a seamless arrival and departure experience — every time.",
  },
  {
    icon: Navigation,
    title: "Private Chauffeur",
    description: "Professional, discreet chauffeur services available by the hour or for your entire stay. Travel in comfort with a dedicated driver who knows Marbella inside out.",
  },
  {
    icon: Plane,
    title: "Private Aviation",
    description: "Private jet and helicopter charter arranged upon request. From commercial upgrades to bespoke flight itineraries — we connect you with trusted aviation partners.",
  },
  {
    icon: Home,
    title: "Villa & Accommodation",
    description: "Hand-picked luxury villas and penthouses, personally vetted by our team. Matched to your group size, style, and preferred location across the Costa del Sol.",
  },
  {
    icon: Car,
    title: "Luxury Car Hire",
    description: "From Lamborghinis to Mercedes V-Class — we source and deliver supercars, SUVs, and executive vehicles directly to your door.",
  },
  {
    icon: Utensils,
    title: "Dining Reservations",
    description: "Priority bookings at Marbella's most sought-after restaurants, beach clubs, and private chef arrangements tailored to your group.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping & Errands",
    description: "From designer fashion to a phone charger at midnight — no request is too big or too small. We source, deliver, and handle it all.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Birthday celebrations, corporate retreats, proposals, or intimate gatherings — we plan, coordinate, and execute every detail.",
  },
  {
    icon: Timer,
    title: "Coordination, Logistics & Priority Handling",
    description: "We manage timing, logistics, and multi-party coordination across your entire itinerary. From syncing group schedules to priority access — everything runs seamlessly.",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support for any request, big or small. One message and we're on it.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description: "Deep connections and insider access across Marbella — we know who to call and where to go.",
  },
  {
    icon: Users,
    title: "Full Client Focus",
    description: "Your trip, your way. We plan around your preferences, pace, and priorities — no templates, no shortcuts.",
  },
  {
    icon: Shield,
    title: "Budget Management",
    description: "Entrust us with your funds — we handle all bookings and expenses with full transparency.",
  },
  {
    icon: Star,
    title: "Bespoke Experience",
    description: "Every detail customized to your unique preferences and lifestyle. Nothing is off-the-shelf.",
  },
  {
    icon: Sparkles,
    title: "Convenience & Access",
    description: "Skip the research, the queues, and the hassle. We open doors and make things happen — fast.",
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
        <div className="absolute inset-0">
          <img 
            src={lifestyleHero} 
            alt="Luxury lifestyle in Marbella" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
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
            <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              We provide unmatched access, convenience, and local knowledge — so you don't have to lift a finger. 
              From the moment you land to the moment you leave, every detail is planned with full client focus, 
              precision timing, and priority handling. Your Marbella experience, perfected.
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
                <p className="text-foreground/60 text-sm">Tell us your preferences, dates, group size, and what matters most to you. We listen first.</p>
              </div>
              <div className="p-6 bg-charcoal-light rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">We Plan Everything</h3>
                <p className="text-foreground/60 text-sm">We coordinate logistics, secure priority access, manage bookings, and build your full itinerary.</p>
              </div>
              <div className="p-6 bg-charcoal-light rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Enjoy & Relax</h3>
                <p className="text-foreground/60 text-sm">Arrive and enjoy — everything is handled. Need something on the fly? We're one message away, 24/7.</p>
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
              From airport transfers and private aviation to a phone charger at midnight — no request is too big or too small.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

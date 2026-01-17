import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import pangeaImg from "@/assets/nightclub-pangea.jpg";
import pangeaFloorPlan from "@/assets/pangea-floor-plan.png";
import pangeaParty from "@/assets/pangea-party.jpg";
import pangeaAerial from "@/assets/pangea-aerial.jpeg";
import pangeaTerrace from "@/assets/pangea-terrace.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: pangeaImg, alt: "Pangea Rooftop" },
  { src: pangeaTerrace, alt: "Pangea Terrace" },
  { src: pangeaAerial, alt: "Pangea Tower View" },
  { src: pangeaParty, alt: "Pangea VIP Party" },
];

const features = [
  { icon: "🏰", title: "Iconic Tower", description: "Stunning medieval tower as the venue's centerpiece" },
  { icon: "🌊", title: "Sea Views", description: "Breathtaking Mediterranean panoramas" },
  { icon: "🍸", title: "Premium Cocktails", description: "Expert mixology with premium spirits" },
  { icon: "✨", title: "Exclusive Entry", description: "Intimate atmosphere with selective door policy" },
];

const tableOptions = [
  { category: "Outdoor Terrace Tables", items: [
    { name: "Yellow", price: "Contact for pricing" },
    { name: "Green", price: "Contact for pricing" },
    { name: "Orange", price: "Contact for pricing" },
    { name: "Cyan", price: "Contact for pricing" },
    { name: "Magenta", price: "Contact for pricing" },
    { name: "Red", price: "Contact for pricing" },
    { name: "Purple", price: "Contact for pricing" },
    { name: "Bronze", price: "Contact for pricing" },
    { name: "Gold", price: "Contact for pricing" },
  ]},
  { category: "Indoor Tables", items: [
    { name: "Dark Green", price: "Contact for pricing" },
  ]},
];

export default function PangeaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Hero Image Carousel */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background/50 transition-all duration-300">
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background/50 transition-all duration-300">
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {galleryImages.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary" : "bg-foreground/40"}`} />
          ))}
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">Pangea</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Rooftop Club • Puerto Banús
          </motion.p>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link to="/nightclubs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Nightclubs</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.4em] uppercase text-sm block mb-4">About The Venue</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Mediterranean <span className="text-gradient-lime">Rooftop Paradise</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Pangea is an exclusive rooftop club experience overlooking Puerto Banús and the Mediterranean Sea. Featuring a stunning medieval tower as its centerpiece, the venue offers an intimate and sophisticated atmosphere.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                With premium cocktails, world-class DJs, and breathtaking sea views, Pangea delivers an unparalleled nightlife experience. The outdoor terrace and indoor spaces create the perfect setting for unforgettable summer nights.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús Marina</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">11:00 PM - 6:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Deep House, Afro House</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Smart Elegant</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src={pangeaImg} alt="Pangea Marbella" className="w-full h-[500px] object-cover rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What Makes Pangea <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              VIP Table <span className="text-gradient-lime">Options</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Choose from our range of exclusive table options across the outdoor terrace and indoor areas.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {tableOptions.map((section, sectionIndex) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-charcoal-light rounded-2xl border border-primary/10 overflow-hidden"
              >
                <div className="p-4 bg-background/30 border-b border-primary/10">
                  <h3 className="font-display text-xl text-foreground">{section.category}</h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-3">
                    {section.items.map((item, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-background/50 text-foreground/80 rounded-full border border-primary/20 hover:border-primary/40 transition-colors duration-300 text-sm"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Venue <span className="text-gradient-lime">Floor Plan</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Explore Pangea's rooftop layout with outdoor terrace tables and indoor seating options
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-background/50">
              <img 
                src={pangeaFloorPlan} 
                alt="Pangea Floor Plan" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">Pangea</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP table with stunning Mediterranean views.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

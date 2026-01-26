import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import tibuHero from "@/assets/tibu-hero.jpg";
import tibuFloorPlan from "@/assets/tibu-floor-plan.png";
import tibuGallery1 from "@/assets/tibu-gallery-1.jpg";
import tibuGallery2 from "@/assets/tibu-gallery-2.jpg";
import tibuGallery3 from "@/assets/tibu-gallery-3.jpg";
import tibuGallery4 from "@/assets/tibu-gallery-4.jpg";
import tibuGallery5 from "@/assets/tibu-gallery-5.jpg";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: tibuGallery1, alt: "TIBU VIP Lounge" },
  { src: tibuGallery2, alt: "TIBU Bar" },
  { src: tibuGallery3, alt: "TIBU Interior" },
  { src: tibuGallery4, alt: "TIBU Dance Floor" },
  { src: tibuGallery5, alt: "TIBU Party" },
];

const features = [
  { icon: "📍", title: "Prime Puerto Banús Location & Weekly Events", description: "Central to Marbella's nightlife with themed parties and DJs almost every night" },
  { icon: "🌴", title: "Indoor Club + Open-Air Terrace", description: "Dance floors inside and space to chill under the stars" },
  { icon: "🍾", title: "VIP Tables & Social Atmosphere", description: "Bottle service, energetic crowd, and classic Marbella late-night vibe" },
];

const venueInfo = {
  music: ["House", "Hip Hop", "AfroBeats", "House Classics"],
  dressCode: "Dress to impress, no sportswear",
  openingTimes: "12:00 AM - 7:00 AM",
};

const tableAreas = [
  { name: "Open Terrace", tables: "Tables 6-11", description: "Premium outdoor seating with stunning views" },
  { name: "Lounge Terrace", tables: "Tables 21-25", description: "Comfortable lounge seating area" },
  { name: "VIP Section", tables: "Tables 21-26", description: "Exclusive VIP experience" },
  { name: "Dance Floor", tables: "Tables 1-5, 12-20", description: "Center of the action" },
  { name: "Belvedere VIP", tables: "Tables 1-9", description: "Ultimate VIP experience with panoramic views" },
];

export default function TibuPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Single Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={tibuHero} alt="TIBU Marbella" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">TIBU</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Nightclub • Puerto Banús
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

      {/* About Section with Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.4em] uppercase text-sm block mb-4">About The Venue</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Established <span className="text-gradient-lime">Nightlife Destination</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                TIBU Night Club is one of Puerto Banús, Marbella's most established nightlife destinations, situated right in the heart of the port's party zone. Known for its lively vibe and big-name DJs, TIBU blends indoor clubbing with open-air terrace spaces, themed nights, and late-night energy that draws both locals and international party-goers throughout the week.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">{venueInfo.openingTimes}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">House, Hip Hop, Afro</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dress to Impress</span>
                </div>
              </div>
            </motion.div>

            <VenueGalleryCarousel images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What Makes TIBU <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Venue Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Venue <span className="text-gradient-lime">Details</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 text-center"
            >
              <h3 className="font-display text-lg text-foreground mb-4">Music</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {venueInfo.music.map((genre) => (
                  <span key={genre} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 text-center"
            >
              <h3 className="font-display text-lg text-foreground mb-4">Dress Code</h3>
              <p className="text-foreground/60 text-sm">{venueInfo.dressCode}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-charcoal-light rounded-2xl border border-primary/10 text-center"
            >
              <h3 className="font-display text-lg text-foreground mb-4">Opening Times</h3>
              <p className="text-foreground/60 text-sm">{venueInfo.openingTimes}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table Areas */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              VIP Table <span className="text-gradient-lime">Areas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tableAreas.map((area, index) => (
              <motion.div 
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-display text-lg text-foreground mb-1">{area.name}</h3>
                <p className="text-primary text-xs mb-2">{area.tables}</p>
                <p className="text-foreground/60 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
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
              Explore TIBU's layout with Open Terrace, Lounge Terrace, VIP Section, and Belvedere VIP areas
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
                src={tibuFloorPlan} 
                alt="TIBU Floor Plan" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">TIBU</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP table at Marbella's most iconic nightclub.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
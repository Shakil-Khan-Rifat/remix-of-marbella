import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import BookingButtons from "@/components/BookingButtons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import villaImagine1 from "@/assets/villa-imagine-1.jpg";
import villaImagine2 from "@/assets/villa-imagine-2.jpg";
import villaImagine3 from "@/assets/villa-imagine-3.jpg";
import villaImagine4 from "@/assets/villa-imagine-4.jpg";
import villaImagine5 from "@/assets/villa-imagine-5.jpg";
import villaImagine6 from "@/assets/villa-imagine-6.jpg";
import villaImagine7 from "@/assets/villa-imagine-7.jpg";
import villaImagine8 from "@/assets/villa-imagine-8.jpg";
import villaBenvano1 from "@/assets/villa-benvano-new-1.jpg";
import villaBenvano2 from "@/assets/villa-benvano-new-2.jpg";
import villaBenvano3 from "@/assets/villa-benvano-new-3.jpg";
import villaBenvano4 from "@/assets/villa-benvano-new-4.jpg";
import villaBenvano5 from "@/assets/villa-benvano-new-5.jpg";
import villaBenvano6 from "@/assets/villa-benvano-new-6.jpg";
import villaBenvano7 from "@/assets/villa-benvano-new-7.jpg";
import villaBenvano8 from "@/assets/villa-benvano-new-8.jpg";
import villaBenvano9 from "@/assets/villa-benvano-new-9.jpg";
import villaBenvano10 from "@/assets/villa-benvano-new-10.jpg";
import villaAtalaya1 from "@/assets/villa-atalaya-1.png";
import villaAtalaya2 from "@/assets/villa-atalaya-2.png";
import villaAtalaya3 from "@/assets/villa-atalaya-3.png";
import villaAtalaya4 from "@/assets/villa-atalaya-4.png";
import villaAtalaya5 from "@/assets/villa-atalaya-5.png";
import villaAtalaya6 from "@/assets/villa-atalaya-6.png";
import villaAtalaya7 from "@/assets/villa-atalaya-7.png";
import villaAtalaya8 from "@/assets/villa-atalaya-8.png";
import villaAtalaya9 from "@/assets/villa-atalaya-9.png";
import villaAtalaya10 from "@/assets/villa-atalaya-10.png";
import villaLayla1 from "@/assets/villa-layla-1.png";
import villaLayla2 from "@/assets/villa-layla-2.png";
import villaLayla3 from "@/assets/villa-layla-3.png";
import villaLayla4 from "@/assets/villa-layla-4.png";
import villaLayla5 from "@/assets/villa-layla-5.png";
import villaLayla6 from "@/assets/villa-layla-6.png";
import villaLayla7 from "@/assets/villa-layla-7.png";
import villaLayla8 from "@/assets/villa-layla-8.png";
import villaLayla9 from "@/assets/villa-layla-9.png";
import villaLayla10 from "@/assets/villa-layla-10.png";
import villaAma1 from "@/assets/villa-ama-1.png";
import villaAma2 from "@/assets/villa-ama-2.png";
import villaAma3 from "@/assets/villa-ama-3.png";
import villaAma4 from "@/assets/villa-ama-4.png";
import villaAma5 from "@/assets/villa-ama-5.png";
import villaAma6 from "@/assets/villa-ama-6.png";
import villaAma7 from "@/assets/villa-ama-7.png";
import villaAma8 from "@/assets/villa-ama-8.png";
import villaTorro1 from "@/assets/villa-torro-1.png";
import villaTorro2 from "@/assets/villa-torro-2.png";
import villaTorro3 from "@/assets/villa-torro-3.png";
import villaTorro4 from "@/assets/villa-torro-4.png";
import villaTorro5 from "@/assets/villa-torro-5.png";
import villaTorro6 from "@/assets/villa-torro-6.png";
import villaTorro7 from "@/assets/villa-torro-7.png";
import villaTorro8 from "@/assets/villa-torro-8.png";
import villaTorro9 from "@/assets/villa-torro-9.png";
import villaTorro10 from "@/assets/villa-torro-10.png";
import villaMozart1 from "@/assets/villa-mozart-1.png";
import villaMozart2 from "@/assets/villa-mozart-2.png";
import villaMozart3 from "@/assets/villa-mozart-3.png";
import villaMozart4 from "@/assets/villa-mozart-4.png";
import villaMozart5 from "@/assets/villa-mozart-5.png";
import villaMozart6 from "@/assets/villa-mozart-6.png";
import villaMozart7 from "@/assets/villa-mozart-7.png";
import villaMozart8 from "@/assets/villa-mozart-8.png";
import villaMozart9 from "@/assets/villa-mozart-9.png";
import villaPedro1 from "@/assets/villa-pedro-1.png";
import villaPedro2 from "@/assets/villa-pedro-2.png";
import villaPedro3 from "@/assets/villa-pedro-3.png";
import villaPedro4 from "@/assets/villa-pedro-4.png";
import villaPedro5 from "@/assets/villa-pedro-5.png";
import villaPedro6 from "@/assets/villa-pedro-6.png";
import villaPedro7 from "@/assets/villa-pedro-7.png";
import villaPedro8 from "@/assets/villa-pedro-8.png";
import villaPedro9 from "@/assets/villa-pedro-9.png";
import villaTropic1 from "@/assets/villa-tropic-1.png";
import villaTropic2 from "@/assets/villa-tropic-2.png";
import villaTropic3 from "@/assets/villa-tropic-3.png";
import villaTropic4 from "@/assets/villa-tropic-4.png";
import villaTropic5 from "@/assets/villa-tropic-5.png";
import villaTropic6 from "@/assets/villa-tropic-6.png";
import villaTropic7 from "@/assets/villa-tropic-7.png";
import villaTropic8 from "@/assets/villa-tropic-8.png";
import villaTropic9 from "@/assets/villa-tropic-9.png";
import villaTropic10 from "@/assets/villa-tropic-10.png";
import villaLaRosa1 from "@/assets/villa-la-rosa-1.jpg";
import villaLaRosa2 from "@/assets/villa-la-rosa-2.jpg";
import villaLaRosa3 from "@/assets/villa-la-rosa-3.jpg";
import villaLaRosa4 from "@/assets/villa-la-rosa-4.jpg";
import villaLaRosa5 from "@/assets/villa-la-rosa-5.jpg";
import villaLaRosa6 from "@/assets/villa-la-rosa-6.jpg";
import villaLaRosa7 from "@/assets/villa-la-rosa-7.jpg";
import villaLaRosa8 from "@/assets/villa-la-rosa-8.jpg";

const WHATSAPP_URL = "https://wa.me/34600250154?text=Hi%2C%20I%20would%20like%20to%20make%20a%20booking";
const EMAIL = "Amorvipconcierge@gmail.com";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Villa%20Booking%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20make%20a%20villa%20booking.`;

// Placeholder villa data - will be replaced with actual content later
const villasData: Record<string, { name: string; description: string; images: string[]; useSquareImages?: boolean }> = {
  "villa-imagine": {
    name: "Villa Imagine",
    description: "Monte Mayor, Benahavís\n\n5 Bedrooms · Sleeps up to 11\n\nA private luxury villa set in the exclusive hills of Monte Mayor, offering panoramic sea and mountain views with complete privacy. Villa Imagine blends contemporary design with effortless indoor-outdoor living, featuring a heated infinity pool, expansive terraces, and refined open-plan interiors flooded with natural light.\n\nThe villa includes a sleek modern kitchen, elegant living and dining areas, and a dedicated office space—ideal for guests combining leisure with work. Perfectly positioned between Marbella and Estepona, with easy access to championship golf courses, fine dining, luxury beach clubs, and the coastline.\n\nA calm, elevated retreat designed for discreet luxury stays in Marbella.",
    images: [
      villaImagine1,
      villaImagine2,
      villaImagine3,
      villaImagine4,
      villaImagine5,
      villaImagine6,
      villaImagine7,
      villaImagine8,
    ],
  },
  "casa-lux": {
    name: "Casa Lux Villa",
    description: "Los Flamingos\n\n6 Bedrooms · Sleeps up to 12\n\nA contemporary luxury villa set within the prestigious, gated community of Los Flamingos, offering panoramic views across the golf course, Andalusian hills, and the Mediterranean Sea. Designed for privacy, space, and elevated comfort, Villa Lux delivers a seamless balance of tranquillity and access.\n\nSet across three levels and connected by a private elevator, the villa features six en-suite bedrooms, expansive open-plan living and dining areas, and a sleek designer kitchen. Additional lounge spaces, terraces, and a solarium create effortless indoor-outdoor living, ideal for relaxed entertaining and long stays.\n\nGuests enjoy landscaped gardens, a private pool, and outdoor dining areas, with the option of in-villa staff support. Residents benefit from access to world-class golf facilities and the renowned Anantara Villa Padierna Palace Resort, including its spa, restaurants, and private beach club.\n\nLocated just minutes from the coast and within easy reach of Puerto Banús, Marbella, and Estepona, Villa Lux is an exceptional base for a refined Marbella lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
    ],
  },
  "villa-benvano": {
    name: "Villa Benvano",
    description: "Los Flamingos\n\n4 Bedrooms · Sleeps up to 8\n\nA refined three-level luxury villa set within the prestigious Los Flamingos community, offering panoramic golf and Mediterranean sea views in a serene, private setting. Designed for elevated living, Villa Benvano combines architectural elegance with exceptional comfort.\n\nThe villa features four en-suite bedrooms, accessed across three floors via a private elevator. Light-filled living and dining spaces open onto expansive terraces with a heated infinity pool, covered lounge, and outdoor dining—ideal for relaxed entertaining. A rooftop terrace delivers sweeping views across the golf course and coastline.\n\nFor leisure and wellness, guests enjoy a private cinema room, Technogym fitness area, billiards room, and a SONOS multi-room audio system throughout. A two-car garage and shaded porch ensure seamless arrivals and departures.\n\nAn elegant retreat for discreet luxury stays close to Marbella's golf, beaches, and fine dining.",
    images: [
      villaBenvano1,
      villaBenvano2,
      villaBenvano3,
      villaBenvano4,
      villaBenvano5,
      villaBenvano6,
      villaBenvano7,
      villaBenvano8,
      villaBenvano9,
      villaBenvano10,
    ],
  },
  "villa-atalaya": {
    name: "Villa Atalaya",
    description: "Atalaya\n\n5 Bedrooms · Sleeps up to 10\n\nA modern luxury villa located in the sought-after Atalaya area, offering privacy, space, and effortless access to Marbella's lifestyle. Designed for relaxed contemporary living, Villa Atalaya combines clean architectural lines with comfortable indoor-outdoor flow.\n\nThe villa features an open-plan living and dining area filled with natural light, leading directly onto a treeline garden terrace and heated swimming pool. Interiors are sleek and understated, creating a calm setting ideal for both entertaining and unwinding.\n\nAccommodation includes five well-appointed bedrooms, three with en-suite bathrooms, complemented by additional guest bathrooms. A private cinema room adds an extra layer of comfort for evenings at home. Located just 15 minutes from Puerto Banús and close to local amenities, the villa offers convenience without compromising on tranquillity.\n\nA stylish, well-balanced retreat for refined Marbella stays.",
    images: [
      villaAtalaya1,
      villaAtalaya2,
      villaAtalaya3,
      villaAtalaya4,
      villaAtalaya5,
      villaAtalaya6,
      villaAtalaya7,
      villaAtalaya8,
      villaAtalaya9,
      villaAtalaya10,
    ],
  },
  "villa-layla": {
    name: "Villa Layla",
    description: "Las Brisas\n\n5 Bedrooms · Sleeps up to 10\n\nNueva Andalucía – Golf Valley\n\nSet in the heart of Nueva Andalucía's prestigious Golf Valley, Villa Layla occupies one of Marbella's most sought-after residential addresses. Surrounded by renowned golf courses, including Las Brisas, the villa enjoys uninterrupted views toward La Concha and a peaceful, private setting defined by natural beauty.\n\nWith an eastern orientation, the property is filled with soft morning light and enjoys sunshine throughout the day. Despite its tranquil position, Villa Layla is just minutes from Puerto Banús, leading international schools, and Marbella's finest dining, shopping, and lifestyle destinations.\n\nA refined Golf Valley residence offering privacy, views, and immediate access to Marbella's elite lifestyle.",
    images: [
      villaLayla1,
      villaLayla2,
      villaLayla3,
      villaLayla4,
      villaLayla5,
      villaLayla6,
      villaLayla7,
      villaLayla8,
      villaLayla9,
      villaLayla10,
    ],
  },
  "villa-ama": {
    name: "Villa Ama",
    useSquareImages: true,
    description: "Nueva Andalucía\n\n5 Bedrooms · Sleeps up to 10\n\nVilla Ama - Splendid Villa with Infinity Pool and La Concha Views in Nueva Andalucía\n\nA stunning sophisticated residence nestled in the picturesque landscape of lower Nueva Andalucía. Across two floors, it unveils expansive windows and inviting terraces that beckon to bask in the breathtaking views of La Concha and the Mediterranean.\n\nUpon entering the property, a welcoming courtyard provides access to both the main villa and a separate guesthouse, complete with its own terrace and outdoor shower—an ideal setting for shared moments and private retreats. Stepping through the villa's entrance door, guests are greeted by a spacious foyer that sets the journey to discover the rest of the house. On this level, a reception toilet, the master bedroom, and a second en-suite bedroom await.\n\nA minimalist staircase descends to the lower floor, where the living room, dining area, kitchen, an additional bedroom and bathroom unfold seamlessly. The living space opens onto a terrace with a marble infinity pool, offering a tranquil spot to admire the mountain views.\n\nWith its clean lines and versatile layout, offers the flexibility to configure the space to suit any lifestyle preferences, whether preferring five bedrooms or wishing to transform one into a cinema, gym, or other creative space.\n\nEvery detail within the villa reflects a commitment to sophistication and comfort. Noble materials such as marble and wood are combined in an ethereal palette, creating an atmosphere of timeless elegance.",
    images: [
      villaAma1,
      villaAma2,
      villaAma3,
      villaAma4,
      villaAma5,
      villaAma6,
      villaAma7,
      villaAma8,
    ],
  },
  "villa-torro": {
    name: "Villa Torro",
    description: "Nueva Andalucía, Marbella\n\n6 Bedrooms · Sleeps up to 12\n\nA vibrant contemporary villa located in the heart of Nueva Andalucía, just moments from Centro Plaza, the bullring, and within walking distance of Puerto Banús and the beach. Villa Torro offers the ideal balance between privacy and immediate access to Marbella's social and lifestyle scene.\n\nSet across two levels, the villa features six en-suite bedrooms, two additional guest restrooms, and multiple living spaces designed for relaxed entertaining. The lower level opens onto a private outdoor area with swimming pool, jacuzzi, gazebo, and dining terrace, while the rooftop lounge provides panoramic views of La Concha and the coastline.\n\nWith sea and mountain views, low-maintenance living, and a prime central location, Villa Torro is perfectly suited for social stays, group holidays, and high-end rental use.\n\nA dynamic villa for those who want to be at the centre of Marbella's lifestyle.",
    images: [
      villaTorro1,
      villaTorro2,
      villaTorro3,
      villaTorro4,
      villaTorro5,
      villaTorro6,
      villaTorro7,
      villaTorro8,
      villaTorro9,
      villaTorro10,
    ],
  },
  "villa-mozart": {
    name: "Villa Mozart",
    description: "Sierra Blanca, Marbella\n\n6 Bedrooms · Sleeps up to 12\n\nA contemporary four-level luxury villa located in the prestigious gated community of Sierra Blanca. Villa Mozart offers panoramic sea and mountain views, refined interiors, and exceptional privacy just minutes from the Golden Mile and Puerto Banús.\n\nThe villa features spacious living areas, six bedrooms, nine bathrooms, and a standout rooftop terrace with a full-size swimming pool—ideal for entertaining and relaxed outdoor living. Designed for comfort, discretion, and elevated stays.\n\nAn iconic residence in one of Marbella's most exclusive hillside locations.",
    images: [
      villaMozart1,
      villaMozart2,
      villaMozart3,
      villaMozart4,
      villaMozart5,
      villaMozart6,
      villaMozart7,
      villaMozart8,
      villaMozart9,
    ],
  },
  "villa-pedro": {
    name: "Villa Pedro",
    useSquareImages: true,
    description: "San Pedro Beachside\n\n5 Bedrooms · Sleeps up to 10\n\nA refined beachside villa located within a gated community in San Pedro de Alcántara, offering privacy, comfort, and close proximity to the sea. Villa Pedro combines classic elegance with modern amenities, just minutes from the town centre, promenade, and Marbella's lifestyle destinations.\n\nThe villa features spacious living areas with fireplace, a fully furnished interior, and multiple entertainment spaces including a private cinema room and games room. Outdoor areas provide garden and sea views, while balconies and terraces enhance indoor-outdoor living.\n\nAdditional features include underfloor heating in bathrooms, air conditioning, central and gas heating systems, solar panels, advanced audio-visual systems, and secure parking. Designed for comfortable year-round stays, the villa offers both tranquillity and convenience in a sought-after coastal location.\n\nA well-balanced beachside retreat for relaxed and discreet stays near Marbella.",
    images: [
      villaPedro1,
      villaPedro2,
      villaPedro3,
      villaPedro4,
      villaPedro5,
      villaPedro6,
      villaPedro7,
      villaPedro8,
      villaPedro9,
    ],
  },
  "villa-tropic": {
    name: "Villa Tropic",
    useSquareImages: true,
    description: "Puerto Banus\n\n4 Bedrooms · 8 guests\n\nA private tropical-style villa set on a quiet cul-de-sac, offering complete privacy and a relaxed luxury atmosphere. Villa Tropic blends lush outdoor living with refined interiors, creating an ideal setting for stylish, low-key Marbella stays.\n\nArranged across three levels, the villa features an open-plan living space with bi-folding doors that flow seamlessly onto the pool area, enhancing the indoor-outdoor lifestyle. A bio-ethanol fireplace and bespoke bar add character to the main lounge, while the elevated dining area and high-spec kitchen open onto an outdoor kitchen and BBQ space—perfect for entertaining.\n\nUpstairs, four spacious bedrooms each enjoy private terraces, complemented by four well-appointed bathrooms. Outdoor highlights include a swimming pool, jacuzzi, and landscaped tropical surroundings.\n\nA secluded yet social retreat designed for effortless living and entertaining in Marbella.",
    images: [
      villaTropic1,
      villaTropic2,
      villaTropic3,
      villaTropic4,
      villaTropic5,
      villaTropic6,
      villaTropic7,
      villaTropic8,
      villaTropic9,
      villaTropic10,
    ],
  },
  "villa-la-rosa": {
    name: "Villa La Rosa",
    description: "Marbella\n\n5 Bedrooms · Sleeps up to 12\n\nEnjoy relaxed luxury in this beautiful Spanish-style villa, perfect for families and groups. Lounge by the pool, unwind in the jacuzzi, or cook in the fully equipped outdoor kitchen while taking in stunning views of La Concha mountain. Local bars and restaurants are just a short walk away.\n\nThe villa features five spacious en-suite bedrooms sleeping up to 12 guests, including a family room and a luxurious master suite with walk-in wardrobe, bath, and mountain views. Inside, you'll find a stylish lounge with IPTV, dining area, and fully equipped kitchen.\n\nOutside, enjoy the large saltwater pool surrounded by palm trees, sunset drinks on the terrace, and evening ambience in the beautifully lit gardens — ideal for unforgettable stays in Marbella.",
    images: [
      villaLaRosa1,
      villaLaRosa2,
      villaLaRosa3,
      villaLaRosa4,
      villaLaRosa5,
      villaLaRosa6,
      villaLaRosa7,
      villaLaRosa8,
    ],
  },
};

function VillaContactForm({ villaName }: { villaName: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const checkInStr = formData.checkIn ? format(formData.checkIn, "PPP") : "Not specified";
    const checkOutStr = formData.checkOut ? format(formData.checkOut, "PPP") : "Not specified";
    const text = `Hi, I'd like to enquire about ${villaName}.%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0ACheck-in: ${encodeURIComponent(checkInStr)}%0ACheck-out: ${encodeURIComponent(checkOutStr)}%0A%0A${encodeURIComponent(formData.message)}`;
    
    window.open(`https://wa.me/34600250154?text=${text}`, "_blank");
    setFormData({ name: "", phone: "", checkIn: undefined, checkOut: undefined, message: "" });
  };

  return (
    <section className="py-12 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl mb-2 text-foreground text-center">
            Enquire About This <span className="text-gradient-lime">Villa</span>
          </h2>
          <p className="text-foreground/60 text-center mb-2">
            Fill out the form below and we'll get back to you shortly
          </p>
          <p className="text-primary/80 text-center text-sm mb-8 italic">
            We work directly on behalf of our clients ensuring a seamless, hassle-free Marbella experience.
          </p>
          
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
            <div className="mb-6">
              <label className="block text-sm text-foreground/60 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Write here..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-foreground/60 mb-2">Phone Number (inc. area code e.g. +44, +34)</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="+44 7123 456789"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-foreground/60 mb-2">Check-in Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full bg-muted border border-border rounded-lg px-4 py-3 text-left flex items-center gap-2 focus:outline-none focus:border-primary transition-colors",
                        !formData.checkIn && "text-foreground/40"
                      )}
                    >
                      <CalendarIcon className="w-4 h-4 text-foreground/40" />
                      {formData.checkIn ? format(formData.checkIn, "PPP") : "Select date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.checkIn}
                      onSelect={(date) => setFormData({ ...formData, checkIn: date })}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm text-foreground/60 mb-2">Check-out Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full bg-muted border border-border rounded-lg px-4 py-3 text-left flex items-center gap-2 focus:outline-none focus:border-primary transition-colors",
                        !formData.checkOut && "text-foreground/40"
                      )}
                    >
                      <CalendarIcon className="w-4 h-4 text-foreground/40" />
                      {formData.checkOut ? format(formData.checkOut, "PPP") : "Select date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={formData.checkOut}
                      onSelect={(date) => setFormData({ ...formData, checkOut: date })}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm text-foreground/60 mb-2">
                Tell us about your stay requirements
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
              <MessageCircle className="w-4 h-4" />
              Send Enquiry via WhatsApp
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-foreground/40 text-xs text-center mt-6 max-w-lg mx-auto leading-relaxed">
            Disclaimer: Amor VIP Concierge acts as a third-party intermediary and is not the direct owner or operator of the properties listed. All bookings are subject to availability and the terms and conditions of the property owner. We are not liable for any issues arising directly from the property or its management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function VillaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const villa = slug ? villasData[slug] : null;

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [villa]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!villa) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="font-display text-4xl mb-4">Villa Not Found</h1>
          <Link to="/villa-rental" className="text-primary hover:text-primary/80">
            ← Back to Villas
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/villa-rental"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Villas</span>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            {villa.name}
          </motion.h1>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background transition-all duration-300 ${
                !canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background transition-all duration-300 ${
                !canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {villa.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-shrink-0 snap-center first:pl-0 last:pr-0"
                  style={{ 
                    width: villa.useSquareImages ? 'calc(25% - 9px)' : 'calc(33.333% - 8px)',
                    minWidth: villa.useSquareImages ? '200px' : '280px'
                  }}
                >
                  <img
                    src={image}
                    alt={`${villa.name} - Image ${index + 1}`}
                    className={villa.useSquareImages 
                      ? "w-full aspect-square rounded-xl object-cover"
                      : "w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-xl object-cover"
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">
              Property Description
            </h2>
            <div className="text-foreground/70 text-base md:text-lg leading-relaxed whitespace-pre-line max-w-4xl">
              {villa.description}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <VillaContactForm villaName={villa.name} />

      {/* CTA Section - Matching Yacht Style */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Ready to <span className="text-gradient-lime">Book Your Stay</span>?
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
              Contact our concierge team to arrange your perfect villa experience. 
              We'll handle every detail for a seamless, hassle-free Marbella stay.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer: "We recommend booking at least 2-4 weeks in advance for peak season (June-September) to ensure availability of premium services like yacht charters and luxury villas. However, we also accommodate last-minute requests whenever possible.",
  },
  {
    question: "Do you offer group packages for events?",
    answer: "Absolutely! We specialize in creating bespoke group itineraries for celebrations, corporate events, bachelor/bachelorette parties, and more. Our team will customize every aspect to suit your group's preferences and budget.",
  },
  {
    question: "What areas do you cover in Spain?",
    answer: "Our primary focus is Marbella and the Costa del Sol region, including Puerto Banús, Estepona, and surrounding areas. We can also arrange services in other Spanish destinations upon request.",
  },
  {
    question: "Is there a minimum spend or retainer required?",
    answer: "We offer flexible options ranging from single service bookings to comprehensive concierge packages. There's no minimum spend for individual bookings, though some premium services may have their own requirements.",
  },
  {
    question: "Can you arrange airport transfers and transportation?",
    answer: "Yes! We provide luxury airport transfers from Málaga Airport and arrange premium car rentals including supercars and classic vehicles. Our chauffeur service is also available for your entire stay.",
  },
  {
    question: "Do you provide personal concierge hosts?",
    answer: "Yes, our personal concierge host service is one of our most popular offerings. Your dedicated host will be available throughout your stay to handle reservations, solve any issues, and ensure your experience is seamless.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]; 
  index: number; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border/50"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300 rounded-full">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
          )}
        </span>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-foreground/60 leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary tracking-[0.4em] uppercase text-sm"
          >
            Common Questions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4"
          >
            Frequently <span className="text-gradient-gold">Asked</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

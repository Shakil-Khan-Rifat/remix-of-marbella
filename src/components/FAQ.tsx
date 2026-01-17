import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can we book multiple venues through you?",
    answer: "Absolutely. We provide a seamless and efficient booking service, including expert recommendations tailored to your group's preferences, ensuring the best venues and experiences for your stay.",
  },
  {
    question: "How much do pool clubs and nightclubs cost?",
    answer: "Each venue sets its own pricing, which can vary based on group size, availability, season, and demand. Our team will advise you on the most suitable packages to match your group size, expectations, and budget.",
  },
  {
    question: "Are yacht charters available for three days or longer?",
    answer: "Yes. We offer a selection of luxury yachts available for extended charters, including weekly and monthly options, fully customised to your requirements.",
  },
  {
    question: "What is the minimum age to rent a luxury car?",
    answer: "The minimum age is 25 years. A valid driving licence and passport ID are required.",
  },
  {
    question: "Can you arrange private chefs, DJs, and entertainment at a villa?",
    answer: "Yes. We specialise in private event planning, offering access to Marbella's finest private chefs, international DJs, dancers, and live performers to create unforgettable in-villa experiences.",
  },
  {
    question: "What are the benefits of booking with Amor VIP?",
    answer: "Many of our clients choose to let us manage their entire stay from start to finish. We deliver a complete 360° Marbella experience, designing bespoke itineraries based on each group's lifestyle, preferences, and expectations. From planning to execution, we take care of every detail.",
  },
  {
    question: "What are your costs?",
    answer: "Our pricing is tailored to each client and depends on the level of service required. This may include individual venue bookings, full itinerary planning, private events, or complete lifestyle management.",
  },
  {
    question: "What is Lifestyle Management?",
    answer: "Lifestyle Management is our most exclusive service, designed for clients seeking the ultimate VIP Marbella experience. We curate, book, and manage every aspect of your trip. Our team provides meet-and-greet services, accompanies you to venues, and remains on hand throughout your experience to ensure everything runs flawlessly, with a dedicated manager available to handle any request or requirement.",
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

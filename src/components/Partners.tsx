import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Ocean Club",
  "Nikki Beach",
  "TIBU",
  "Olivia Valere",
  "Nobu",
  "Cipriani",
  "Pangea",
  "GAIA",
  "Mogli",
  "Fitz",
  "Sublim",
  "Florentine",
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background border-y border-border/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-foreground/40 text-sm tracking-[0.3em] uppercase mb-12"
        >
          Trusted by Marbella's Finest Establishments
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        >
          {partners.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="font-display text-xl md:text-2xl text-foreground/30 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

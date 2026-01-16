import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 px-4 md:px-8 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground">
              © 2025 <span className="text-primary font-semibold">Shawaf Khan A</span>. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Crafted with passion and innovation
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card rounded-full neon-glow hover:neon-glow-intense transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-primary" />
          </motion.button>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { animate, inView } from "motion";
import { useTheme } from "../../context/ThemeContext";
const Hero: React.FC = () => {
  inView("div", (info) => {
    animate(info.target, { opacity: 1 });
  });
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary theme-${theme}`}
    >
      <div className="container mx-auto px-6 py-24 text-bgPrimary">
        <motion.div
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 20,
            damping: 20,
          }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Sirapop chaddaeng
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Fullstack Developer
          </motion.p>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            whileTap={{ scale: 1 }}
            className="bg-bgPrimary text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:text-secondary transition-colors"
            href="#projects"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

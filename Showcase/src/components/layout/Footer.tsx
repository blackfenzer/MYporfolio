import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  return (
    <footer
      className={`relative min-h-[300px] overflow-hidden theme-${theme}`}
      ref={ref}
    >
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated blue overlay */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isInView ? { x: "0%" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-blue-600"
      />

      {/* Footer content */}

      <section className="relative z-10 container mx-auto px-8 pt-12 pb-4 text-gray-900 dark:text-gray-100 flex-column gap-16">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-5xl font-semibold tracking-tight mb-5">
            Let's work together
          </p>
          <motion.div
            animate={{ width: isHovered ? "100%" : "0" }}
            style={{ width: "100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-3 bg-primary mb-8"
          >
            {" "}
          </motion.div>
        </div>
        <div className="flex flex-row justify-between gap-8 ">
          <div className="flex flex-col w-1/2 space-y-6">
            <div className="h-px w-full bg-white"></div>
            <p className="text-2xl font-semibold tracking-tight text-primary">
              Connect
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition-colors duration-200 hover:translate-x-1"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition-colors duration-200 hover:translate-x-1"
              >
                Github
              </a>
              <a
                href="https://discord.cdnmsg.club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition-colors duration-200 hover:translate-x-1"
              >
                Discord
              </a>
            </div>
          </div>

          <div className="flex flex-col w-1/2 space-y-6">
            <div className="h-px w-full bg-white"></div>
            <p className="text-2xl font-semibold tracking-tight text-primary">
              Connect
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-secondary transition-colors duration-200 hover:translate-x-1"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-secondary transition-colors duration-200 hover:translate-x-1"
              >
                Github
              </a>
              <a
                href="https://discord.cdnmsg.club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-secondary transition-colors duration-200 hover:translate-x-1"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;

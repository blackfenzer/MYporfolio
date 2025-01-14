import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "motion/react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <footer className="relative min-h-[300px] overflow-hidden" ref={ref}>
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
      <div className="relative z-10 container mx-auto px-6 py-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <p>email@example.com</p>
            <p>+1 234 567 890</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-300">
                GitHub
              </a>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Location</h3>
            <p>New York, NY</p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

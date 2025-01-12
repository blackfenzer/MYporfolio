import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerWidth = useTransform(scrollY, [0, 50], ["80%", "100%"]);

  const headerTop = useTransform(scrollY, [0, 50], ["2rem", "0rem"]);

  // Update isScrolled state based on scroll position
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setIsScrolled(value > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.header
      style={{
        width: headerWidth,
        top: headerTop,
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 
        ${
          isScrolled
            ? "bg-white shadow-md rounded-none"
            : "bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg"
        } 
        transition-colors duration-300`}
    >
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600"
          >
            Name
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-blue-600"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ x: 4 }}
                className="block text-gray-700 hover:text-blue-600"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;

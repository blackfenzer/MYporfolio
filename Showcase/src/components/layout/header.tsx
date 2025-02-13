import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "../../utils/ThemeSwitcher";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerWidth = useTransform(scrollY, [0, 50], ["80%", "100%"]);

  const headerTop = useTransform(scrollY, [0, 50], ["2rem", "0rem"]);
  const { theme } = useTheme();
  // Update isScrolled state based on scroll position
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setIsScrolled(value > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);
  const scrollToSection = (id: string, offset = 0) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navItems = ["Home", "Projects", "Stack", "Contact"];

  return (
    <motion.header
      style={{
        width: headerWidth,
        top: headerTop,
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 
        ${
          isScrolled
            ? "bg-bgSecondary backdrop-blur shadow-md rounded-none"
            : "bg-bgPrimary backdrop-blur-sm rounded-2xl shadow-lg"
        } 
        transition-colors duration-300 theme-${theme}`}
    >
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, type: "spring" }}
            className="text-2xl font-bold text-primary"
            onClick={() => scrollToSection("#home")}
          >
            Showcase
          </motion.div>

          {/* Switch */}
          <ThemeSwitcher />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: 4 }}
                className="text-primary hover:text-secondary"
                // href={`#${item.toLowerCase()}`}
                onClick={() => scrollToSection(`#${item.toLowerCase()}`, 70)}
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:text-secondary"
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
                className="block text-primary hover:text-blue-600"
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

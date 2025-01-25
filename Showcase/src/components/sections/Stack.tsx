import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { TiltCard } from "../ui/TiltCard";
import { useRef } from "react";

const skills = [
  {
    icon: "https://img.icons8.com/color/48/000000/python.png",
    title: "Python",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/typescript.png",
    title: "TypeScript",
  },
  { icon: "https://img.icons8.com/color/48/000000/css3.png", title: "CSS3" },
  { icon: "https://img.icons8.com/color/48/000000/nextjs.png", title: "Next" },
  {
    icon: "https://img.icons8.com/color/48/000000/vue-js.png",
    title: "Vue",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    title: "PostgreSQL",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    title: "MongoDB",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/golang.png",
    title: "Go",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/git.png",
    title: "Git",
  },
  {
    icon: "https://img.icons8.com/color/48/000000/docker.png",
    title: "Docker",
  },
];

export default function Stack() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="stack"
      className={`theme-${theme} min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary flex-col `}
    >
      <motion.div
        className="text-3xl font-bold text-bgPrimary mb-8"
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        Tech Stack
      </motion.div>
      <div className="container mx-auto px-6 py-24 text-primary flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <TiltCard key={index} src={skill.icon} alt={skill.title} />
        ))}
      </div>
    </section>
  );
}

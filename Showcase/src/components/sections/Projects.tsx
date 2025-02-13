import { motion, useInView } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { useTheme } from "../../context/ThemeContext";
import { useRef } from "react";
import { Newspaper, BedDouble, ChartLine } from "lucide-react";
export default function Home() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const projects = [
    {
      number: "01",
      icon: Newspaper, // Replace with your icon path
      title: "News Aggregator & Comparator Platform ",
      description:
        "Aggregates and compares news from multiple sources using machine learning to generate clear comparisons, concise summaries, and voice-enabled playback. This platform ensures the accuracy of information by cross-referencing various sources, assisting users who prefer auditory content consumption.",
      link: "https://github.com/NewNewNews",
    },
    {
      number: "02",
      icon: BedDouble, // Replace with your icon path
      title: "Hotel Booking Platform ",
      description:
        "Simplifies hotel reservations by allowing users to search, compare, and securely book accommodations. With robust authentication and optimized UI, it streamlines travel planning—saving time and enhancing user trust.",
      link: "https://github.com/2110366-2566-2/pubpab",
    },
    {
      number: "03",
      icon: ChartLine, // Replace with your icon path
      title: "Price Tracking System",
      description:
        "Monitors real-time price fluctuations and visualizes historical trends through interactive graphs. Automated with Celery, it empowers both consumers and sellers to make informed decisions by providing data-driven insights into market trends, allowing users to sit back and stay updated effortlessly. ",
      link: "https://github.com/abhisheknaiidu/pulse-x",
    },
  ];

  return (
    <main
      id="projects"
      className={`container mx-auto px-4 py-8 min-h-screen theme-${theme} flex flex-col`}
    >
      <motion.div className="relative w-full h-16 my-5">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-primary py-4 absolute top-0 left-0 w-full z-10"
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.55,
            delay: 0.4,
            type: "spring",
            bounce: 0.5,
          }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="bg-primary absolute top-0 right-0 h-full rounded-lg"
          initial={{ width: "100%" }}
          animate={isInView ? { width: "0%" } : { width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ zIndex: 1 }}
        />
      </motion.div>

      <div className="grid gap-8 mt-5">
        {projects.map((project, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className={`flex flex-col md:flex-row items-center justify-between gap-4 ${
                index % 2 === 0 ? "" : "md:pl-20"
              }`}
            >
              <motion.div
                className="w-full"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
              >
                <ProjectCard number={project.number} Icon={project.icon} />
              </motion.div>
              <article className="flex flex-col items-start justify-between gap-1.5 p-5 relative h-full">
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-primary"
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 7,
                      damping: 7,
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-secondary mt-2 break-words max-w-4xl"
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 7,
                      damping: 7,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                  >
                    {project.description}
                  </motion.p>
                </div>
                <motion.a
                  className="relative w-fit"
                  initial="initial"
                  whileHover="hover"
                  href={project.link}
                >
                  {/* Background layer */}
                  <motion.div
                    className="absolute rounded-lg bg-bgSecondary z-10"
                    variants={{
                      initial: {
                        top: 8,
                        left: -8,
                        right: 8,
                        bottom: -8,
                      },
                      hover: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      },
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Main button */}
                  <motion.div className="relative border border-secondary px-6 py-2 rounded-lg font-medium bg-bgPrimary text-primary">
                    <p className="z-30">project name</p>
                  </motion.div>
                </motion.a>
              </article>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}

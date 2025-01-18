import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

export default function Home() {
  const projects = [
    {
      number: "01",
      image: "/pulse-x.png", // Replace with your image path
      title: "Pulse-X State Management",
      description:
        "Pulse-X is a state management library for Flutter projects.",
      link: "https://github.com/abhisheknaiidu/pulse-x",
    },
    {
      number: "02",
      image: "/notee.png", // Replace with your image path
      title: "Notee Personal Management App",
      description: "Notee is a personal management app built with Flutter.",
      link: "https://github.com/abhisheknaiidu/pulse-x",
    },
    {
      number: "03",
      image: "/threads.png", // Replace with your image path
      title: "Threads Logo Animation",
      description:
        "Animated Facebook Threads App Logo made with custom paths and painters.",
      link: "https://github.com/abhisheknaiidu/pulse-x",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#3e3e3e]">
        Projects
      </h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between gap-4 ${
              index % 2 === 0 ? "" : "md:pl-20"
            }`}
          >
            <ProjectCard
              number={project.number}
              image={project.image}
              title={project.title}
            />
            <article className="flex flex-col items-start justify-between gap-1.5 p-5 relative h-full">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#3e3e3e]">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2 break-words max-w-md">
                  {project.description}
                </p>
              </div>
              <motion.a
                className="relative w-fit"
                initial="initial"
                whileHover="hover"
                href={project.link}
              >
                {/* Background layer */}
                <motion.div
                  className="absolute rounded-lg bg-blue-600/20 z-10"
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
                <motion.div className="relative border border-gray-300 px-6 py-2 rounded-lg font-medium bg-white">
                  <p className="z-30">project name</p>
                </motion.div>
              </motion.a>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}

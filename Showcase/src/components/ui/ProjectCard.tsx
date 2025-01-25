import { useTheme } from "../../context/ThemeContext";

export default function ProjectCard({
  number,
  image,
  title,
}: {
  number: string;
  image: string;
  title: string;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 bg-secondary p-4 rounded-lg shadow-lg justify-between grow max-w-3xl theme-${theme}`}
    >
      <div className="text-3xl font-bold text-primary">{number}</div>
      <div className="flex items-center justify-center w-full md:w-1/4 h-40 bg-secondary rounded-lg">
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

import { LucideIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ProjectCard({
  number,
  Icon,
}: {
  number: string;
  Icon: LucideIcon;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 bg-secondary p-4 rounded-lg shadow-lg justify-between grow max-w-2xl theme-${theme}`}
    >
      <div className="text-3xl font-bold text-primary">{number}</div>
      <div className="flex items-center justify-center w-full md:w-1/4 h-40 bg-secondary rounded-lg">
        <div className="icon-container">
          {/* Render the Lucide icon */}
          <Icon className="size-14 text-bgPrimary" />
        </div>
      </div>
    </div>
  );
}

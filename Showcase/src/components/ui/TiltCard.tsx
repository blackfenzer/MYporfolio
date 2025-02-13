import { useState, MouseEvent, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export const TiltCard = ({ src, alt }: { src: string; alt: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`theme-${theme} card relative h-30 w-30 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-xl bg-white transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform`}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(2000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-primary via-secondary opacity-75 blur-xl" />
        <div className="relative flex h-full w-full select-none items-center justify-center rounded-lg bg-secondary text-sm font-light text-secondary">
          <img src={src} alt={alt} className="w-12 h-12" />
        </div>
      </div>
    </>
  );
};

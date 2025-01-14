import { ReactNode } from "react";
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export type ThemeType = "black" | "orange" | "purple" | "green";

export interface ThemeProviderProps {
  children: ReactNode; // This allows any valid React child
}

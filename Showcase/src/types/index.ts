export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

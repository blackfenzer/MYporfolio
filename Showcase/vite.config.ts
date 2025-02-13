import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// const ReactCompilerConfig = {
//   /* ... */
// };
// https://vite.dev/config/
export default defineConfig({
  // plugins: [react(ReactCompilerConfig)],
  build: {
    outDir: "dist", // Adjust output directory if needed
  },
  base: "/MYportfolio/",
});

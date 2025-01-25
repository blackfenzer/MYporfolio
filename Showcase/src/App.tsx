import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Stack from "./components/sections/Stack";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {" "}
      <Header />
      <main>
        {/* <div className="min-h-screen bg-white dark:bg-gray-900"></div> */}
        <Hero />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}

export default App;

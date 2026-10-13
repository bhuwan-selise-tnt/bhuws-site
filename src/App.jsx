import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="sheet">
      <Header />
      <main id="top">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

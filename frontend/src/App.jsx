import Contact from "./Components/Contact.jsx";
import Experience from "./Components/Expiernce.jsx";
import Project from "./Components/Projects.jsx";
import Skills2 from "./Components/Skills2.jsx";
import About from "./Components/About.jsx";

import HeroSectionDouble from "./Components/HeroSectionDouble.jsx";

import NavBar2 from "./Components/Navbar2.jsx";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBar2 />

      <main>
        <section id="home">
          <HeroSectionDouble />
        </section>

        <section id="Experience">
          <Experience />
        </section>

        <section id="Project">
          <Project />
        </section>

        <section id="Skills">
          <Skills2 />
        </section>

        {/* 👇 ABOUT SECTION ADDED HERE */}
        <section id="About">
          <About />
        </section>

        <section id="Contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;

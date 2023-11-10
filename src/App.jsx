import { ReactDOM, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Experience, Contact, Navbar, Tech, Hero, Projects, Scroll, Footer } from "./components";

const App = () => {
  const [currSection, setSection] = useState('');

  useEffect(() => {
    // function to handle scrolling into view of a section
    function scrollToView() {
      // obtain the query selectors of all the span with id's (the sections)
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        // obtain element box containing the entire section
        const top = window.scrollY;
        const offset = section.offsetTop - 50;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= (offset) && top <= (offset + height - 200) && id != currSection) {
          setSection(id);
        }
      })
    }

    window.addEventListener("scroll", scrollToView);

    return () => {
      window.removeEventListener("scroll", scrollToView)
    }
  })

  return (
    <BrowserRouter>
      <div className="bg-primary">
        <div
          className="bg-herobg bg-no-repeat bg-cover
        bg-center">
          <Navbar currSection={currSection} setSection={setSection} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

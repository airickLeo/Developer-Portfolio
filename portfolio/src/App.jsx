import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Experience, Contact, Navbar, Tech, Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Contact />
    </BrowserRouter>
  )
}

export default App

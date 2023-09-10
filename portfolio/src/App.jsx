import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Experience, Contact, Navbar, Tech, Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <div 
        className="bg-herobg bg-no-repeat bg-cover
        bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App

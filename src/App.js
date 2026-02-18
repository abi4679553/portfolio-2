import { Routes,Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Frontpage from "./components/Frontpage";
import Header from "./components/Header"




function App() {
  return (
    <div className="App">

      <Header />
      <Frontpage />
      <About />
      <Experience />
      <Contact />
      <Footer />
  
    </div>
  );
}

export default App;

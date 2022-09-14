import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Testimonial from "./components/Testimonial";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
      <>
     <NavBar/>
     <Home />
     <SocialLinks />
     <About/>
     <Skills/>
     <Testimonial/>
     <Footer/>
     
      </>
  );
}

export default App;

import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1587233606800-1302fdd0a433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        title="About"
        btnClass="hide"
      ></Hero>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default About;

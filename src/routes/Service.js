import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1557750255-c76072a7aad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="Service"
        btnClass="hide"
      ></Hero>
      <Trip></Trip>
      <Footer></Footer>
    </>
  );
}

export default Service;

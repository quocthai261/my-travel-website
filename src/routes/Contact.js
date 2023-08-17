import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1503432548458-a4bdc273826a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1187&q=80"
        title="Contact"
        btnClass="hide"
      ></Hero>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default Contact;

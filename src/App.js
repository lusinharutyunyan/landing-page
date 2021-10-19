import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Main from "./components/Header";
import CallToAction from "./components/CallToAction";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid>
      <Main />
      <Hero />
      <Features />
      <CallToAction />
      <Partners />
      <Testimonials />
      <Pricing />
      <ContactUs />
      <Footer />
    </Container>
  );
}

export default App;

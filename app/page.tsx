import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Navbar from "./components/Navbar";
import ProductShowCase from "./components/ProductShowCase";


export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}

import Navbar from "../components/landing/Navbar";
import Home from "../components/landing/Home";
import Service from "../components/landing/Service";
import About from "../components/landing/About";
import Blog from "../components/landing/Blog";
import Footer from "../components/landing/Footer";
import Diagnostics from "../components/landing/Diagnostics";
const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Diagnostics />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default Index;

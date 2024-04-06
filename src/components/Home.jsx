import Contact from "./Contact";
import Features from "./Features";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <Features />
      <Contact />
    </div>
  );
};

export default Home;

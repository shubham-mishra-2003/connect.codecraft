import backgroundVideo from "../assets/background.mp4";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    const parallax = document.getElementById("hero");
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="p-10 pt-0 pb-24 h-screen relative" id="hero">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]">
        <source src={backgroundVideo} />
      </video>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-2xl mt-10 text-center w-fit bg-gradient-to-tr p-2 rounded-xl border-white border-2 shadow-lg shadow-gray-100 from-blue-500 to-purple-500">
          No.1 Online code editor for html css and javascript
        </h1>
        <h2 className="text-6xl bg-gradient-to-r from-yellow-600 via-pink-400 to-purple-400 text-transparent bg-clip-text">
          <Typewriter
            options={{
              strings: ["Learn", "Write", "Create", "Save"],
              autoStart: true,
              loop: true
            }}
          />
        </h2>
        <p className="text-lg md:text-2xl text-center text-gray-300">
          Experience the real-time code editor and save your work without the
          hesitation of providing login credentials.
        </p>
        <Link
          to="./editor"
          className="bg-blue-700 text-slate-300 p-2 rounded-lg text-2xl hover:bg-sky-900"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

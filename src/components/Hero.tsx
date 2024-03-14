import logo from "@/assets/logo.png";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero-container">
      <Navbar />
      <div className="flex items-center justify-center bg-gradient-to-b from-transparent to-black w-full h-[calc(100%-20px)]">
        <div className="w-full text-center text-white md:w-2/3">
          <h1 className="text-5xl font-extrabold m-3">
            Rajshahi University Higher Study Club
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            ad, aliquam ducimus ipsam quo rem, asperiores eius, inventore
            exercitationem voluptas minima! Eu
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

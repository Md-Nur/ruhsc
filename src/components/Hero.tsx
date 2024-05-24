import logo from "@/assets/logo.png";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <section id="hero-container" className="mb-20">
        <div className="flex items-center justify-center bg-gradient-to-b from-transparent to-base-100 w-full h-full">
          <div className="w-full text-center text-base-content md:w-2/3">
            <h1 className="text-3xl lg:text-6xl font-extrabold m-3 ">
              Wellcome to RUHSC
            </h1>
            <p>
              Rajshahi University Higher Study Club. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officia corporis consectetur minus
              facilis deleniti nihil cupiditate praesentium repudiandae veniam
              vel sequi aliquam beatae illo delectus, provident aperiam alias
              quibusdam quos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

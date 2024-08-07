const Hero = () => {
  return (
    <>
      <section id="hero-container" className="mb-20">
        <div className="flex items-center justify-center bg-gradient-to-b from-transparent to-base-100 w-full h-full">
          <div className="w-full text-center text-base-content md:w-2/3">
            <h1 className="text-3xl lg:text-6xl font-extrabold m-3 ">
              Welcome to RUHSC
            </h1>
            <p className="text-justify max-w-xl mx-auto">
              A non-partisan org envisioning Higher Education abroad from
              Bangladesh offering updates on
              scholarship/mentorship/fellowship/job circular, global
              oppourtunites & diversity of possibilities
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

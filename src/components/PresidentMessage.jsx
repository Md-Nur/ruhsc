import tashikVai from "@/assets/president.jpg";
import Image from "next/image";

const PresidentMessage = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={tashikVai}
          alt="Tashik"
          className="rounded-xl w-full md:w-1/2"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Message from President</h1>
          <p className="py-6 pr-1 text-justify">
            Dear fellow enthusiasts, It is my pleasure to address you all as the
            President of the Rajshahi University Higher Study Club. As an
            organization dedicated to promoting scientific inquiry and
            education, we strive to create an environment that fosters
            curiosity, critical thinking, and innovation. Our club offers a
            variety of activities and events that aim to engage and inspire
            individuals from all backgrounds to explore the wonders of science.
            From science fairs and workshops to guest lectures and seminars, we
            strive to provide our members with opportunities to expand their
            knowledge and skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;

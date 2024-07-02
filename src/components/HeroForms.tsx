import Image from "next/image";
import { ReactNode } from "react";

const HeroForms = ({
  children,
  title,
  imgUrl = "",
}: {
  children: ReactNode;
  title: string;
  imgUrl: string;
}) => {
  return (
    <div className="w-full my-10 h-full">
      <h1 className="text-4xl font-bold text-center py-10 uppercase">
        {title}
      </h1>
      <div className="hero h-full w-full">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full h-full">
          {imgUrl && (
            <div className="card lg:h-full shadow-2xl shrink-0 max-h-[500px]">
              <Image
                src={imgUrl}
                alt={title}
                width={500}
                height={500}
                className="max-w-screen-md mx-auto w-full lg:h-full object-cover rounded-xl max-h-[500px]"
              />
            </div>
          )}
          <div className="card bg-base-200 w-full max-w-md shrink-0 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForms;

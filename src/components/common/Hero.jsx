import React from "react";

const Hero = ({ img, text, hasImg }) => {
  return (
    <>
      {hasImg ? (
        <div className="relative w-full max-h-[350px] md:max-h-[450px]">
          <img
            alt="hero"
            src={img}
            loading="lazy"
            className={`w-full ${
              hasImg ? " max-h-[350px] md:max-h-[450px]" : "h-[250px]"
            } object-cover`}
          />
          <div
            className={`font-extrabold absolute top-0 left-0 w-full h-full bg-mainColor  ${
              hasImg ? "bg-opacity-30" : "bg-opacity-10"
            } text-white flex items-center justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
          >
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className="w-screen bg-mainColor h-[350px]">
          <div className="w-full h-full flex items-center justify-center text-white font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;

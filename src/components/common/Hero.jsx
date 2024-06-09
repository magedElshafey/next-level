import React from "react";

const Hero = ({ img, text, hasImg }) => {
  return (
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
        className={`font-extrabold absolute top-0 left-0 w-full h-full bg-black  ${
          hasImg ? "bg-opacity-40" : "bg-opacity-10"
        } text-white flex items-center justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = ({ img, text }) => {
  return (
    <div className="relative w-full max-h-[350px] md:max-h-[450px]">
      <img
        alt="hero"
        src={img}
        loading="lazy"
        className="w-full max-h-[350px] md:max-h-[450px] object-cover"
      />
      <div className=" font-extrabold absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 text-white flex items-center justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero;

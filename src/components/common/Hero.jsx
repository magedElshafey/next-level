import React from "react";

const Hero = ({ img }) => {
  return (
    <img
      alt="hero"
      src={img}
      loading="lazy"
      className="w-full max-h-[350px] md:max-h-[450px] object-cover"
    />
  );
};

export default Hero;

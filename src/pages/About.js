import React from "react";
import Hero from "../components/common/Hero";
import heroAbout from "../assets/hero-about.jpg";
const About = () => {
  return (
    <div>
      <Hero text="من نحن" img={heroAbout} />
    </div>
  );
};

export default About;

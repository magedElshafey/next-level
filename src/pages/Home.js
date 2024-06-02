import React from "react";
import Hero from "../components/common/Hero";
import heroImg from "../assets/heroHome.jpg";
import Featuers from "../components/home/Featuers";
import About from "../components/home/About";
import Services from "../components/home/Services";
import MainCard from "../components/common/MainCard";
import { useNavigate } from "react-router-dom";
const Home = ({ featuers, aboutUs, contact, services, works }) => {
  const navigate = useNavigate();
  const handleWorksButtonClick = (id) => {
    navigate(`/works/${id}`);
  };
  return (
    <div className=" overflow-x-hidden">
      <Hero img={heroImg} />
      <div className=" bg-bgColor w-screen py-4 flex items-center">
        <div className="container mx-auto px-8 md:px-16 mt-8 md:mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuers.map((item, index) => (
              <Featuers key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-16 mt-8 md:mt-12">
        <About aboutUs={aboutUs} contact={contact} />
      </div>
      <div className=" overflow-hidden">
        <Services data={services} />
      </div>
      <div
        className="container mx-auto px-8 md:px-16 my-8 md:my-12"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <p className="text-center mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold">
          أعمالنا
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.slice(0, 4).map((item, index) => (
            <MainCard data={item} key={index} action={handleWorksButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

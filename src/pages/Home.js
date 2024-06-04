import React from "react";
import Hero from "../components/common/Hero";
import heroImg from "../assets/heroHome.jpg";
import Featuers from "../components/home/Featuers";
import About from "../components/home/About";
import Services from "../components/home/Services";
import MainCard from "../components/common/MainCard";
import { useNavigate } from "react-router-dom";
import Statistics from "../components/home/Statistics";
import Contact from "../components/home/Contact";
import contactImg from "../assets/contact.jpg";
import Clients from "../components/home/Clients";
import Team from "../components/home/Team";
import Steps from "../components/home/Steps";
import Reviews from "../components/home/Reviews";
import ContactDetails from "../components/home/ContactDetails";
const Home = ({
  featuers,
  aboutUs,
  contact,
  services,
  works,
  stats,
  team,
  steps,
  revs,
}) => {
  const navigate = useNavigate();
  const handleWorksButtonClick = (id) => {
    navigate(`/works/${id}`);
  };
  return (
    <div className="overflow-x-hidden">
      <Hero img={heroImg} text="الرئيسية" />
      <div className=" bg-bgColor w-screen py-4 flex items-center">
        <div className="container mx-auto px-8 md:px-16 mt-8 md:mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuers.map((item, index) => (
              <Featuers key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-16 mt-8 md:mt-12 overflow-x-hidden">
        <About aboutUs={aboutUs} contact={contact} />
      </div>

      <Services data={services} />

      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12 overflow-x-hidden">
        <p className="text-center mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
          أعمالنا
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.slice(0, 4).map((item, index) => (
            <MainCard data={item} key={index} action={handleWorksButtonClick} />
          ))}
        </div>
      </div>
      <div className="w-screen bg-bgColor py-5 my-8 md:my-12 flex items-center ">
        <div className="container mx-auto px-8 md:px-16 overflow-x-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Statistics data={stats} />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  items-center">
          <img
            alt="contact"
            loading="lazy"
            src={contactImg}
            className="w-full h-[550px] object-cover"
          />
          <div className="container mx-auto px-8 md:px-16">
            <Contact />
          </div>
        </div>
      </div>
      <Clients />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <Team data={team} />
      </div>
      <div className="bg-darkColor my-8 md:my-12 py-5 flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {steps.map((item, index) => (
              <Steps key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-bgColor py-5 flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <Reviews data={revs} />
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <ContactDetails data={contact} />
      </div>
    </div>
  );
};

export default Home;

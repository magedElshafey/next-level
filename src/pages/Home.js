import React from "react";
import Hero from "../components/common/Hero";
import Featuers from "../components/home/Featuers";
import About from "../components/home/About";
import Services from "../components/home/Services";
import MainCard from "../components/common/MainCard";
import { useNavigate } from "react-router-dom";
import Statistics from "../components/home/Statistics";
import Contact from "../components/home/Contact";
import contactImg from "../assets/5124556-min.jpg";
import Clients from "../components/home/Clients";
import Team from "../components/home/Team";
import Steps from "../components/home/Steps";
import ContactDetails from "../components/home/ContactDetails";
import { useGlobalContext } from "../global/GlobalContext";
import { useTranslation } from "react-i18next";
const Home = ({ stats, steps }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleWorksButtonClick = (index) => {
    navigate(`/works/${++index}`);
  };
  const { data } = useGlobalContext();
  return (
    <div className="overflow-x-hidden">
      <Hero img={data.banner[0]} hasImg={true} />
      <div className=" bg-bgColor w-screen py-4 flex items-center">
        <div className="container mx-auto px-8 md:px-16 mt-8 md:mt-12">
          <div
            className={`grid ${
              i18n.language === "ar" ? "grid-cols-2" : "grid-cols-1"
            } lg:grid-cols-4 gap-4 md:gap-8`}
          >
            {data?.features.map((item, index) => (
              <Featuers key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-16 mt-8 md:mt-12 overflow-x-hidden">
        <About />
      </div>

      <Services />

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
            className="w-full h-[250px] md:h-[550px] object-cover"
          />
          <div className="container mx-auto px-8 md:px-16">
            <Contact />
          </div>
        </div>
      </div>
      <Clients data={data.clients} />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <Team />
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
      {/* <div className="bg-bgColor py-5 flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <Reviews data={revs} />
        </div>
      </div> */}
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <ContactDetails />
      </div>
    </div>
  );
};

export default Home;

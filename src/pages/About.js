import React from "react";
import Hero from "../components/common/Hero";
import heroAbout from "../assets/من نحن.png";
import Spinner from "../components/common/Spinner";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import Team from "../components/home/Team";
import ContactDetails from "../components/home/ContactDetails";
const fetchData = async () => {
  return await request({
    url: "/about",
  });
};
const About = () => {
  const { isLoading, data } = useQuery("about", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Hero img={heroAbout} hasImg={true} />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        {data?.data?.data?.about?.length
          ? data?.data?.data?.about?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-3 md:mb-3 gap-4 md:gap-8 flex-col ${
                  index % 2 === 0 ? "  md:flex-row" : " md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    alt="about/img"
                    src={item.image}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col items-center gap-4">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-mainColor">
                    {item.title}
                  </p>
                  <p className="text-center text-darkColor">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          : null}
        <div className="my-8 md:my-12">
          <Team />
        </div>
        <div className="my-8 md:my-12">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default About;

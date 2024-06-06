import React from "react";
import Hero from "../components/common/Hero";
import heroImg from "../assets/heroServices.jpg";
import { useQuery } from "react-query";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import MainCard from "../components/common/MainCard";
import { useNavigate } from "react-router-dom";
const fetchData = () => {
  return request({
    url: "/services",
  });
};
const Services = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => navigate(`/services/${id}`);
  const { isLoading, data } = useQuery("services", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Hero text="خدماتنا" img={heroImg} />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data?.data?.data?.services?.length ? (
            data?.data?.data?.services.map((item, index) => (
              <MainCard
                key={index}
                data={item}
                action={() => handleNavigate(item.id)}
              />
            ))
          ) : (
            <p className="w-full flex items-center justify-center font-bold text-darkColor">
              لا يوجد خدمات الان
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;

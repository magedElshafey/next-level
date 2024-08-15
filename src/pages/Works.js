import React, { useState } from "react";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Hero from "../components/common/Hero";
import heroImg from "../assets/اعمالنا.png";
import { useNavigate } from "react-router-dom";
import Clients from "../components/home/Clients";
import { useGlobalContext } from "../global/GlobalContext";
import MainCard from "../components/common/MainCard";
const getWorks = () => {
  return request({
    url: "/all-work",
  });
};
const Works = () => {
  const { data: globalData } = useGlobalContext();
  const { isLoading, data } = useQuery("works", getWorks);
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);
  if (isLoading) {
    return <Spinner />;
  }
  const handleButtonClick = (item) => {
    setActiveId(item.id);
  };

  const handleNavigate = (id) => navigate(`/works/${id}`);
  return (
    <div>
      <Hero img={heroImg} text="أعمالنا" hasImg={true} />
      <div className="my-8 md:my-12">
        <Clients data={globalData.clients} />
      </div>
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.data?.data?.works?.length ? (
            <>
              {data?.data?.data?.works.map((item, index) => (
                <MainCard
                  key={index}
                  data={item}
                  action={() => handleNavigate(item.id)}
                />
              ))}
            </>
          ) : (
            <p className="text-darkColor font-bold  text-xl md:text-2xl lg:text-3xl">
              لا يوجد اعمال الان
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;

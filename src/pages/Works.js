import React, { useState } from "react";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Hero from "../components/common/Hero";
import heroImg from "../assets/heroWorks.jpg";
import { useNavigate } from "react-router-dom";
import Clients from "../components/home/Clients";
import { useGlobalContext } from "../global/GlobalContext";
import MainCard from "../components/common/MainCard";
const getCategories = () => {
  return request({
    url: "/categories",
  });
};
const Works = () => {
  const { data: globalData } = useGlobalContext();
  const { isLoading, data } = useQuery("categories", getCategories);
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);
  if (isLoading) {
    return <Spinner />;
  }
  const handleButtonClick = (item) => {
    setActiveId(item.id);
  };
  const handleNavigate = (index) => navigate(`/works/${++index}`);
  return (
    <div>
      <Hero img={heroImg} />
      <div className="my-8 md:my-12">
        <Clients data={globalData.clients} />
      </div>
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap my-8 overflow-hidden ">
          {data?.data?.data?.categories.map((item, index) => (
            <button
              onClick={() => handleButtonClick(item)}
              className={`px-4 py-3 rounded-lg duration-300 bg-darkColor text-white flex items-center justify-center w-[150px] md:w-[250px] ${
                activeId === item.id ? "bg-secondColor text-white" : null
              }`}
              key={index}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.data?.data?.categories[activeId - 1]?.works?.length ? (
            <>
              {data?.data?.data?.categories[activeId - 1].works.map(
                (item, index) => (
                  <MainCard
                    key={index}
                    data={item}
                    action={() => handleNavigate(index)}
                  />
                )
              )}
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

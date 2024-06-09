import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useParams } from "react-router-dom";
import Hero from "../components/common/Hero";
import banner from "../assets/portBanner-min.jpg";
import { FaCheckCircle } from "react-icons/fa";

const fetchData = (v) => {
  return request({
    url: `/work/${v}`,
  });
};
const Work = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery(["details", id], () => fetchData(id));
  if (isLoading) {
    return <Spinner />;
  }
  console.log("data returned from work page", data);
  return (
    <div>
      <Hero img={banner} text={data?.data?.data?.work?.title} hasImg={false} />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <img
              alt={data?.data?.data?.work?.title}
              src={data?.data?.data?.work?.image}
              className="w-full h-[200px] md:h-[350px] object-cover"
            />
          </div>
          <div className="text-center">
            <p className=" font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-mainColor mb-5">
              {data?.data?.data?.work?.title}
            </p>
            <p className=" text-slate-500 mb-8">
              {data?.data?.data?.work?.description}
            </p>
            {data?.data?.data?.work?.services?.length ? (
              <div>
                <p className="text-secondColor font-bold text-lg md:text-xl lg:text-2xl mb-6">
                  الخدمات المقدمة
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {data?.data?.data?.work?.services?.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <FaCheckCircle className="text-mainColor mt-1" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

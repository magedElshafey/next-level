import React from "react";
import Hero from "../components/common/Hero";
import Spinner from "../components/common/Spinner";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { request } from "../services/axios";
import heroBlog from "../assets/heroBlog.jpg";
import MainBtn from "../components/common/MainBtn";
const fetchData = async () => {
  return await request({
    url: "/blogs",
  });
};

const Blogs = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => navigate(`/blogs/${id}`);
  const { isLoading, data } = useQuery("blogs", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Hero text="المدونة" img={heroBlog} />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        {data?.data?.data?.blogs?.length ? (
          data?.data?.data?.blogs?.map((item, index) => (
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
                  className="w-full h-[300px] md:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-center text-mainColor font-bold  mb-3">
                  {item.title}
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.description.substr(0, 250),
                  }}
                  className=" text-darkColor mb-4"
                ></p>
                <div className="w-full flex justify-center">
                  <MainBtn
                    action={() => handleNavigate(item.id)}
                    text="مشاهدة المزيد"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full flex items-center font-bold text-darkColor">
            لا يوجد مقالات الان
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;

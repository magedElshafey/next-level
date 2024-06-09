import React from "react";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Hero from "../components/common/Hero";
import { useParams, useNavigate } from "react-router-dom";
import MainBtn from "../components/common/MainBtn";

import Meta from "../components/common/Meta";
const fetchData = (v) => {
  return request({
    url: `/blogs/${v}`,
  });
};
const Blog = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => navigate(`/blogs/${id}`);
  const { id } = useParams();
  const { isLoading, data } = useQuery(["blogs-details", id], () =>
    fetchData(id)
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Meta
        title={data?.data?.data?.blog?.meta_title}
        desc={data?.data?.data?.blog?.meta_description}
      />
      <Hero
        text={data?.data?.data?.blog?.title}
        img={data?.data?.data?.blog?.addtionalImage}
        hasImg={true}
      />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className=" bg-bgColor p-3 flex items-center">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.data?.blog?.description,
            }}
          />
        </div>
        {data?.data?.data?.related_blogs?.length ? (
          <div className="my-8 md:my-12">
            <p className="text-center mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
              مقالات اخري قد تنال اعجابك
            </p>
            {data?.data?.data?.related_blogs.slice(0, 4).map((item, index) => (
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
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Blog;

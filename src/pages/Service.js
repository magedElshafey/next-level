import React from "react";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Hero from "../components/common/Hero";
import { useParams } from "react-router-dom";
import Meta from "../components/common/Meta";
const fetchData = async (v) => {
  return await request({
    url: `/services/${v}`,
  });
};
const Service = () => {
  const params = useParams();
  const { id } = params;
  const { isLoading, data } = useQuery(["services-details", id], () =>
    fetchData(id)
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Meta
        title={data?.data?.data?.service?.meta_title}
        desc={data?.data?.data?.service?.meta_description}
      />
      <Hero
        text={data?.data?.data?.service?.title}
        img={data?.data?.data?.service.image}
        hasImg={true}
      />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className=" bg-bgColor py-3 flex items-center px-8">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.data?.service?.description,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Service;

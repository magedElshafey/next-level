import React, { useEffect } from "react";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Hero from "../components/common/Hero";
import { useParams, useNavigate } from "react-router-dom";
import Meta from "../components/common/Meta";
import ServiceForm from "../components/ServiceForm";
const fetchData = async (v) => {
  return await request({
    url: `/services/${v}`,
  });
};
const Service = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id, slug } = params;
  const { isLoading, data } = useQuery(["services-details", id], () =>
    fetchData(id)
  );
  useEffect(() => {
    if (data && !slug && data?.data?.data?.blog?.slug) {
      // Update the URL with the slug without reloading the page
      navigate(`/services/${id}/${data?.data?.data?.service?.slug}`, {
        replace: true,
      });
    }
  }, [data, slug, id, navigate]);
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
        hasImg={false}
      />
      <div>
        <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
          <div className=" bg-bgColor py-3 flex items-center px-8 mb-8 lg:mb-12">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.service?.description,
              }}
            />
          </div>
        </div>
        <ServiceForm serviceId={id} />
      </div>
    </>
  );
};

export default Service;

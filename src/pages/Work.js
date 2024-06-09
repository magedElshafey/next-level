import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const fetchData = (v) => {
  return request({
    url: `/work/${v}`,
  });
};
const Work = () => {
  const { i18n, t } = useTranslation();
  const { id } = useParams();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    verical: false,
    slidesToScroll: 2,
    initialSlide: 0,
    cssEase: "linear",
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const { isLoading, data } = useQuery(["details", id], () => fetchData(id));
  if (isLoading) {
    return <Spinner />;
  }
  return <div>Work</div>;
};

export default Work;

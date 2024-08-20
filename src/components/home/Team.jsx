import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "../../global/GlobalContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
const Team = () => {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    slidesToShow: 4,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    speed: 2000,
    autoplaySpeed: 2000,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const { data } = useGlobalContext();
  const sliderRef = useRef(null);
  const slickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div>
      <p className="text-center mb-8 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
        {t("team members")}
      </p>
      <div className="flex items-center justify-start my-6 gap-4">
        <button
          className=" cursor-pointer flex items-center justify-center text-white bg-mainColor h-10 w-10 rounded-[50%]"
          onClick={slickNext}
        >
          {i18n.language === "ar" ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        <button
          className=" cursor-pointer flex items-center justify-center text-white bg-mainColor h-10 w-10 rounded-[50%]"
          onClick={slickPrev}
        >
          {i18n.language === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <Slider dir="rtl" ref={sliderRef} {...settings}>
        {data?.team.map((item, index) => (
          <div key={index} className="px-3">
            <img
              alt={item.name}
              src={item.image}
              className="w-full h-[140px] md:h-[320px] object-cover duration-300 team-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;

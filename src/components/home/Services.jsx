import React from "react";
import serv from "../../assets/serv.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "../../global/GlobalContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
const Services = () => {
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
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
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
          slidesToShow: 1,
        },
      },
    ],
  };
  const { data } = useGlobalContext();
  return (
    <div
      style={{
        backgroundImage: `url(${serv})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
        width: "100vw",
        padding: "30px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container mx-auto px-8 md:px-16">
        <p className=" font-extrabold text-center mb-5 text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          خدماتنا
        </p>
        <Slider dir="ltr" ref={sliderRef} {...settings}>
          {data?.our_services.map((item, index) => (
            <div key={index} className="px-3">
              <div className=" rounded-lg bg-white p-3 h-[380px] flex items-center justify-center">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 mx-auto object-cover"
                  />

                  <p className="font-bold text-center text-lg md:text-xl   text-darkColor my-3">
                    {item.title}
                  </p>
                  <p className="text-slate-600  text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-end my-6 gap-4">
          <button
            className=" cursor-pointer flex items-center justify-center text-white bg-secondColor h-10 w-10 rounded-[50%]"
            onClick={slickPrev}
          >
            <FaChevronRight />
          </button>
          <button
            className=" cursor-pointer flex items-center justify-center text-white bg-secondColor h-10 w-10 rounded-[50%]"
            onClick={slickNext}
          >
            <FaChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "../../global/GlobalContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false, // Enable autoplay

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
        فريق العمل
      </p>
      <div className="flex items-center justify-start my-6 gap-4">
        <button
          className=" cursor-pointer flex items-center justify-center text-white bg-mainColor h-10 w-10 rounded-[50%]"
          onClick={slickPrev}
        >
          <FaChevronRight />
        </button>
        <button
          className=" cursor-pointer flex items-center justify-center text-white bg-mainColor h-10 w-10 rounded-[50%]"
          onClick={slickNext}
        >
          <FaChevronLeft />
        </button>
      </div>
      <Slider dir="ltr" ref={sliderRef} {...settings}>
        {data?.team.map((item, index) => (
          <div key={index} className="px-3">
            <img
              alt={item.name}
              src={item.image}
              className="w-full h-[350px] object-contain duration-300 team-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;

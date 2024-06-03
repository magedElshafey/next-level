import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Reviews = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 1000,
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
  return (
    <div>
      <p className="text-center mb-8 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
        اراء العملاء
      </p>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-3">
            <div className=" bg-white border-2 cursor p-2 ">
              <div className="flex flex-col items-center gap-1">
                <img
                  alt={item.name}
                  src={item.img}
                  className="w-[120px] h-[120px] rounded-[50%] object-cover"
                />
                <p className="font-bold text-center text-xl md:text-2xl text-mainColor">
                  {item.name}
                </p>
                <p className="text-slate-600 text-end">{item.position}</p>
                <p className="text-slate-400">{item.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;

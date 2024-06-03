import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = ({ data }) => {
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
        فريق العمل
      </p>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-3">
            <div className=" bg-white border-2 cursor-pointer team-box overflow-hidden ">
              <div>
                <img
                  alt={item.name}
                  src={item.img}
                  className="w-full max-h-[300px] object-cover duration-300 team-img"
                />
                <p className="font-bold text-center text-xl md:text-2xl p-2  text-mainColor my-3">
                  {item.name}
                </p>
                <p className="text-slate-600 text-end p-2">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;

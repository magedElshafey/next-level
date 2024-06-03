import React from "react";
import serv from "../../assets/serv.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = ({ data }) => {
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
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-3">
              <div className=" rounded-lg bg-white p-3 min-h-[300px] flex items-center justify-center">
                <div>
                  <div className=" bg-secondColor mx-auto text-white flex items-center justify-center w-20 h-20 rounded-[50%]">
                    <p>{item.icon}</p>
                  </div>
                  <p className="font-bold text-center text-xl md:text-2xl  text-darkColor my-3">
                    {item.title}
                  </p>
                  <p className="text-slate-600 text-end">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;

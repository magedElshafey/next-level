import React from "react";
const About = ({ aboutUs, contact }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="my-8 md:my-12 flex items-center justify-between flex-col md:flex-row gap-6 ">
        <div className="md:w-1/2">
          <img
            loading="lazy"
            src={aboutUs.img}
            alt="about"
            className="w-full max-h-[520px] object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <p className="font-bold text-mainColor mb-4 text-lg md:text-xl lg:text-3xl">
            {aboutUs.title}
          </p>
          <p className=" text-darkColor mb-8">{aboutUs.desc}</p>
          <p className=" text-darkColor mb-4">{aboutUs.desc2}</p>
          <div className="w-full flex md:justify-end">
            <a
              href={`tel:${contact.phone}`}
              rel="noreferrer"
              target="_blank"
              className="bg-secondColor  py-3 px-6 flex items-center justify-center  border-darkColor w-fit text-white duration-300 hover:bg-mainColor"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

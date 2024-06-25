import React from "react";
import { useGlobalContext } from "../../global/GlobalContext";
const About = () => {
  const { data } = useGlobalContext();
  return (
    <div className="overflow-x-hidden">
      <div className="my-8 md:my-12 flex items-center justify-between flex-col md:flex-row gap-6 ">
        <div className="md:w-1/2">
          <img
            loading="lazy"
            src={data?.aboutUS?.image}
            alt="about"
            className="w-full max-h-[520px] object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <p className="font-bold text-mainColor text-center mb-4 text-lg md:text-xl lg:text-3xl">
            {data?.aboutUS.title}
          </p>
          <div
            className="  text-darkColor
            mb-8 text-center"
            dangerouslySetInnerHTML={{ __html: data?.aboutUS.description }}
          ></div>

          <div className="w-full flex md:justify-end">
            <a
              href={`tel:${data?.contact.phone}`}
              rel="noreferrer"
              target="_blank"
              className="bg-secondColor  py-3 px-6 flex items-center justify-center  border-darkColor  text-white duration-300 hover:bg-mainColor w-[200px] rounded-lg"
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

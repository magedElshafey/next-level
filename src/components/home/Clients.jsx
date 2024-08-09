import React from "react";
import { useTranslation } from "react-i18next";
const Clients = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgColor w-screen  py-8 my-8 md:my-12 overflow-hidden ">
      <div className="container mx-auto px-8 md:px-16">
        <p className="text-center mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
          {t("happy clients")}
        </p>
        <div className="scroll-content">
          {data.map((item, index) => (
            <img
              alt="partner-img"
              src={item}
              key={index}
              className="w-[180px] max-h-18 object-cover item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

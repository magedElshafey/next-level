import React from "react";

const Clients = ({ data }) => {
  return (
    <div className="bg-bgColor w-screen  py-8 my-8 md:my-12 overflow-hidden ">
      <div className="container mx-auto px-8 md:px-16">
        <p className="text-center mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
          عملاء نسعد بخدمتهم
        </p>
        <div className="scroll-content">
          {data.map((item, index) => (
            <img
              alt="partner-img"
              src={item}
              key={index}
              className="w-[120px] max-h-14 object-cover item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

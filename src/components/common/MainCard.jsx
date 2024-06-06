import React from "react";
import MainBtn from "./MainBtn";
const MainCard = ({ data, action }) => {
  return (
    <div className="bg-white shadow-lg relative box cursor-pointer">
      <img
        loading="lazy"
        src={data.image}
        alt={data.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-3 pb-8">
        <p className="text-center text-mainColor font-bold  mb-3">
          {data.title.substr(0, 100)}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: data.description.substr(0, 100),
          }}
          className=" text-darkColor mb-4"
        ></p>
        <div className="flex items-center justify-center">
          <MainBtn text="مشاهدة المزيد" action={action} />
        </div>
        <div className=" absolute bottom-0 left-0 w-full h-[4px] duration-300 bg-secondColor line rounded-[5px]"></div>
      </div>
    </div>
  );
};

export default MainCard;

import React from "react";

const Featuers = ({ data }) => {
  return (
    <div className=" overflow-x-hidden">
      <div className="bg-white  px-2 py-4 flex items-center justify-center flex-col gap-3 rounded-lg duration-500 feat-box  hover:translate-y-[-10px] cursor-pointer ">
        <div className="text-mainColor icon duration-500">{data.icon}</div>
        <p className=" font-medium text-lg md:text-xl feat-title text-darkColor duration-500">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default Featuers;

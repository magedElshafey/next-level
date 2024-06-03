import React from "react";

const Steps = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative">
        <p
          dir="ltr"
          className=" font-extrabold text-4xl xl:text-5xl text-white"
        >
          0{data.step}
        </p>
        <div className=" absolute top-0 left-[-32px] bg-mainColor flex items-center justify-center text-white h-8 w-8 md:w-10 md:h-10 rounded-[50%]">
          <p>{data.icon}</p>
        </div>
      </div>
      <p className=" font-extrabold text-white text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {data.title}
      </p>
      <p className=" text-slate-400 text-center">{data.desc}</p>
    </div>
  );
};

export default Steps;

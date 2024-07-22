import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/Animation - 1719709863741.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-full container mx-auto px-8 md:px-16">
      <div className="w-full h-full flex flex-col items-center gap-3">
        <div className="w-[350px] h-[350px]">
          <Lottie isClickToPauseDisabled options={defaultOptions} />
        </div>
        <p className=" text-mainColor font-bold text-lg md:text-xl lg:text-2xl">
          حدث خطأ اثناء الاتصال و لم يتم العثور علي الصفحة&#128542;
        </p>
        <div className="flex items-center gap-6 mt-6 flex-wrap">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center p-3 bg-secondColor text-white font-bold rounded-lg"
          >
            اعد المحاولة
          </button>
          <Link
            to="/"
            className="flex items-center justify-center p-3 bg-mainColor text-white font-bold rounded-lg"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

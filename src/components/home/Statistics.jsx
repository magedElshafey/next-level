import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../../global/GlobalContext";
import { FaUser, FaMedal } from "react-icons/fa";
import { MdPlaylistAddCheck } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
const Statistics = () => {
  const { data } = useGlobalContext();
  const [count, setCount] = useState(data?.statistics.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when section becomes visible
  });
  useEffect(() => {
    const incrementAutomatically = () => {
      if (inView) {
        setCount((prevCounters) =>
          prevCounters.map((count, index) =>
            count < data?.statistics[index].number ? count + 1 : count
          )
        );
      }
    };

    const interval = setInterval(incrementAutomatically, 200);
    return () => {
      clearInterval(interval);
    };
  }, [inView, data]);
  return (
    <>
      {data?.statistics?.slice(0, 4).map((item, index) => (
        <div
          ref={ref}
          key={index}
          className="p-4 flex items-center justify-center duration-300 hover:shadow-2xl bg-white rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="text-mainColor">
              {index === 0 ? (
                <FaUser className="w-10 h-10" />
              ) : index === 1 ? (
                <FaMedal className="w-10 h-10" />
              ) : index === 2 ? (
                <MdPlaylistAddCheck className="w-10 h-10" />
              ) : index === 3 ? (
                <AiFillProduct className="w-10 h-10" />
              ) : (
                <MdPlaylistAddCheck className="w-10 h-10" />
              )}
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className="font-bold text-secondColor text-xl md:text-2xl lg:text-3xl">
                {count[index]}
              </p>
              <p className="text-sm text-slate-400">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Statistics = ({ data }) => {
  const [count, setCount] = useState(data.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when section becomes visible
  });
  useEffect(() => {
    const incrementAutomatically = () => {
      if (inView) {
        setCount((prevCounters) =>
          prevCounters.map((count, index) =>
            count < data[index].num ? count + 1 : count
          )
        );
      }
    };

    const interval = setInterval(incrementAutomatically, 50);
    return () => {
      clearInterval(interval);
    };
  }, [inView, data]);
  return (
    <>
      {data.map((item, index) => (
        <div
          ref={ref}
          key={index}
          className="p-4 flex items-center justify-center duration-300 hover:shadow-2xl bg-white rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="text-mainColor">{item.icon}</div>
            <div className="flex flex-col gap-1 items-center">
              <p className="font-bold text-secondColor text-xl md:text-2xl lg:text-3xl">
                {count[index]}
              </p>
              <p className="text-sm text-slate-400">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;

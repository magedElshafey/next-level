import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const FixedBtns = ({ whatsapp }) => {
  const [showArrow, setShowArrow] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleShowArrow = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowArrow);
    return () => {
      document.removeEventListener("scroll", handleShowArrow);
    };
  }, []);
  return (
    <div>
      <div
        onClick={handleScrollToTop}
        className={`fixed bottom-4  w-12 h-12 rounded-[50%] flex justify-center items-center bg-mainColor duration-300 text-white z-50 cursor-pointer ${
          showArrow ? "right-4" : "right-[-300%]"
        }`}
      >
        <FaArrowUpLong size={20} />
      </div>
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-4 w-12 h-12 rounded-[50%] flex justify-center items-center bg-[#25d366] text-white z-50 cursor-pointer"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default FixedBtns;

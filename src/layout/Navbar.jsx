import React, { useState, useRef, useEffect } from "react";
import Logo from "../components/common/Logo";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import WebsiteLinks from "../components/common/WebsiteLinks";
import { navLinks } from "../data/data";
import SocialMedia from "../components/common/SocialMedia";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef();
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-screen   bg-darkColor  shadow-lg py-3 flex items-center ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="w-full flex items-center justify-between">
          <Logo />
          <div className="hidden md:block">
            <WebsiteLinks
              isFlex={true}
              data={navLinks}
              setShowSidebar={setShowSidebar}
            />
          </div>
          <IoMdMenu
            size={30}
            className="text-white cursor-pointer md:hidden"
            onClick={() => setShowSidebar(true)}
          />
        </div>
        <div
          ref={sidebarRef}
          className={`fixed w-[90%] text-white h-screen bg-darkColor z-50 top-0 duration-300 ${
            showSidebar ? "left-0" : "left-[-400%]"
          }`}
        >
          <div className="py-3 px-5">
            <IoClose
              size={20}
              className=" cursor-pointer text-white"
              onClick={() => setShowSidebar(false)}
            />
            <div className="my-5">
              <WebsiteLinks
                data={navLinks}
                isFlex={false}
                setShowSidebar={setShowSidebar}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to="/"
      className="text-darkColor font-bold text-xl md:text-2xl lg:text-3xl"
    >
      logo
      {/* <img
        loading="lazy"
        src={logo}
        alt="logo"
        className="  object-cover w-[150px]"
      /> */}
    </Link>
  );
};

export default Logo;

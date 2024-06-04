import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img
        loading="lazy"
        src={logo}
        alt="logo"
        className="  object-cover w-[100px] md:w-[200px]"
      />
    </Link>
  );
};

export default Logo;

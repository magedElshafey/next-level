import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../global/GlobalContext";
const Logo = () => {
  const { data } = useGlobalContext();
  return (
    <Link to="/">
      <img
        loading="lazy"
        src={data?.site?.logo}
        alt="logo"
        className="  object-cover w-[100px] md:w-[200px]"
      />
    </Link>
  );
};

export default Logo;

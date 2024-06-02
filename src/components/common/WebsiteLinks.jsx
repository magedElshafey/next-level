import React from "react";
import { NavLink } from "react-router-dom";

const WebsiteLinks = ({ isFlex, data, setShowSidebar }) => {
  const handleLinkClick = () => {
    if (!isFlex) {
      setShowSidebar(false);
    } else {
      return null;
    }
  };
  return (
    <ul className={`${isFlex ? "flex items-center gap-3" : null}`}>
      {data.map((link, index) => (
        <li
          key={index}
          className={` ${isFlex ? "text-darkColor" : "mb-4 text-white"}`}
        >
          <NavLink
            onClick={handleLinkClick}
            to={link.path}
            className={`${isFlex ? "text-darkColor" : "text-white"} font-bold`}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default WebsiteLinks;

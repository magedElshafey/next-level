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
    <ul className={`${isFlex ? "flex items-center gap-5" : null}`}>
      {data.map((link, index) => (
        <li key={index} className={`text-white ${isFlex ? null : "mb-4"}`}>
          <NavLink
            onClick={handleLinkClick}
            to={link.path}
            className="text-white font-bold"
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default WebsiteLinks;

import React, { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const LangMenu = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const langMenu = useRef(null);
  const handleClickMenuOutside = (e) => {
    if (langMenu.current && !langMenu.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickMenuOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickMenuOutside);
    };
  }, []);
  return (
    <div
      ref={langMenu}
      className=" relative cursor-pointer"
      onClick={() => setOpenMenu(!openMenu)}
    >
      <FaGlobe size={20} className="  text-white" />
      <ul
        className={`absolute duration-300 shadow-lg bg-white p-3 rounded-md z-[1000] top-[15px] w-[150px] ${
          i18n.language === "ar" ? "left-0" : "right-0"
        } ${openMenu ? "block" : "hidden"} text-start`}
      >
        <li
          className=" cursor-pointer mb-3 w-fit"
          onClick={() => {
            i18n.changeLanguage("ar");
            window.location.reload();
            setOpenMenu(false);
          }}
        >
          {t("ar")}
        </li>
        <li
          className=" cursor-pointer w-fit "
          onClick={() => {
            i18n.changeLanguage("en");
            window.location.reload();
            setOpenMenu(false);
          }}
        >
          {t("en")}
        </li>
      </ul>
    </div>
  );
};

export default LangMenu;

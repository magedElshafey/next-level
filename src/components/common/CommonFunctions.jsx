import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
const CommonFunctions = () => {
  const { i18n } = useTranslation();
  // lang
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language));
  }, [i18n.language]);

  // handle language
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);
  // initiate animation
  useEffect(() => {
    Aos.init({
      duration: 700,
      offset: 120,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return null;
};

export default CommonFunctions;

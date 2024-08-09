import React from "react";
import { useTranslation } from "react-i18next";
const Ending = () => {
  const { i18n } = useTranslation();
  return (
    <div className="ending py-4 mt-6 flex items-center text-white">
      <div className="container mx-auto px-8 md:px-16">
        <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3">
          {i18n.language === "ar"
            ? "دليلك في رحلة التحول الرقمي … نحول أفكارك لواقع"
            : "Your guide in the digital transformation journey...we turn your ideas into reality"}
        </p>
        <p className="text-sm">
          {i18n.language === "ar"
            ? "إن السرعة والإنجاز في أداء الخدمات أمر حرصنا عليه منذ البداية لنصل بعملائنا حيث يريدون في أقل وقت ممكن"
            : "Speed ​​and achievement in performing services is something we have been keen on from the beginning in order to get our customers where they want in the shortest possible time"}
        </p>
      </div>
    </div>
  );
};

export default Ending;

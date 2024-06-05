import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SocialMedia from "../components/common/SocialMedia";
import { useGlobalContext } from "../global/GlobalContext";
const ContactHeader = ({ data }) => {
  const { i18n } = useTranslation();
  const { data: test } = useGlobalContext();
  console.log("this is the data from contact", test);
  return (
    <div className="w-screen  shadow-lg py-3">
      <div className="container mx-auto px-8 md:px-16">
        <div className="w-full flex items-center justify-between flex-col md:flex-row gap-4 md:gap-3">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1">
              <MdEmail />
              <a
                target="_blank"
                href={`https://mailto:${data.email}`}
                rel="noreferrer"
                className=" text-xs md:text-base lowercase"
              >
                {data.email}
              </a>
            </div>
            <div className="flex items-center gap-1">
              {i18n.language === "ar" ? <FaPhone /> : <FaPhoneAlt />}
              <a
                dir="ltr"
                href={`https://wa.me/${data.phone}`}
                rel="noreferrer"
                target="_blank"
                className=" text-xs md:text-base"
              >
                {data.phone}
              </a>
            </div>
          </div>
          <div>
            <SocialMedia data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;

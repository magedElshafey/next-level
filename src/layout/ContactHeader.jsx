import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SocialMedia from "../components/common/SocialMedia";
import { useGlobalContext } from "../global/GlobalContext";
const ContactHeader = () => {
  const { i18n } = useTranslation();
  const { data } = useGlobalContext();
  return (
    <div className="w-screen  shadow-lg py-3">
      <div className="container mx-auto px-8 md:px-16">
        <div className="w-full flex items-center justify-between flex-col md:flex-row gap-4 md:gap-3">
          <div className="flex items-center gap-4 md:gap-8">
            {data?.contact?.email ? (
              <div className="flex items-center gap-1">
                <MdEmail />
                <a
                  target="_blank"
                  href={`mailto:${data?.contact.email}`}
                  rel="noreferrer"
                  className=" text-xs md:text-base lowercase"
                >
                  {data?.contact.email}
                </a>
              </div>
            ) : null}
            {data?.contact?.whatsapp ? (
              <div className="flex items-center gap-1">
                {i18n.language === "ar" ? <FaPhone /> : <FaPhoneAlt />}
                <a
                  dir="ltr"
                  href={`https://wa.me/${data?.contact.whatsapp}`}
                  rel="noreferrer"
                  target="_blank"
                  className=" text-xs md:text-base"
                >
                  {data?.contact.whatsapp}
                </a>
              </div>
            ) : null}
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

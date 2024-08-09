import React, { useState } from "react";
import MainBtn from "../common/MainBtn";
import { useGlobalContext } from "../../global/GlobalContext";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-center mb-8  text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
        {t("contact us")}
      </p>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-secondColor">
              {t("name")}
            </label>
            <input
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
              type="text"
              id="name"
              value=""
              onChange=""
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-secondColor">
              {t("phone")}
            </label>
            <input
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
              type="text"
              id="phone"
              value=""
              onChange=""
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-secondColor">
              {t("email")}
            </label>
            <input
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
              type="email"
              id="email"
              value=""
              onChange=""
            />
          </div>
          <div>
            <label htmlFor="services" className="block mb-1 text-secondColor">
              {t("service need")}
            </label>
            <select
              id="services"
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
            >
              <option value="">-- {t("select the service")} --</option>
              {data?.our_services?.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-1 text-secondColor">
            {t("message")}
          </label>
          <textarea
            className="w-full h-32 py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
            id="message"
            value=""
            onChange=""
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <MainBtn text={t("send")} action={() => {}} />
        </div>
      </form>
    </div>
  );
};

export default Contact;

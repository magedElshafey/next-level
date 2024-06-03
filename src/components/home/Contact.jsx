import React, { useState } from "react";
import MainBtn from "../common/MainBtn";

const Contact = () => {
  return (
    <div>
      <p className="text-center mb-8  text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
        تواصل معنا
      </p>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-secondColor">
              الإسم بالكامل
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
              رقم الواتساب لسهولة التواصل
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
              البريد الإلكتروني
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
              الخدمة المطلوبة
            </label>
            <select
              id="services"
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
            >
              <option value="">اختر خدمة</option>
              <option value="">التصميم</option>
              <option value="">البرمجة</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">اختر خدمة</option>
              <option value="">التصميم</option>
              <option value="">البرمجة</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
              <option value="">التسويق</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-1 text-secondColor">
            رسالتك
          </label>
          <textarea
            className="w-full h-32 py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
            id="message"
            value=""
            onChange=""
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <MainBtn text="ارسال" action={() => {}} />
        </div>
      </form>
    </div>
  );
};

export default Contact;

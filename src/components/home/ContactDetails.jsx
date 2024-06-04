import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const ContactDetails = ({ data }) => {
  return (
    <div>
      <p className="text-center mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
        تواصل معنا
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white px-3 py-5 cursor-pointer flex flex-col items-center justify-center gap-2 border duration-300 hover:shadow-md">
          <MdEmail className="text-mainColor" size={40} />
          <a
            href={`https://mailto:${data.email}`}
            target="_blank"
            rel="noreferrer"
            className=" lowercase"
          >
            {data.email}
          </a>
        </div>
        <div className="bg-white px-3 py-5 cursor-pointer flex flex-col items-center justify-center gap-2 border duration-300 hover:shadow-md">
          <FaPhone className="text-mainColor" size={40} />
          <a
            dir="ltr"
            href={`https://wa.me/${data.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.phone}
          </a>
        </div>
        <div className="bg-white px-3 py-5 cursor-pointer flex flex-col items-center justify-center gap-2 border duration-300 hover:shadow-md">
          <FaLocationArrow className="text-mainColor" size={40} />
          <p>{data.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

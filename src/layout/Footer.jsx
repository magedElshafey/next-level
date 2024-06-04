import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../components/common/SocialMedia";
import Logo from "../components/common/Logo";

const Footer = ({ navLinks, contact }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="w-screen py-3 flex items-center bg-darkColor text-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6 md:gap-8 lg:gap-16">
            <div>
              <Logo />
              <p className=" text-slate-300">
                احلي سلوجان في البلدية هي شركة تقدم خدمات التسويق الالكتروني
                للمنتجات والمشاريع التجارية والتسويق العقاري والتسويق التجاري
                والتسويق التجاري والتسويق التجاري والتسو
              </p>
            </div>
            <div>
              <p className="font-bold mb-4 text-lg md:text-xl lg:text-2xl">
                روابط هامة
              </p>
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index} className="text-slate-300 mb-3">
                    <Link
                      to={link.path}
                      className=" text-slate-300 hover:text-white hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 text-lg md:text-xl lg:text-2xl">
                تواصل معنا
              </p>
              <ul>
                <li className="mb-3">
                  <a
                    dir="ltr"
                    className=" text-slate-300 hover:text-white hover:underline"
                    href={`https://wa.me/${contact.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className=" text-slate-300 hover:text-white hover:underline lowercase"
                    href={`https:mailto:/${contact.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="mb-3 text-slate-300 hover:text-white hover:underline">
                  {contact.address}
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 text-lg md:text-xl lg:text-2xl">
                تابعنا
              </p>
              <SocialMedia data={contact} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center  justify-center py-2 bg-bgColor">
        <p className="text-xs md:text-sm lg:text-base">
          جميع الحقوق محفوظة لدى شركة{" "}
          <a
            href="https://nxtlvladv.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-slate-400"
          >
            next level
          </a>{" "}
          © {currentYear}
        </p>
      </div>
    </>
  );
};

export default Footer;

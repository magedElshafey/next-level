import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { request } from "../services/axios";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
const ServiceForm = ({ serviceId }) => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [msg, setMsg] = useState("");
  const [company, setCompnay] = useState("");
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    // Regular expression to check if the input contains only letters
    const lettersOnly = /^[A-Za-z]+$/;

    if (inputValue.trim() === "") {
      setNameError("");
    } else if (!lettersOnly.test(inputValue)) {
      setNameError(t("nameError"));
    } else {
      setNameError("");
    }
    setName(inputValue);
  };
  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (newEmail === "") {
      setEmailError(""); // Clear error message if email is empty
    } else if (!emailRegex.test(newEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (value === "") {
      setPhoneError("");
    } else if (!/^\d+$/.test(value)) {
      setPhoneError(t("phoneError"));
    } else {
      setPhoneError("");
    }
  };
  const handleCompanyChange = (e) => setCompnay(e.target.value);
  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };
  const handleSendData = (data) => {
    return request({
      url: "/",
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleSendData, {
    onSuccess: (data) => {
      setName("");
      setEmail("");
      setPhone("");
      setCompnay("");
      setMsg("");
    },
    onError: (data) => {},
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !msg.trim() ||
      !company.trim()
    ) {
      toast.error("all fields are requerd");
      return;
    } else if (nameError) {
      toast.error("invalid name");
      return;
    } else if (phoneError) {
      toast.error("invalid phone");
      return;
    } else if (emailError) {
      toast.error("invalid email");
      return;
    } else {
      const userData = {
        serviceId,
        name,
        email,
        phone,
        company,
        msg,
      };
      mutate(userData);
    }
  };
  return (
    <div className="w-full bg-darkColor p-5 text-white px-6">
      <div className="w-full flex items-center gap-5 justify-between">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
          {t("contact us")}
        </p>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-6">
            <div>
              <input
                className="w-full py-2 px-6 focus:outline-none border-b border-b-white duration-300 bg-transparent mainInp caret-mainColor text-slate-300"
                type="text"
                id="name"
                placeholder={t("full name")}
                value={name}
                onChange={handleNameChange}
              />
              {nameError ? (
                <p className="text-red-600 text-sm my-1">{nameError}</p>
              ) : null}
            </div>
            <div>
              <input
                className="w-full py-2 px-6 focus:outline-none border-b border-b-white duration-300 bg-transparent mainInp caret-mainColor text-slate-300"
                type="email"
                id="email"
                placeholder={t("email")}
                value={email}
                onChange={handleChangeEmail}
              />
              {emailError ? (
                <p className="text-red-600 text-sm my-1">{emailError}</p>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-6">
            <div>
              <input
                className="w-full py-2 px-6 focus:outline-none border-b border-b-white duration-300 bg-transparent mainInp caret-mainColor text-slate-300"
                type="text"
                id="phone"
                placeholder={t("phone number")}
                value={phone}
                onChange={handlePhoneChange}
              />
              {phoneError ? (
                <p className="text-red-600 text-sm my-1">{phoneError}</p>
              ) : null}
            </div>
            <div>
              <input
                className="w-full py-2 px-6 focus:outline-none border-b border-b-white duration-300 bg-transparent mainInp caret-mainColor text-slate-300"
                type="text"
                id="company"
                placeholder={t("company")}
                value={company}
                onChange={handleCompanyChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              className="text-slate-300 border-b border-b-white w-full h-32 py-2 px-6 focus:outline-none border  bg-transparent caret-mainColor"
              id="message"
              value={msg}
              onChange={handleChangeMsg}
              placeholder={t("message")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;

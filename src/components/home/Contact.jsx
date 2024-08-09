import React, { useState } from "react";
import MainBtn from "../common/MainBtn";
import { useGlobalContext } from "../../global/GlobalContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { request } from "../../services/axios";
const Contact = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [msg, setMsg] = useState("");
  const [service, setService] = useState("");
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

  const handleChangeServices = (e) => {
    setService(e.target.value);
  };
  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };
  const handleSendData = (data) => {
    return request({
      url: "/contact-us",
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleSendData, {
    onSuccess: (data) => {
      console.log("data", data);
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMsg("");
      } else {
        toast.error(data?.response?.data?.message);
      }
    },
    onError: (data) => {},
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !service ||
      !msg.trim()
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
        name,
        email,
        phone,
        our_service_id: service,
        message: msg,
      };
      mutate(userData);
    }
  };
  return (
    <div>
      <p className="text-center mb-8  text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
        {t("contact us")}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-secondColor">
              {t("name")}
            </label>
            <input
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError ? (
              <p className=" text-red-600 text-sm my-1">{nameError}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-secondColor">
              {t("phone")}
            </label>
            <input
              className="w-full py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            {phoneError ? (
              <p className=" text-red-600 text-sm my-1">{phoneError}</p>
            ) : null}
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
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError ? (
              <p className=" text-red-600 text-sm my-1">{emailError}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="services" className="block mb-1 text-secondColor">
              {t("service need")}
            </label>
            <select
              onChange={handleChangeServices}
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
            value={msg}
            onChange={handleChangeMsg}
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <MainBtn
            text={t("send")}
            type="submit"
            action={handleSubmit}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;

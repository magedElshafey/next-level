import React from "react";
import MainBtn from "../common/MainBtn";
import { useGlobalContext } from "../../global/GlobalContext";
import { useState } from "react";
import { request } from "../../services/axios";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
const BlogForm = ({ blogId }) => {
  const { t } = useTranslation();
  const { data } = useGlobalContext();

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
      url: "/blog-contact",
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
        blog_id: blogId,
        name,
        email,
        phone,
        our_service_id: service,
        msg,
      };
      mutate(userData);
    }
  };
  return (
    <div>
      <p className=" mb-6 text-center font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl pt-5 h-fit">
        {t("contact us")}
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-mainColor">
            {t("name")}{" "}
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
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 text-mainColor">
            {t("phone")}{" "}
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
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-mainColor">
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
        <div className="mb-4">
          <label htmlFor="services" className="block mb-1 text-mainColor">
            {t("service need")}{" "}
          </label>
          <select
            id="services"
            onChange={handleChangeServices}
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

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-mainColor">
            {t("message")}
          </label>
          <textarea
            className="w-full h-32 py-2 px-6 focus:outline-none border focus:border-mainColor rounded-lg caret-mainColor"
            id="message"
            value={msg}
            onChange={handleChangeMsg}
          />
        </div>
        <div className="flex justify-center ">
          <MainBtn
            disabled={isLoading}
            text={t("send")}
            action={handleSubmit}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default BlogForm;

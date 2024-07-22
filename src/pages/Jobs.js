import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { request } from "../services/axios";
import Spinner from "../components/common/Spinner";
import Hero from "../components/common/Hero";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import heroImg from "../assets/وظايف.png";
const fetchData = () => {
  return request({
    url: "/jobs",
  });
};
const sendData = (data) => {
  return request({
    url: "/job-request",
    method: "POST",
    data,
  });
};
const Jobs = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  const [educationError, setEducationError] = useState("");
  const [exp, setExp] = useState("");
  const [company, setCompany] = useState("");
  const [period, setPeriod] = useState("");
  const [periodError, setPeriodError] = useState("");
  const [path, setPath] = useState("");
  const [salary, setSalary] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [portfolioError, setPortfolioError] = useState("");
  const [reason, setReason] = useState("");

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    const currentYear = new Date().getFullYear(); // Get the current year

    setYear(value);

    if (value === "") {
      setYearError("");
    } else if (!/^\d+$/.test(value)) {
      setYearError(t("phoneError"));
    } else if (parseInt(value) > currentYear) {
      setYearError(t("yearError"));
    } else {
      setYearError("");
    }
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEducationChange = (e) => {
    const inputValue = e.target.value;
    // Regular expression to check if the input contains only letters
    const lettersOnly = /^[A-Za-z]+$/;

    if (inputValue.trim() === "") {
      setEducationError("");
    } else if (!lettersOnly.test(inputValue)) {
      setEducationError(t("educationError"));
    } else {
      setEducationError("");
    }
    setEducation(inputValue);
  };
  const handleExpChange = (e) => {
    setExp(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handlePeriodChange = (e) => {
    const value = e.target.value;
    setPeriod(value);

    if (value === "") {
      setPeriodError("");
    } else if (!/^\d+$/.test(value)) {
      setPeriodError(t("phoneError"));
    } else {
      setPeriodError("");
    }
  };
  const handlePathChange = (e) => {
    setPath(e.target.value);
  };
  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setSalary(value);

    if (value === "") {
      setSalaryError("");
    } else if (!/^\d+$/.test(value)) {
      setSalaryError(t("phoneError"));
    } else {
      setSalaryError("");
    }
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };
  const handlePortfolioChange = (e) => {
    const newValue = e.target.value;
    // Regular expression pattern to match portfolio links
    const portfolioLinkPattern =
      /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    setPortfolioError(portfolioLinkPattern.test(newValue));
    setPortfolio(newValue);
  };

  const { isLoading: sending, mutate } = useMutation(sendData, {
    onSuccess: (data) => {
      console.log("this is the data", data);
      if (data?.data?.status) {
        toast.success(data?.data?.message);
        setName("");
        setEmail("");
        setYear("");
        setBirthday("");
        setPhone("");
        setAddress("");
        setEducation("");
        setExp("");
        setCompany("");
        setPeriod("");
        setPath("");
        setSalary("");
        setPortfolio("");
        setReason("");
      } else {
        toast.error(data?.data?.message);
      }
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    if (
      nameError ||
      yearError ||
      phoneError ||
      educationError ||
      periodError ||
      salaryError
    ) {
      toast.error(t("error"));
    } else {
      const userData = {
        name,
        phone,
        email,
        address,
        qualification: education,
        dob: birthday,
        graduation_year: year,
        last_job: exp,
        company_name: company,
        experience: period,
        salary,
        portfolio_link: portfolio,
        message: reason,
      };
      mutate(userData);
    }
  };
  const { isLoading, data } = useQuery("jobs", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Hero img={heroImg} hasImg={true} />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className=" bg-bgColor p-4 rounded-lg">
          <form onSubmit={handleClick}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="name">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
                {nameError ? (
                  <p className="text-sm text-red-600">{nameError}</p>
                ) : null}
              </div>
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="email">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="phone">
                  {t("phone")}
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
                {phoneError ? (
                  <p className="text-sm text-red-600">{phoneError}</p>
                ) : null}
              </div>
              <div>
                <label
                  className="block mb-1 text-secondColor"
                  htmlFor="address"
                >
                  {t("address")}
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label
                  className="block mb-1 text-secondColor"
                  htmlFor="birthday"
                >
                  {t("birthday")}
                </label>
                <input
                  type="date"
                  id="birthday"
                  value={birthday}
                  onChange={handleBirthdayChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-secondColor"
                  htmlFor="education"
                >
                  {t("education")}
                </label>
                <input
                  type="text"
                  id="education"
                  value={education}
                  onChange={handleEducationChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
                {educationError ? (
                  <p className="text-sm text-red-600">{educationError}</p>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="year">
                  {t("year")}
                </label>
                <input
                  type="text"
                  id="year"
                  value={year}
                  onChange={handleYearChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
                {yearError ? (
                  <p className="text-sm text-red-600">{yearError}</p>
                ) : null}
              </div>
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="exp">
                  {t("exp")}
                </label>
                <input
                  type="text"
                  id="exp"
                  value={exp}
                  onChange={handleExpChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label
                  className="block mb-1 text-secondColor"
                  htmlFor="company"
                >
                  {t("company")}
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={handleCompanyChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
              </div>
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="period">
                  {t("period")}
                </label>
                <input
                  type="text"
                  id="period"
                  value={period}
                  onChange={handlePeriodChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
                {periodError ? (
                  <p className="text-sm text-red-600">{periodError}</p>
                ) : null}
              </div>
            </div>
            {data?.data?.data?.jobs?.length ? (
              <div className="mb-4">
                <label htmlFor="path" className="block mb-1 text-secondColor">
                  {t("path")}
                </label>
                {data?.data?.data?.jobs.map((item, index) => (
                  <div key={index} className="flex items-center gap-1 my-4">
                    <input
                      onChange={handlePathChange}
                      type="radio"
                      value={item.id}
                      name="path"
                    />
                    <label htmlFor={path}>{item.title}</label>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label className="block mb-1 text-secondColor" htmlFor="salary">
                  {t("salary")}
                </label>
                <input
                  type="text"
                  id="salary"
                  value={salary}
                  onChange={handleSalaryChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
                {salaryError ? (
                  <p className="text-sm text-main">{salaryError}</p>
                ) : null}
              </div>
              <div>
                <label
                  className="block mb-1 text-secondColor"
                  htmlFor="portfolio"
                >
                  {t("portLink")}
                </label>
                <input
                  type="text"
                  id="portfolio"
                  value={portfolio}
                  onChange={handlePortfolioChange}
                  className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block mb-1 text-secondColor" htmlFor="reason">
                {t("reason")}
              </label>
              <textarea
                className=" w-full focus:outline-none p-3 rounded-xl border duration-300 focus:border-mainColor h-[150px]"
                value={reason}
                onChange={handleReasonChange}
              ></textarea>
            </div>
            <div className="flex justify-center mb-5">
              <button
                disabled={sending}
                type="submit"
                className="flex justify-center items-center py-3 px-6 bg-mainColor text-white font-bold w-[200px] rounded-lg"
              >
                {t("send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

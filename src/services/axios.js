import axios from "axios";

const lang = localStorage.getItem("lang")
  ? JSON.parse(localStorage.getItem("lang"))
  : "ar";
const client = axios.create({
  baseURL: "https://admin.nxtlvladv.com/api",
  headers: {
    "Content-Type": "application/json",
    lang: lang,
    "Accept-Language": lang,
    "Access-Control-Allow-Credentials": true,
  },
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};

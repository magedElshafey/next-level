import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import Spinner from "../components/common/Spinner";
import ErrorPage from "../pages/ErrorPage";
const GlobalProvider = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalProvider);
};
const fetchData = async () => {
  return await request({
    url: "/home",
  });
};
const GlobalContext = ({ children }) => {
  const { isLoading, data, isError } = useQuery("home-page", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  const value = {
    data: data?.data?.data,
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorPage />
      ) : (
        <GlobalProvider.Provider value={value}>
          {children}
        </GlobalProvider.Provider>
      )}
    </>
  );
};

export default GlobalContext;

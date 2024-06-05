import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactHeader from "./ContactHeader";
import Ending from "./Ending";
import Meta from "../components/common/Meta";
import { useGlobalContext } from "../global/GlobalContext";
const MainLayout = ({ contact, navLinks }) => {
  const { data } = useGlobalContext();
  return (
    <div>
      <Meta
        fav={data?.site?.favicon}
        title={data?.site?.title}
        desc={data?.site?.description}
      />
      <ContactHeader data={contact} />
      <Navbar links={navLinks} contact={contact} />
      <div className="main">
        <Outlet />
      </div>
      <Ending />
      <Footer navLinks={navLinks} contact={contact} />
    </div>
  );
};

export default MainLayout;

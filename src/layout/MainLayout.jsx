import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactHeader from "./ContactHeader";
import Ending from "./Ending";
import Meta from "../components/common/Meta";
import { useGlobalContext } from "../global/GlobalContext";
import FixedBtns from "../components/common/FixedBtn";
const MainLayout = ({ navLinks }) => {
  const { data } = useGlobalContext();
  return (
    <div>
      <Meta
        fav={data?.site?.favicon}
        title={data?.site?.title}
        desc={data?.site?.description}
      />
      <FixedBtns whatsapp={data?.contact.whatsapp} />
      <ContactHeader />
      <Navbar links={navLinks} />
      <div className="main">
        <Outlet />
      </div>
      <Ending />
      <Footer navLinks={navLinks} />
    </div>
  );
};

export default MainLayout;

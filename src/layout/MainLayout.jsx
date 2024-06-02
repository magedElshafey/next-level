import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactHeader from "./ContactHeader";
const MainLayout = ({ contact, navLinks }) => {
  return (
    <div>
      <ContactHeader data={contact} />
      <Navbar links={navLinks} contact={contact} />
      <div className="main">
        <Outlet />
      </div>
      <Footer navLinks={navLinks} contact={contact} />
    </div>
  );
};

export default MainLayout;

import React from "react";
import IletisimPage from "../../components/Iletisim/IletisimPage";
import NavBar from "../../components/Layout/NavBar/NavBar";
import Footer from "../../components/Layout/Footer/Footer";

export default function Iletisim() {
  return (
    <>
      <IletisimPage />
    </>
  );
}
Iletisim.Nav = NavBar;
Iletisim.Layout = Footer;

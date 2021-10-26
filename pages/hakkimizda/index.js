import React from "react";
import NavBar from "../../components/Layout/NavBar/NavBar";
import Footer from "../../components/Layout/Footer/Footer";
import HakkimizdaPage from "../../components/Hakkimizda/HakkimizdaPage";

export default function Hakkimizda() {
  return (
    <>
      <HakkimizdaPage />
    </>
  );
}
Hakkimizda.Nav = NavBar;
Hakkimizda.Layout = Footer;

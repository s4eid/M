import React from "react";
import OgretmenlarimPage from "../../../components/Student/Ogretmenlarim/OgretmenlarPage";
import NavTop from "../../../components/Layout/Student/NavTopStudent/NavTop";
import NavSide from "../../../components/Layout/Student/NavSideStudent/NavSide";

export default function Ogretmenlarim() {
  return (
    <>
      <OgretmenlarimPage />
    </>
  );
}

Ogretmenlarim.NavTopStudent = NavTop;
Ogretmenlarim.NavSideStudent = NavSide;

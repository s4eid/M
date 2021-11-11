import React from "react";
import OgrencilerimPage from "../../../components/Teacher/Ogrencilerim/OgrencilerimPage";
import NavTop from "../../../components/Layout/Teacher/NavTop/NavTop";
import NavSide from "../../../components/Layout/Teacher/NavSildeTeacher/NavSide";

export default function Ogrencilerim() {
  return (
    <>
      <OgrencilerimPage />
    </>
  );
}

Ogrencilerim.NavTop = NavTop;
Ogrencilerim.NavSide = NavSide;

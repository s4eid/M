import React from "react";
import OgrencilerimPage from "../../components/Ogrencilerim/OgrencilerimPage";
import NavTop from "../../components/Layout/NavTop/NavTop";
import NavSide from "../../components/Layout/NavSildeTeacher/NavSide";

export default function Ogrencilerim() {
  return (
    <>
      <OgrencilerimPage />
    </>
  );
}

Ogrencilerim.NavTop = NavTop;
Ogrencilerim.NavSide = NavSide;

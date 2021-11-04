import React from "react";
import NavSide from "../../components/Layout/NavSildeTeacher/NavSide";
import NavTop from "../../components/Layout/NavTop/NavTop";
import SorularPage from "../../components/Sorular/SorularPage";
export default function Sorular() {
  return (
    <div>
      <SorularPage />
    </div>
  );
}

Sorular.NavTop = NavTop;
Sorular.NavSide = NavSide;

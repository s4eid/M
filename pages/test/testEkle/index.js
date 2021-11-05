import React from "react";
import NavSide from "../../../components/Layout/NavSildeTeacher/NavSide";
import NavTop from "../../../components/Layout/NavTop/NavTop";
import TestEklePage from "../../../components/TestEkle/TestEklePage";
export default function TestEkle() {
  return (
    <div>
      <TestEklePage />
    </div>
  );
}

TestEkle.NavTop = NavTop;
TestEkle.NavSide = NavSide;

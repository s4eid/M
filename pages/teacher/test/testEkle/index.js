import React from "react";
import NavSide from "../../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../../components/Layout/Teacher/NavTop/NavTop";
import TestEklePage from "../../../../components/Teacher/TestEkle/TestEklePage";
export default function TestEkle() {
  return (
    <div>
      <TestEklePage />
    </div>
  );
}

TestEkle.NavTop = NavTop;
TestEkle.NavSide = NavSide;

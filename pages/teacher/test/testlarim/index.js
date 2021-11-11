import React from "react";
import NavSide from "../../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../../components/Layout/Teacher/NavTop/NavTop";
import TestlarimPage from "../../../../components/Teacher/Testlarim/TestlarimPage";
export default function Testlarim() {
  return (
    <>
      <TestlarimPage />
    </>
  );
}
Testlarim.NavTop = NavTop;
Testlarim.NavSide = NavSide;

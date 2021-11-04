import React from "react";
import NavSide from "../../../components/Layout/NavSildeTeacher/NavSide";
import NavTop from "../../../components/Layout/NavTop/NavTop";
import TestlarimPage from "../../../components/Testlarim/TestlarimPage";
export default function Testlarim() {
  return (
    <>
      <TestlarimPage />
    </>
  );
}
Testlarim.NavTop = NavTop;
Testlarim.NavSide = NavSide;

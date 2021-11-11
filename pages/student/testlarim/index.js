import React from "react";
import TestlarimPage from "../../../components/Student/Testlarim/TestlarimPage";
import NavTop from "../../../components/Layout/Student/NavTopStudent/NavTop";
import NavSide from "../../../components/Layout/Student/NavSideStudent/NavSide";
export default function Testlarim() {
  return (
    <>
      <TestlarimPage />
    </>
  );
}

Testlarim.NavTopStudent = NavTop;
Testlarim.NavSideStudent = NavSide;

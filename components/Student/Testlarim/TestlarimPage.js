import React from "react";
import testlarim from "./testlarim.module.css";
import { testlarData } from "../../../Data/TestlarData";
import Test from "./Test/Test";

export default function TestlarimPage() {
  return (
    <div className={testlarim.mainContainer}>
      <div className={testlarim.head}>
        <p>Son 10 Test Sonucu</p>
      </div>
      {testlarData.map((t, index) => (
        <Test testData={t} key={index} />
      ))}
    </div>
  );
}

import React from "react";
import HeadEkle from "./Head/HeadEkle";
import testEkle from "./testEkle.module.css";
import Tests from "./Tests/Tests";
export default function TestEklePage() {
  return (
    <div className={testEkle.mainContainer}>
      <HeadEkle />
      <Tests />
    </div>
  );
}

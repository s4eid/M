import React from "react";
import Head from "./Head/Head";
import ogrenciler from "./ogrenciler.module.css";
import { katilanData } from "../../../../Data/KatilanlarData";
import Ogrenci from "./Ogrenci/Ogrenci";

export default function Ogrenciler() {
  return (
    <div className={ogrenciler.mainContainer}>
      <Head />
      {katilanData.map((katilan, index) => (
        <Ogrenci data={katilan} key={index} />
      ))}
    </div>
  );
}

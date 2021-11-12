import React from "react";
import { katilanData } from "../../../Data/KatilanlarData";
import Head from "./Ogretmenler/Head/Head";
import Ogretmen from "./Ogretmenler/Ogretmen/Ogretmen";
import ogretmenlarim from "./ogretmenlarim.module.css";

export default function OgretmenlarimPage() {
  return (
    <div className={ogretmenlarim.mainContainer}>
      {/* <Head /> */}
      {katilanData.map((katilan, index) => (
        <Ogretmen data={katilan} key={index} />
      ))}
    </div>
  );
}

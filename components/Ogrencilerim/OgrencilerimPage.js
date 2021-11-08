import React from "react";
import Ogrenciler from "./Ogrenciler/Ogrenciler";
import ogrencilerim from "./ogrencilerim.module.css";

export default function OgrencilerimPage() {
  return (
    <div className={ogrencilerim.mainContainer}>
      <Ogrenciler />
    </div>
  );
}

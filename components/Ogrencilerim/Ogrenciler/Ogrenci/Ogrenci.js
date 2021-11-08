import React from "react";
import ogrenci from "./ogrenci.module.css";

export default function Ogrenci({ data }) {
  return (
    <div className={ogrenci.mainContainer}>
      <div className={ogrenci.profileContainer}>
        <div className={ogrenci.profile}>
          <p>{data.name.charAt(0)}</p>
        </div>
      </div>
      <div className={ogrenci.profileName}>
        <p>{data.name}</p>
      </div>
      <div className={ogrenci.profilePoint}>
        <p>{data.point}</p>
      </div>
    </div>
  );
}

import React from "react";
import headProfile from "./head.module.css";
export default function HeadProfile() {
  return (
    <div className={headProfile.mainContaier}>
      <div className={headProfile.container}>
        <div className={headProfile.rank}>
          <p>Rank : #10</p>
        </div>
        <div className={headProfile.ekle}>
          {/* <p>K</p> */}
          {/* <FontAwesomeIcon className={headEkle.icon} icon={faPlus} /> */}
        </div>
      </div>
    </div>
  );
}

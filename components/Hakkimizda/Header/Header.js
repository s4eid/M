import React from "react";
import ReactPlayer from "react-player";
import headerH from "./headerH.module.css";
export default function HeaderH() {
  return (
    <div className={headerH.mainContainer}>
      <div className={headerH.titleContainer}>
        <h1>Türkiye’nin en hesaplı özel dersleri</h1>
        <p>
          Kunduz’un en iyi öğretmenlerinden, evinizin rahatlığında, dilediğiniz
          dersten, online bire bir özel dersler alın.
        </p>
        {/* <button className={headerH.titleBtn}>İletişim</button> */}
      </div>
      <div className={headerH.videoContainer}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=DmWWqogr_r8&ab_channel=21SavageVEVO"
          controls
        />
      </div>
    </div>
  );
}

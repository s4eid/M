import React from "react";
import ReactPlayer from "react-player";
import headerH from "./headerH.module.css";
export default function HeaderH() {
  return (
    <div className={headerH.mainContainer}>
      <div className={headerH.titleContainer}>
        <h1>
          Universite icin hazirlayan matematik ve diger dersler online ve
          fiziksel kurslar
        </h1>
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

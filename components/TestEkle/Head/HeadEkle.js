import React from "react";
import headEkle from "./head.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function HeadEkle() {
  return (
    <div className={headEkle.mainContaier}>
      <div className={headEkle.container}>
        <div>
          <p>Soru:22</p>
        </div>
        <div className={headEkle.ekle}>
          <p>K</p>
          {/* <FontAwesomeIcon className={headEkle.icon} icon={faPlus} /> */}
        </div>
      </div>
    </div>
  );
}

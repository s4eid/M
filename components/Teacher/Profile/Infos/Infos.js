import React from "react";
import infos from "./infos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Infos() {
  return (
    <div className={infos.mainContainer}>
      <div className={infos.personContainer}>
        <div className={infos.profile}>
          <p>P</p>
        </div>
        <p className={infos.name}>Peroz Kamyar</p>
      </div>
      <div className={infos.poan}>
        <div>
          <h1>helllo</h1>
        </div>
        <div>
          <h1>heelo</h1>
        </div>
      </div>
    </div>
  );
}

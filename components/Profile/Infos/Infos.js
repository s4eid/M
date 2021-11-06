import React from "react";
import infos from "./infos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { data_1, options_1 } from "./Chart/data";
import Chart from "./Chart/Chart";

export default function Infos() {
  return (
    <div className={infos.mainContainer}>
      <div className={infos.personContainer}>
        <div className={infos.profile}>
          <p>P</p>
        </div>
        <p className={infos.name}>Peroz Kamyar</p>
      </div>
      <div className={infos.poanContainer}>
        <div className={infos.poan}>
          <FontAwesomeIcon className={infos.icon} icon={faStar} />
          <p>Poan</p>
          <p>200</p>
        </div>
        <div className={infos.chart}>
          <Chart data_1={data_1} options_1={options_1} />
        </div>
      </div>
    </div>
  );
}

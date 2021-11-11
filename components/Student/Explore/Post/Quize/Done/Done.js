import React from "react";
import done from "./done.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function Done() {
  return (
    <div className={done.mainContainer}>
      <div className={done.amount}>
        <p>4</p>
      </div>
      <div className={done.out}>
        <button className={done.doneBtn}>Quize Bitir</button>
        <button className={done.doneBtn}>Quizedan Çik</button>
      </div>
      <div className={done.goUp}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}

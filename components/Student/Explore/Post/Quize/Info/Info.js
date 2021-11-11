import React from "react";
import info from "./info.module.css";

export default function Info({ creator, quize }) {
  return (
    <div className={info.mainContainer}>
      <div className={info.profileContainer}>
        <div className={info.profile}>
          <p>{creator.charAt(0)}</p>
        </div>
        <p className={info.name}>{creator}</p>
      </div>
      <div className={info.quizeLength}>
        <p>{quize}</p>
      </div>
    </div>
  );
}

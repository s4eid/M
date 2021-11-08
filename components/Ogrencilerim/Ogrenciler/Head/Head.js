import React from "react";
import head from "./head.module.css";

export default function Head() {
  return (
    <div className={head.mainContaier}>
      <div className={head.container}>
        <div className={head.name}>
          <p>Name</p>
        </div>
        <div className={head.ekle}>
          <p>Rank#</p>
        </div>
      </div>
    </div>
  );
}

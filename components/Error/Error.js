import React from "react";
import errorC from "./error.module.css";
export default function Error({ error }) {
  return (
    <div className={errorC.mainContainer}>
      <p>{error}</p>
    </div>
  );
}

import React from "react";
import test from "./test.module.css";

export default function Test({ testData }) {
  return (
    <div className={test.mainContainer}>
      <div className={test.pointContainer}>
        <p>{testData.point}</p>
      </div>
      <div className={test.profile}>
        <p>{testData.Teacher.charAt(0)}</p>
      </div>
      <div className={test.dateContainer}>
        <p>{testData.date}</p>
      </div>
    </div>
  );
}

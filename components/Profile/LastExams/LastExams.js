import React from "react";
import lastExams from "./lastExams.module.css";

export default function LastExams() {
  return (
    <div className={lastExams.mainContainer}>
      <div className={lastExams.titleContainer}>
        <p>En Son Sinav Poanlari</p>
      </div>
      <div className={lastExams.container}>
        <div className={lastExams.child}>
          <p className={lastExams.childDate}>1. 2021-8-22</p>
          <p>88</p>
        </div>
        <div className={lastExams.child}>
          <p className={lastExams.childDate}>2. 2021-8-22</p>
          <p>88</p>
        </div>
        <div className={lastExams.child}>
          <p className={lastExams.childDate}>3. 2021-8-22</p>
          <p>88</p>
        </div>
      </div>
    </div>
  );
}

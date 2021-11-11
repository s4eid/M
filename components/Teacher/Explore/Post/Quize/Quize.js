import React from "react";
import Info from "./Info/Info";
import quizeC from "./quize.module.css";
import Done from "./Done/Done";
import Question from "./Question/Question";

export default function Quize({ quize }) {
  return (
    <div className={quizeC.mainContainer}>
      <Info creator="Ahmet Karahanlı" quize={quize.length} />
      {quize.map((q, index) => (
        <Question q={q} key={index} />
      ))}
      <Done />
    </div>
  );
}

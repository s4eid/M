import React from "react";
import Info from "./Info/Info";
import quizeC from "./quize.module.css";
import Done from "./Done/Done";
import Question from "./Question/Question";

export default function Quize({ quize }) {
  return (
    <div className={quizeC.mainContainer}>
      <Info creator={quize.first_name} quize={quize.quize.length} />
      {quize.quize.map((q, index) => (
        <Question q={q} key={index} id={index} />
      ))}
      <Done />
    </div>
  );
}

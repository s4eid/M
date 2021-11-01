import React from "react";
import Image from "next/image";
import Info from "./Info/Info";
import quizeC from "./quize.module.css";

export default function Quize({ quize }) {
  return (
    <div className={quizeC.mainContainer}>
      <Info creator="Ahmet Karahanlı" quize={quize.length} />
      {quize.map((q, index) => (
        <div className={quizeC.question} key={index}>
          <div className={quizeC.qQuestion}>
            <p>{q.question}</p>
          </div>
          <div className={quizeC.qImage}>
            <Image src={q.image} layout="fixed" width={100} height={100} />
          </div>
          <div className={quizeC.answersContainer}>
            <p>{q.answer_1}</p>
            <p>{q.answer_2}</p>
            <p>{q.answer_3}</p>
            <p>{q.answer_4}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

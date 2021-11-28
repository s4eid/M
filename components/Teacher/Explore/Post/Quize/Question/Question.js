import React, { useState } from "react";
import quizeC from "../quize.module.css";
// import Image from "next/image";

export default function Question({ q, id }) {
  const id_0 = JSON.stringify(id);
  const id_1 = JSON.stringify(`${id}1`);
  const id_2 = JSON.stringify(`${id}2`);
  const id_3 = JSON.stringify(`${id}3`);
  console.log(id_1);
  const [answer, setAnswer] = useState();
  return (
    <div className={quizeC.question}>
      <div className={quizeC.qQuestion}>
        <p>{q.q}</p>
      </div>
      <div className={quizeC.qImage}>
        {/* <Image src={q.image} layout="fixed" width={100} height={100} /> */}
      </div>
      <div className={quizeC.answersContainer}>
        <input
          className={quizeC.input}
          type="radio"
          id={id_0}
          // id="target_1"
          value="a"
          name="radioGroup"
          onChange={(e) => setAnswer(e.currentTarget.value)}
          className={quizeC.hiddenInput}
        />
        <label htmlFor={id_0} className={quizeC.labelContainer}>
          <span className={quizeC.title}>A:</span>
          <span>{q.a}</span>
        </label>
        <input
          onChange={(e) => setAnswer(e.currentTarget.value)}
          value="b"
          type="radio"
          name="radioGroup"
          id={id_1}
          // id="target_2"
          className={quizeC.hiddenInput}
        />
        <label htmlFor={id_1} className={quizeC.labelContainer}>
          <span className={quizeC.title}>B:</span>
          <span>{q.b}</span>
        </label>
        <input
          onChange={(e) => setAnswer(e.currentTarget.value)}
          value="c"
          id={id_2}
          // id="target_3"
          type="radio"
          name="radioGroup"
          className={quizeC.hiddenInput}
        />
        <label htmlFor={id_2} className={quizeC.labelContainer}>
          <span className={quizeC.title}>C:</span>
          <span>{q.c}</span>
        </label>
        <input
          onChange={(e) => setAnswer(e.currentTarget.value)}
          type="radio"
          id={id_3}
          // id="target_4"
          value="d"
          name="radioGroup"
          className={quizeC.hiddenInput}
        />
        <label htmlFor={id_3} className={quizeC.labelContainer}>
          <span className={quizeC.title}>D:</span>
          <span>{q.d}</span>
        </label>
      </div>
    </div>
  );
}

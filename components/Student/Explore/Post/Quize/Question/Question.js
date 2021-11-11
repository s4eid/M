import React, { useState } from "react";
import quizeC from "../quize.module.css";
import Image from "next/image";

export default function Question({ q }) {
  const [answer, setAnswer] = useState();
  return (
    <div className={quizeC.question}>
      <div className={quizeC.qQuestion}>
        <p>{q.question}</p>
      </div>
      <div className={quizeC.qImage}>
        <Image src={q.image} layout="fixed" width={100} height={100} />
      </div>
      <div className={quizeC.answersContainer}>
        <input
          className={quizeC.input}
          type="radio"
          id="target_1"
          value="1"
          name="radioGroup"
          onChange={(e) => setAnswer(e.currentTarget.value)}
          className={quizeC.hiddenInput}
        />
        <label htmlFor="target_1" className={quizeC.labelContainer}>
          <span className={quizeC.title}>A:</span>
          <span>{q.answer_1}</span>
        </label>
        <input
          onChange={(e) => setAnswer(e.currentTarget.value)}
          value="2"
          type="radio"
          name="radioGroup"
          id="target_2"
          className={quizeC.hiddenInput}
        />
        <label htmlFor="target_2" className={quizeC.labelContainer}>
          <span className={quizeC.title}>B:</span>
          <span>{q.answer_2}</span>
        </label>
        <input
          onChange={(e) => setAnswer(e.currentTarget.value)}
          value="3"
          id="target_3"
          type="radio"
          name="radioGroup"
          className={quizeC.hiddenInput}
        />
        <label htmlFor="target_3" className={quizeC.labelContainer}>
          <span className={quizeC.title}>C:</span>
          <span>{q.answer_3}</span>
        </label>
        <input
          onChange={(e) => setAnswer(e.currentTarget.value)}
          type="radio"
          id="target_4"
          value="4"
          name="radioGroup"
          className={quizeC.hiddenInput}
        />
        <label htmlFor="target_4" className={quizeC.labelContainer}>
          <span className={quizeC.title}>D:</span>
          <span>{q.answer_4}</span>
        </label>
      </div>
    </div>
  );
}

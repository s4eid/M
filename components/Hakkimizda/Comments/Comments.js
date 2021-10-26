import React from "react";
import comments from "./comments.module.css";
import SlideC from "./Slide/SliderC";
export default function Comments() {
  return (
    <div className={comments.mainContainer}>
      <div className={comments.titleContainer}>
        <div className={comments.line}></div>
        <h1>Yorumlar</h1>
        <div className={comments.line}></div>
      </div>
      <div className={comments.commentsContainer}>
        <SlideC />
      </div>
    </div>
  );
}

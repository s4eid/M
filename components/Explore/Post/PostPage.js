import React from "react";
import post from "./post.module.css";
import { quizeData } from "../../../Data/QuizeData";
import Quize from "./Quize/Quize";
export default function PostPage() {
  return (
    <div className={post.mainContainer}>
      <Quize quize={quizeData} />
    </div>
  );
}

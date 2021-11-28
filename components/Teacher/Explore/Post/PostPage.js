import React from "react";
import post from "./post.module.css";
import Quize from "./Quize/Quize";
export default function PostPage({ data }) {
  return (
    <div className={post.mainContainer}>
      <Quize quize={data} />
    </div>
  );
}

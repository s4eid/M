import React from "react";
import Posts from "./Posts/Posts";
import explore from "./explore.module.css";

export default function ExplorePage() {
  return (
    <>
      <div className={explore.mainContainer}>
        <Posts />
      </div>
    </>
  );
}

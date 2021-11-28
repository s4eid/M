import React from "react";
import tests from "./tests.module.css";
// import { postData } from "../../../../Data/PostsData";
import Test from "./Test";
export default function Tests({ data }) {
  return (
    <div className={tests.mainContainer}>
      <Test postData={data} />
    </div>
  );
}

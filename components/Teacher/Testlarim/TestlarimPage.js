import React from "react";
import Head from "./Head/Head";
import testlarim from "./testlarim.module.css";
import Tests from "./Tests/Tests";

export default function TestlarimPage({ data }) {
  return (
    <div className={testlarim.mainContainer}>
      <Head />
      <Tests data={data.getTeacherTests} />
    </div>
  );
}

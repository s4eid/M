import React from "react";
import loginTeacher from "./login.module.css";
import FormContainer from "./FormContainer";

export default function LoginTeacher() {
  return (
    <div className={loginTeacher.mainContainer}>
      <FormContainer />
    </div>
  );
}

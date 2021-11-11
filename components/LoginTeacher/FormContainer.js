import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import loginTeacher from "./login.module.css";
import Image from "next/image";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  initialValues,
  loginSchema,
} from "../../validation/TeacherLogin/teacherLogin";
import { useRouter } from "next/router";
export default function FormContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();
  return (
    <div className={loginTeacher.container}>
      <div className={loginTeacher.logo}>
        <Image
          loading="eager"
          alt="logo"
          src="/Logo.svg"
          layout="intrinsic"
          width={50}
          height={50}
          onClick={() => route.push("/")}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={() => route.push("/teacher/explore")}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className={loginTeacher.fields}>
            <Field
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={loginTeacher.field}
            />
            {errors.email && touched.email ? (
              <div>
                <p>{errors.email}</p>
              </div>
            ) : null}
            <Field
              type={showPassword ? "text" : "password"}
              placeholder={"Password"}
              className={loginTeacher.field}
              name="password"
            />
            {errors.password && touched.password ? (
              <div className={loginTeacher.error}>
                <p>{errors.password}</p>
              </div>
            ) : null}
            <FontAwesomeIcon
              className={loginTeacher.icon}
              icon={!showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
            />
            <div>
              <button
                type="submit"
                disabled={!isValid && dirty}
                className={loginTeacher.loginBtn}
              >
                Giriş
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

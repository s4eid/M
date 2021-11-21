import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Formik, Field, Form } from "formik";
import loginTeacherC from "./login.module.css";
import { LOGIN_TEACHER } from "../../graphql/Teacher/Mutation/teacherLogin";
import Image from "next/image";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../Error/Error";
import {
  initialValues,
  loginSchema,
} from "../../validation/TeacherLogin/teacherLogin";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
export default function FormContainer() {
  const [LoginTeacher, { loading, error }] = useMutation(LOGIN_TEACHER, {
    onError: (err) => setErrorLogin(err.message),
    onCompleted: () => route.push("/teacher/explore"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const route = useRouter();

  return (
    <div className={loginTeacherC.container}>
      <div className={loginTeacherC.logo}>
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
        onSubmit={async (data) => {
          LoginTeacher({ variables: data });
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className={loginTeacherC.fields}>
            <Field
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={loginTeacherC.field}
            />
            {errors.email && touched.email ? (
              <div>
                <p>{errors.email}</p>
              </div>
            ) : null}
            <Field
              type={showPassword ? "text" : "password"}
              placeholder={"Password"}
              className={loginTeacherC.field}
              name="password"
            />
            {errors.password && touched.password ? (
              <div className={loginTeacherC.error}>
                <p>{errors.password}</p>
              </div>
            ) : null}
            <FontAwesomeIcon
              className={loginTeacherC.icon}
              icon={!showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
            />
            <div>
              <button
                type="submit"
                disabled={!isValid && dirty}
                className={loginTeacherC.loginBtn}
              >
                Giriş
              </button>
              {loading ? (
                <Loading />
              ) : error ? (
                <Error error={errorLogin} />
              ) : (
                <></>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

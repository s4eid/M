import React, { useRef, useState } from "react";
import loginTeacher from "./login.module.css";
import Image from "next/image";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
export default function LoginTeacher() {
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={loginTeacher.mainContainer}>
      <div className={loginTeacher.container}>
        <div className={loginTeacher.logo}>
          <Image
            src="/Nuzem.svg"
            layout="intrinsic"
            width={100}
            height={100}
            onClick={() => route.push("/")}
          />
        </div>
        <div className={loginTeacher.fields}>
          <input
            type="text"
            placeholder="Email"
            className={loginTeacher.field}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={loginTeacher.field}
          />
          <FontAwesomeIcon
            className={loginTeacher.icon}
            icon={!showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
          />
          <div>
            <button className={loginTeacher.loginBtn}>Giriş</button>
          </div>
        </div>
      </div>
    </div>
  );
}

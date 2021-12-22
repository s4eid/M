import React from "react";
import navTop from "./navTop.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";

export default function NavTop({ children }) {
  const route = useRouter();
  const path = route.route;
  return (
    <>
      <div className={navTop.mainContainer}>
        <Image
          src="/LogoWhite.svg"
          layout="intrinsic"
          className={navTop.logo}
          width={40}
          height={40}
        />
        <h1>{path}</h1>
        <button
          className={navTop.navBtn}
          onClick={async () => {
            try {
              Cookies.remove("refresh_token");
              Cookies.remove("access_token");
              route.push("/loginTeacher");
            } catch (error) {
              console.log("ooops");
            }
          }}
        >
          Çik
        </button>
      </div>
      {children}
    </>
  );
}

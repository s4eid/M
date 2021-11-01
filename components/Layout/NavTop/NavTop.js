import React from "react";
import navTop from "./navTop.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function NavTop({ children }) {
  const route = useRouter();
  const path = route.asPath;
  return (
    <>
      <div className={navTop.mainContainer}>
        <Image
          src="/NWhite.svg"
          layout="intrinsic"
          className={navTop.logo}
          width={40}
          height={40}
        />
        <h1>{path}</h1>
        <button className={navTop.navBtn}>Çik</button>
      </div>
      {children}
    </>
  );
}

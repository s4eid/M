import React from "react";
import Image from "next/image";
import loading from "./loading.module.css";

export default function Loading() {
  return (
    <div className={loading.mainContainer}>
      <Image src="/logo.svg" layout="fixed" width={30} height={30} />
    </div>
  );
}
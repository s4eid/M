import React from "react";
import head from "./head.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export default function Head() {
  const route = useRouter();
  return (
    <div className={head.mainContaier}>
      <div className={head.container}>
        <div>
          <p>Test:22</p>
        </div>
        <div className={head.ekle} onClick={() => route.push("/test/testEkle")}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Test Ekle</p>
        </div>
      </div>
    </div>
  );
}

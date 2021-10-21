import React from "react";
import popUp from "./popUp.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function PopUp({ pOpen, setPOpen }) {
  const router = useRouter();
  if (!pOpen) return null;
  return (
    <div className={popUp.overlay}>
      <div className={popUp.mainContainer}>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setPOpen(!pOpen)}
          className={popUp.close}
        />
        <h1>Ney Olarak Giriş Yapacaksiniz?</h1>
        <div className={popUp.btnContainer}>
          <button onClick={() => router.push("/loginTeacher")}>Öğretmen</button>
          <button>Öğrenci</button>
        </div>
      </div>
    </div>
  );
}

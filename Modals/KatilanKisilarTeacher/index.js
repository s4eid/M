import React from "react";
import katilan from "./katilan.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function KatilanPop({ pOpen, setPOpen, persons }) {
  const router = useRouter();
  if (!pOpen) return null;
  return (
    <div className={katilan.overlay}>
      <div className={katilan.mainContainer}>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setPOpen(!pOpen)}
          className={katilan.close}
        />
        <div className={katilan.personContainer}>
          {persons.map((p) => (
            <div className={katilan.katilanContainer}>
              <div className={katilan.katilanContainerName}>
                <div className={katilan.profile}>
                  <p>{p.name.charAt(0)}</p>
                </div>
                <p className={katilan.name}>{p.name}</p>
              </div>
              <div className={katilan.katilanPoint}>
                <p>{p.point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

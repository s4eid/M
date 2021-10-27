import React from "react";
import headerI from "./header.module.css";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <div className={headerI.header}>
      <div className={headerI.mainContainer}>
        <div className={headerI.titleContainer}>
          <h1>İletişim Bilgilar</h1>
          <button className={headerI.titleBtn}>Hemen Ara</button>
        </div>
      </div>
      <div className={headerI.infoContainer}>
        <div className={headerI.infoBox}>
          <div className={headerI.info}>
            <FontAwesomeIcon icon={faInstagram} className={headerI.icon} />
            <h1>Instagram</h1>
            <p>SA__EI__D</p>
          </div>
          <div className={headerI.info}>
            <FontAwesomeIcon icon={faWhatsapp} className={headerI.icon} />
            <h1>WhatsApp</h1>
            <p>05510193686</p>
          </div>

          <div className={headerI.info}>
            <FontAwesomeIcon icon={faFacebook} className={headerI.icon} />
            <h1>FaceBook</h1>
            <p>SA__EI__D</p>
          </div>
        </div>
      </div>
    </div>
  );
}

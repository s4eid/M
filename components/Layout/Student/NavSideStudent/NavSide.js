import React from "react";
import navSide from "./navSide.module.css";
import {
  faScroll,
  faSignal,
  faHome,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function NavSide({ children }) {
  return (
    <>
      <div className={navSide.mainContainer}>
        <div className={navSide.nav}>
          <div className={navSide.logo}>
            <div className={navSide.profile}>
              <p>S</p>
            </div>
          </div>
          <ul className={navSide.linksContainer}>
            <Link href="/student/explore">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faHome} className={navSide.itemIcon} />
                <p>Anasayfa</p>
              </li>
            </Link>
            <Link href="/student/testlarim">
              <li className={navSide.linksSoru}>
                <FontAwesomeIcon icon={faScroll} className={navSide.itemIcon} />
                <p>Testlarim</p>
                {/* <ul className={navSide.subMenu}>
                <Link href="/teacher/test/testlarim">
                  <li>Testlarim</li>
                </Link>
                <Link href="/teacher/test/testEkle">
                  <li>Test Ekle</li>
                </Link>
              </ul> */}
              </li>
            </Link>
            <Link href="/student/live">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faSignal} className={navSide.itemIcon} />
                <p>Live</p>
              </li>
            </Link>
            <Link href="/student/ogretmenlar">
              <li className={navSide.links}>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className={navSide.itemIcon}
                />
                <p>Oğretmenler</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}

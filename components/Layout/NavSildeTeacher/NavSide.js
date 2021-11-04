import React from "react";
import navSide from "./navSide.module.css";
import { faScroll, faSignal, faHome } from "@fortawesome/free-solid-svg-icons";
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
            <Link href="/explore">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faHome} />
                <p>Anasayfa</p>
              </li>
            </Link>
            <li className={navSide.linksSoru}>
              <FontAwesomeIcon icon={faScroll} />
              <p>Test</p>
              <ul className={navSide.subMenu}>
                <Link href="/test/testlarim">
                  <li>Testlarim</li>
                </Link>
                <Link href="/test/testEkle">
                  <li>Test Ekle</li>
                </Link>
              </ul>
            </li>
            <Link href="/live">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faSignal} />
                <p>Live</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}

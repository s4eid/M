import React from "react";
import navSide from "./navSide.module.css";
import { navSideData } from "../../../Data/SideNavItem";
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
            <Link href="/">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faHome} />
                <p>Anasayfa</p>
              </li>
            </Link>
            <li className={navSide.linksSoru}>
              <FontAwesomeIcon icon={faScroll} />
              <p>Sorular</p>
              <ul className={navSide.subMenu}>
                <Link href="/sorular/quizelar">
                  <li>Quzelar</li>
                </Link>
                <Link href="/sorular/quizeEkle">
                  <li>QuizeEkle</li>
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
        {/* <div className={navSide.bottomCopy}>
          <p>copyRIght</p>
        </div> */}
      </div>
      {children}
    </>
  );
}

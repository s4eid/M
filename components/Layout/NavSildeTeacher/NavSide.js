import React from "react";
import navSide from "./navSide.module.css";
import { navSideData } from "../../../Data/SideNavItem";
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
            {navSideData.map((i, index) => (
              <div className={navSide.links} key={index}>
                <Link href={i.link}>
                  <FontAwesomeIcon icon={i.icon} className={navSide.icon} />
                </Link>
                <Link href={i.link}>
                  <li>{i.name}</li>
                </Link>
              </div>
            ))}
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

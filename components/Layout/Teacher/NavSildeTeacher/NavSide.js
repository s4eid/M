import React, { useEffect, useState } from "react";
import navSide from "./navSide.module.css";
import {
  faScroll,
  faSignal,
  faHome,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../../Redux/Actions/User/user";
import Link from "next/link";
export default function NavSide({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  const email = user?.email;
  const letter = email?.charAt(0);

  return (
    <>
      <div className={navSide.mainContainer}>
        <div className={navSide.nav}>
          <div className={navSide.logo}>
            <div className={navSide.profile}>
              <p>{letter}</p>
            </div>
          </div>
          <ul className={navSide.linksContainer}>
            <Link href="/teacher/explore">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faHome} className={navSide.itemIcon} />
                <p>Anasayfa</p>
              </li>
            </Link>
            <li className={navSide.linksSoru}>
              <FontAwesomeIcon icon={faScroll} className={navSide.itemIcon} />
              <p>Test</p>
              <ul className={navSide.subMenu}>
                <Link href="/teacher/test/testlarim">
                  <li>Testlarim</li>
                </Link>
                <Link href="/teacher/test/testEkle">
                  <li>Test Ekle</li>
                </Link>
              </ul>
            </li>
            <Link href="/teacher/live">
              <li className={navSide.links}>
                <FontAwesomeIcon icon={faSignal} className={navSide.itemIcon} />
                <p>Live</p>
              </li>
            </Link>
            <Link href="/teacher/ogrencilerim">
              <li className={navSide.links}>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className={navSide.itemIcon}
                />
                <p>Oğrenci</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}

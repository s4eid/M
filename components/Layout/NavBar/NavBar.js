import React, { useState, useEffect } from "react";
import nav from "./nav.module.css";
import { navItems } from "../../../Data/NavItems";
import Link from "next/link";
import Image from "next/image";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import PopUp from "./PopUp/PopUp";
export default function NavBar({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const [pOpen, setPOpen] = useState(false);
  const [navChange, setNavChange] = useState(false);
  const scrolling = () => {
    if (window.scrollY >= 80) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolling);
  }, []);
  return (
    <>
      <div className={!navChange ? nav.container : nav.container_active}>
        <div className={nav.logoContainer}>
          <Link href="/">
            <Image
              alt="logo"
              loading="eager"
              className={nav.logo}
              src="/Nuzem.svg"
              layout="intrinsic"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className={nav.linksContainer}>
          <ul>
            {navItems.map((n) => (
              <Link key={n.id} href={n.link}>
                <li>{n.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={nav.loginContainer}>
          <button
            onClick={() => setPOpen(!pOpen)}
            // onClick={() => router.push("/loginTeacher")}
            className={nav.loginBtn}
          >
            Giriş
          </button>
        </div>
        <div className={nav.menuContainer} onClick={() => setNavOpen(!navOpen)}>
          <Image
            className={!navOpen ? nav.burger : nav.burgerOpen}
            src="/burger.svg"
            layout="hamburgerMenu"
            height={28}
            loading="eager"
            layout="intrinsic"
            width={28}
          />
        </div>
        <SideBar navItems={navItems} isOpen={navOpen} />
      </div>
      <PopUp pOpen={pOpen} setPOpen={setPOpen} />
      {children}
    </>
  );
}

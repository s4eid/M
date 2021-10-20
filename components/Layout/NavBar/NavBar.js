import React, { useState } from "react";
import nav from "./nav.module.css";
import { navItems } from "../../../Data/NavItems";
import Link from "next/link";
import Image from "next/image";
import SideBar from "./SideBar";
export default function NavBar({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className={nav.container}>
        <div className={nav.logoContainer}>
          <Image
            className={nav.logo}
            src="/Nuzem.svg"
            layout="intrinsic"
            width={100}
            height={100}
          />
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
          <button className={nav.loginBtn}>Giriş</button>
        </div>
        <div className={nav.menuContainer} onClick={() => setNavOpen(!navOpen)}>
          <Image
            className={!navOpen ? nav.burger : nav.burgerOpen}
            src="/hamburgerMenu.svg"
            height={28}
            layout="intrinsic"
            width={28}
          />
        </div>
        <SideBar navItems={navItems} isOpen={navOpen} />
      </div>
      {children}
    </>
  );
}

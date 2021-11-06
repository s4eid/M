import React from "react";
import profile from "./profilePage.module.css";
import Head from "./Head/HeadProfile";
import Infos from "./Infos/Infos";

export default function Profile() {
  return (
    <div className={profile.mainContainer}>
      <Head />
      <Infos />
    </div>
  );
}

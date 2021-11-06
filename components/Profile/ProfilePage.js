import React from "react";
import profile from "./profilePage.module.css";
import Head from "./Head/HeadProfile";
import Infos from "./Infos/Infos";
import LastExams from "./LastExams/LastExams";

export default function Profile() {
  return (
    <div className={profile.mainContainer}>
      <Head />
      <Infos />
      <LastExams />
    </div>
  );
}

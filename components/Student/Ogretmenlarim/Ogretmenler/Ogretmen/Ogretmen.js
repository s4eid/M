import React from "react";
import ogretmen from "./ogretmen.module.css";
import { useRouter } from "next/router";

export default function Ogretmen({ data }) {
  const router = useRouter();
  return (
    <div
      className={ogretmen.mainContainer}
      onClick={() => router.push(`/teacher/student/${data.index}`)}
    >
      <div className={ogretmen.profileContainer}>
        <div className={ogretmen.profile}>
          <p>{data.name.charAt(0)}</p>
        </div>
      </div>
      <div className={ogretmen.profileName}>
        <p>{data.name}</p>
      </div>
    </div>
  );
}

import React from "react";
import NavTop from "../../../components/Layout/NavTop/NavTop";
import NavSide from "../../../components/Layout/NavSildeTeacher/NavSide";
import ProfilePage from "../../../components/Profile/ProfilePage";

export default function Profile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}

Profile.NavTop = NavTop;
Profile.NavSide = NavSide;

import React from "react";
import NavTop from "../../../../components/Layout/Teacher/NavTop/NavTop";
import NavSide from "../../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import ProfilePage from "../../../../components/Student/Profile/ProfilePage";

export default function Profile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}

Profile.NavTop = NavTop;
Profile.NavSide = NavSide;

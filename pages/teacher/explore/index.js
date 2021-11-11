import React from "react";
import ExplorePage from "../../../components/Teacher/Explore/ExplorePage";
import NavSide from "../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../components/Layout/Teacher/NavTop/NavTop";

export default function Explore() {
  return (
    <>
      <ExplorePage />
    </>
  );
}

Explore.NavTop = NavTop;
Explore.NavSide = NavSide;

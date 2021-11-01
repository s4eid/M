import React from "react";
import ExplorePage from "../../components/Explore/ExplorePage";
import NavSide from "../../components/Layout/NavSildeTeacher/NavSide";
import NavTop from "../../components/Layout/NavTop/NavTop";

export default function Explore() {
  return (
    <>
      <ExplorePage />
    </>
  );
}

Explore.NavTop = NavTop;
Explore.NavSide = NavSide;

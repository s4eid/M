import React from "react";
import ExplorePage from "../../../components/Student/Explore/ExplorePage";
import NavSide from "../../../components/Layout/Student/NavSideStudent/NavSide";
import NavTop from "../../../components/Layout/Student/NavTopStudent/NavTop";

export default function Explore() {
  return (
    <div>
      <ExplorePage />
    </div>
  );
}

Explore.NavTopStudent = NavTop;
Explore.NavSideStudent = NavSide;

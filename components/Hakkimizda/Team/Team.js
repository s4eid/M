import React from "react";
import team from "./team.module.css";
import "swiper/css";
import { persons } from "../../../Data/SliderPersons";
import Persons from "./Person/Persons";
import Slider from "./Slider";
// import Swiper,{ A11y, Scrollbar, Pagination, Navigation } from "swiper";

export default function Team() {
  return (
    <div className={team.mainContainer}>
      <div className={team.titleContainer}>
        <div className={team.line}></div>
        <h1>Ekibimiz</h1>
        <div className={team.line}></div>
      </div>
      <div className={team.persons}>
        {persons.map((p) => (
          <Persons person={p} />
        ))}
      </div>
      {/* <Slider /> */}
    </div>
  );
}
import React, { useState } from "react";
import { persons } from "../../../Data/SliderPersons";
import { AnimatePresence } from "framer-motion";
import sliderC from "./slider.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrap } from "popmotion";
import Childs from "./Childs";
export default function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, persons.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className={sliderC.mainContainer}>
        <AnimatePresence
          initial={false}
          className={sliderC.container}
          custom={direction}
        >
          <Childs
            person={persons[imageIndex]}
            direction={direction}
            page={page}
            paginate={paginate}
          />
        </AnimatePresence>
        <FontAwesomeIcon
          className={sliderC.iconR}
          onClick={() => paginate(1)}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          className={sliderC.iconL}
          onClick={() => paginate(-1)}
          icon={faChevronLeft}
        />
      </div>
    </>
  );
}

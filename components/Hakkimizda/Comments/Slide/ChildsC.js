import React from "react";
import { motion } from "framer-motion";
import sliderComment from "./sliderC.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChildsC({ person, direction, page, paginate }) {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    //     exit: (direction) => {
    //       return {
    //         zIndex: 0,
    //         x: direction < 0 ? 1000 : -1000,
    //         opacity: 0,
    //       };
    //     },
  };
  return (
    <motion.div
      className={sliderComment.childs}
      key={page}
      variants={variants}
      //     src={persons[imageIndex].image}
      custom={direction}
      initial="enter"
      animate="center"
      //     exit={{ opacity: 0 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <div className={sliderComment.child}>
        <FontAwesomeIcon icon={faUser} className={sliderComment.icon} />
        <h1>{person.comment}</h1>
        <p>{person.name}</p>
      </div>
      {/* <div className={sliderC.child}>
        <Image
          src={person.image_2}
          layout="intrinsic"
          height={100}
          width={100}
        />
        <p>{person.job_2}</p>
        <h1>{person.name_2}</h1>
      </div> */}
    </motion.div>
  );
}

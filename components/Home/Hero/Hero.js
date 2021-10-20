import React, { useState, useEffect, useRef } from "react";
import { heroItems } from "../../../Data/HeroItems";
import hero from "./hero.module.css";
import Image from "next/image";
import NavBar from "../../Layout/NavBar/NavBar";
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const length = heroItems.length;
  const timeout = useRef(null);
  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={hero.mContainer}>
      <div className={hero.container}>
        {heroItems.map((m, index) => (
          <div key={index}>
            {index === current && (
              <div className={hero.slideWrapper}>
                <div className={hero.title}>
                  <h1>{m.title}</h1>
                </div>
                <div className={hero.arrows}>
                  <Image
                    onClick={nextSlide}
                    src="/Arrow.svg"
                    alt="arrow"
                    layout="intrinsic"
                    width={50}
                    height={50}
                  />
                  <Image
                    onClick={prevSlide}
                    src="/Arrow1.svg"
                    alt="arrow"
                    layout="intrinsic"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={hero.text}>
                  <h2>{m.text}</h2>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className={hero.containerBtn}>
          <button>Başvur</button>
        </div>
      </div>
    </div>
  );
}

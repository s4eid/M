import React, { useEffect, useState } from "react";
import Image from "next/image";
import details from "./details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
export default function Details() {
  const [count, setCount] = useState(0);
  let interval;
  const countUp = () => {
    interval = setInterval(() => {
      if (count < 600) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);
  };
  useEffect(() => {
    countUp();
    return () => {
      clearInterval(interval);
    };
  }, [interval, count]);

  return (
    <div className={details.mainContainer}>
      <div className={details.container}></div>
      <div className={details.child}>
        <div className={details.title}>
          <h1>Oğrenciler Siyisi</h1>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={details.titleIcon}
          />
          <h1>{count}</h1>
        </div>
        <div className={details.derslerContainer}>
          <h1>Dersler</h1>
          <div className={details.derslerBtns}>
            <div className={details.derslerChild}>
              <h1>Kimiya</h1>
              <p>
                Size en uygun Matematik öğretmeni bulmak için vaktiniz
                kısıtlıysa eğitim danışmanımızdan yararlanabilirsiniz. Eğitim
                danışmanımız sizin aradığınız kriterler en uygun öğretmeni sizin
                için bulsun ve anında size yönlendirsin
              </p>
              <button>Basla</button>
            </div>
            <div className={details.derslerChild}>
              <h1>Matematik</h1>
              <p>
                Size en uygun Matematik öğretmeni bulmak için vaktiniz
                kısıtlıysa eğitim danışmanımızdan yararlanabilirsiniz. Eğitim
                danışmanımız sizin aradığınız kriterler en uygun öğretmeni sizin
                için bulsun ve anında size yönlendirsin
              </p>
              <button>Basla</button>
            </div>
            <div className={details.derslerChild}>
              <h1>Fizik</h1>
              <p>
                Size en uygun Matematik öğretmeni bulmak için vaktiniz
                kısıtlıysa eğitim danışmanımızdan yararlanabilirsiniz. Eğitim
                danışmanımız sizin aradığınız kriterler en uygun öğretmeni sizin
                için bulsun ve anında size yönlendirsin
              </p>
              <button>Basla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

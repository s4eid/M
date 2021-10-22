import React, { useEffect, useState } from "react";
import details from "./details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSquareRootAlt,
  faAtom,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
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
          <div className={details.dersTitle}>
            <div className={details.line}></div>
            <h1>Oğrenciler Siyisi</h1>
            <div className={details.line}></div>
          </div>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={details.titleIcon}
          />
          <h1>{count}</h1>
        </div>
        <div className={details.derslerContainer}>
          <div className={details.dersTitle}>
            <div className={details.line}></div>
            <h1 className={details.titleD}>Dersler</h1>
            <div className={details.line}></div>
          </div>
          <div className={details.derslerBtns}>
            <div className={details.derslerChild}>
              <h1>Kimiya</h1>
              <FontAwesomeIcon icon={faFlask} />
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
              <FontAwesomeIcon icon={faSquareRootAlt} />
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
              <FontAwesomeIcon icon={faAtom} />
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

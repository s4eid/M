import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import tests from "./tests.module.css";
import KatilanPop from "../../../Modals/KatilanKisilarTeacher";
import { useRouter } from "next/router";
import { katilanData } from "../../../Data/KatilanlarData";

export default function Test({ postData }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const [pOpen, setPOpen] = useState(false);
  return (
    <>
      {postData.map((p, index) => (
        <div key={index} className={tests.child}>
          <div className={tests.title}>
            <p>{p.title}</p>
            <FontAwesomeIcon icon={faTrash} className={tests.trash} />
          </div>
          <div className={tests.likeAndComment}>
            <div>
              <p>{p.likes}</p>
              <FontAwesomeIcon icon={p.iconL} className={tests.icon} />
            </div>
            <div className={tests.likeAndCommentChild}>
              <p>{p.comments}</p>
              <FontAwesomeIcon icon={p.iconC} className={tests.icon} />
            </div>
          </div>
          <div className={tests.testBtn}>
            <button onClick={() => setPOpen(!pOpen)}>Katilan Kişilar</button>
            <button>Teste Düzenle</button>
          </div>
        </div>
      ))}
      <KatilanPop pOpen={pOpen} setPOpen={setPOpen} persons={katilanData} />
    </>
  );
}

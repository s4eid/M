import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import tests from "./tests.module.css";
import KatilanPop from "../../../../Modals/KatilanKisilarTeacher";
import LikePop from "../../../../Modals/LikePop";
import { useMutation } from "@apollo/client";
import { DELETE_TEST } from "../../../../graphql/Teacher/Mutation/deleteTest";

export default function Test({ postData }) {
  const [pOpen, setPOpen] = useState(null);
  const [pLOpen, setPLOpen] = useState(false);
  const [deleteTest, { loading, error }] = useMutation(DELETE_TEST);

  return (
    <>
      {postData.map((p, index) => (
        <div key={index} className={tests.child}>
          <div className={tests.title}>
            <p>{p.title}</p>
            <FontAwesomeIcon
              icon={faTrash}
              className={tests.trash}
              onClick={() => {
                deleteTest({
                  variables: { id: p.test_id },
                  update(cache, { data }) {
                    const identity = cache.identify({
                      test_id: data.deleteTest.test_id,
                      __typename: "TeacherTests",
                    });
                    cache.evict({ id: identity });
                  },
                });
              }}
            />
          </div>
          {/* <div className={tests.likeAndComment}>
            <div>
              <p>{p.likes}</p>
              <FontAwesomeIcon
                icon={p.iconL}
                onClick={() => setPLOpen(!pLOpen)}
                className={tests.icon}
              />
            </div>
            <div className={tests.likeAndCommentChild}>
              <p>{p.comments}</p>
              <FontAwesomeIcon icon={p.iconC} className={tests.icon} />
            </div>
          </div> */}
          <div className={tests.testBtn}>
            <button onClick={() => setPOpen(p.test_id)}>Katilan Kişilar</button>
            <button>Teste Düzenle</button>
          </div>
        </div>
      ))}
      <KatilanPop pOpen={pOpen} setPOpen={setPOpen} />
      <LikePop pLOpen={pLOpen} setPLOpen={setPLOpen} />
    </>
  );
}

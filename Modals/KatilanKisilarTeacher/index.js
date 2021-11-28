import React from "react";
import katilan from "./katilan.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_TESTS_RESULTS_TEACHER } from "../../graphql/Teacher/Query/getTestResultTeacher";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loading/Loading";

export default function KatilanPop({ pOpen, setPOpen }) {
  if (pOpen === null) return null;

  const { data, loading, error } = useQuery(GET_TESTS_RESULTS_TEACHER, {
    variables: { id: pOpen },
    skip: pOpen === null,
  });
  console.log(data);
  return (
    <>
      {data ? (
        <div className={katilan.overlay}>
          <div className={katilan.mainContainer}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setPOpen(null)}
              className={katilan.close}
            />
            <div className={katilan.personContainer}>
              {data.getTestsResultsTeacher.map((p) => (
                <div className={katilan.katilanContainer}>
                  <div className={katilan.katilanContainerName}>
                    <div className={katilan.profile}>
                      <p>{p.first_name.charAt(0)}</p>
                    </div>
                    <p className={katilan.name}>
                      {p.first_name} {p.last_name}
                    </p>
                  </div>
                  <div className={katilan.katilanPoint}>
                    <p>{p.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : loading ? (
        <Loading />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <></>
      )}
    </>
  );
}

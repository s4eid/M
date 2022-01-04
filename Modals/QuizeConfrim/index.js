import React from "react";
import quizeConfrim from "./quizeConfrim.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Field, Form } from "formik";
import { sendPhoto } from "../../Fetch/Teacher/sendPhoto";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { ADD_TEST } from "../../graphql/Teacher/Mutation/addTest";
import { useRouter } from "next/router";

export default function QuizeConfrim({ pOpen, setPOpen, finalValues }) {
  if (pOpen === null) return null;
  const { user } = useSelector((store) => store);
  const router = useRouter();
  const [AddTest, { data, loading, error }] = useMutation(ADD_TEST);
  console.log(loading);
  console.log(data);
  console.log(error);
  return (
    <>
      <div className={quizeConfrim.overlay}>
        <div className={quizeConfrim.mainContainer}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setPOpen(null)}
            className={quizeConfrim.close}
          />
          <div className={quizeConfrim.confrimContainer}>
            <Formik
              initialValues={{ title: "" }}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(finalValues);
                const images = await sendPhoto(finalValues.quizs);
                console.log(images);
                for (let i = 0; i < images.length; i++) {
                  finalValues.quizs[i].image = images[i];
                }
                AddTest({
                  variables: {
                    title: values.title,
                    creator: user.id,
                    quize: finalValues.quizs,
                  },
                  onCompleted: () => {
                    router.push("/teacher/explore");
                  },
                });
                console.log(finalValues);
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);
                // }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className={quizeConfrim.titleForm}>
                  <Field
                    type="text"
                    className={quizeConfrim.title}
                    name="title"
                  />
                  <button type="submit" disabled={isSubmitting}>
                    Teste Yayinla
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

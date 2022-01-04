import React, { useState } from "react";
import testE from "./testE.module.css";
import { initialValues } from "../../../../../Forms/TestEk";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faImage } from "@fortawesome/free-solid-svg-icons";
import { sendPhoto } from "../../../../../Fetch/Teacher/sendPhoto";
import { addTestSchema } from "../../../../../validation/Teacher/addTest";

import QuizeConfrim from "../../../../../Modals/QuizeConfrim";
export default function Test() {
  const [pOpen, setPOpen] = useState(null);
  const [finalValues, setFinalValues] = useState(null);
  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={addTestSchema}
        onSubmit={async (values) => {
          try {
            setFinalValues(values);
            setPOpen(true);
          } catch (error) {
            console.log(error);
          }
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, setFieldValue, errors, touched, dirty, isValid }) => (
          <Form className={testE.testContainer}>
            <FieldArray name="quizs">
              {({ insert, remove, push }) => (
                <>
                  {values.quizs.length > 0 &&
                    values.quizs.map((quize, index) => (
                      <div className={testE.child} key={index}>
                        {/* {console.log(errors)} */}
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={testE.trashIcon}
                          onClick={() => remove(index)}
                        />
                        <div className={testE.questionContainer}>
                          {/* <label htmlFor={`friends.${index}.name`}>Name</label> */}
                          <Field
                            name={`quizs.${index}.q`}
                            placeholder="Soru?"
                            className={testE.question}
                            type="text"
                          />
                          {/* <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                        /> */}
                        </div>
                        {/* {console.log(values)} */}
                        <label className={testE.choseFile} for="file">
                          {!values.quizs[index].image ? (
                            <FontAwesomeIcon
                              icon={faImage}
                              className={testE.choseFileIcon}
                              // className={testE.trashIcon}
                              // onClick={() => remove(index)}
                            />
                          ) : (
                            <p>{values.quizs[index].image.name}</p>
                          )}
                          {/* Fotoğraf Seç */}
                        </label>
                        <input
                          type="file"
                          id="file"
                          style={{ display: "none" }}
                          name={`quizs.${index}.image`}
                          // className={testE.choseFile}
                          onChange={(e) =>
                            setFieldValue(
                              `quizs.${index}.image`,
                              e.target.files[0]
                            )
                          }
                        />
                        <div className={testE.answerContainer}>
                          {/* <label htmlFor={`friends.${index}.email`}>Email</label> */}
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.a`}
                            placeholder="a"
                            type="text"
                          />
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.b`}
                            placeholder="b"
                            type="text"
                          />
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.c`}
                            placeholder="c"
                            type="text"
                          />
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.d`}
                            placeholder="d"
                            type="text"
                          />
                          <Field
                            as="select"
                            className={testE.answerKey}
                            name={`quizs.${index}.answerKey`}
                            // form="carform"
                          >
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                            <option value="d">d</option>
                          </Field>

                          {/* <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                        /> */}
                        </div>
                        {/* <div>
                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div> */}
                      </div>
                    ))}
                  <div className={testE.ekle}>
                    <FontAwesomeIcon
                      onClick={() =>
                        push({
                          q: "",
                          a: "",
                          b: "",
                          c: "",
                          d: "",
                          image: "",
                        })
                      }
                      className={testE.icon}
                      icon={faPlus}
                    />
                  </div>
                </>
              )}
            </FieldArray>
            <div className={testE.doneContainer}>
              <button type="submit" disabled={!isValid && dirty}>
                Bitir
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <QuizeConfrim
        pOpen={pOpen}
        finalValues={finalValues}
        setPOpen={setPOpen}
      />
    </>
  );
}

import React, { useState } from "react";
import testE from "./testE.module.css";
import { initialValues } from "../../../../../Forms/TestEk";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faImage } from "@fortawesome/free-solid-svg-icons";
import { addTestSchema } from "../../../../../validation/Teacher/addTest";

import QuizeConfrim from "../../../../../Modals/QuizeConfrim";
export default function Test() {
  const [pOpen, setPOpen] = useState(null);
  const [finalValues, setFinalValues] = useState(null);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addTestSchema}
        onSubmit={async (values) => {
          try {
            setFinalValues(values);
            setPOpen(true);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, setFieldValue, errors, touched, dirty, isValid }) => (
          <Form className={testE.testContainer}>
            {console.log(values)}
            <FieldArray name="quizs">
              {({ insert, remove, push }) => (
                <>
                  {values.quizs.length > 0 &&
                    values.quizs.map((quize, index) => (
                      <div className={testE.child} key={index}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={testE.trashIcon}
                          onClick={() => remove(index)}
                        />
                        <div className={testE.questionContainer}>
                          <Field
                            name={`quizs.${index}.q`}
                            placeholder="Soru?"
                            className={testE.question}
                            type="text"
                          />
                          <ErrorMessage
                            name={`quizs.${index}.q`}
                            component="div"
                            className={testE.errors}
                          />
                        </div>
                        <input
                          type="file"
                          id={`quizs.${index}.image`}
                          className={testE.choseFile}
                          // style={{ display: "none" }}
                          name={`quizs.${index}.image`}
                          onChange={(e) =>
                            setFieldValue(
                              `quizs.${index}.image`,
                              e.target.files[0]
                            )
                          }
                        />
                        <div className={testE.answerContainer}>
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.a`}
                            placeholder="a"
                            type="text"
                          />
                          <ErrorMessage
                            name={`quizs.${index}.a`}
                            component="div"
                            className={testE.errors}
                          />
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.b`}
                            placeholder="b"
                            type="text"
                          />
                          <ErrorMessage
                            name={`quizs.${index}.b`}
                            component="div"
                            className={testE.errors}
                          />
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.c`}
                            placeholder="c"
                            type="text"
                          />
                          <ErrorMessage
                            name={`quizs.${index}.c`}
                            component="div"
                            className={testE.errors}
                          />
                          <Field
                            className={testE.answer}
                            name={`quizs.${index}.d`}
                            placeholder="d"
                            type="text"
                          />
                          <ErrorMessage
                            name={`quizs.${index}.d`}
                            component="div"
                            className={testE.errors}
                          />
                          <Field
                            as="select"
                            // value="a"
                            className={testE.answerKey}
                            name={`quizs.${index}.answerKey`}
                          >
                            <option value="" selected disabled hidden>
                              Cevap Seçin
                            </option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                            <option value="d">d</option>
                          </Field>
                          <ErrorMessage
                            name={`quizs.${index}.answerKey`}
                            component="div"
                            className={testE.errors}
                          />
                          {typeof errors.quizs == "string" ? (
                            <p className={testE.errors}>{errors?.quizs}</p>
                          ) : (
                            <></>
                          )}
                        </div>
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

import React from "react";
import testE from "./testE.module.css";
import { initialValues } from "../../../../../Forms/TestEk";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { sendPhoto } from "../../../../../Fetch/Teacher/sendPhoto";
export default function Test() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        try {
          console.log(values);
          const images = await sendPhoto(values.quizs);
          for (let i = 0; i < images.length; i++) {
            values.quizs[i].image = images[i];
          }
          console.log(values);
        } catch (error) {
          console.log(error);
        }
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={testE.testContainer}>
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
                        {/* <label htmlFor={`friends.${index}.name`}>Name</label> */}
                        <Field
                          name={`quizs.${index}.question`}
                          placeholder="Soru?"
                          className={testE.question}
                          type="text"
                        />
                        {/* <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                        /> */}
                      </div>
                      <div>
                        {/* {console.log(values)} */}
                        <input
                          type="file"
                          name={`quizs.${index}.image`}
                          onChange={(e) =>
                            setFieldValue(
                              `quizs.${index}.image`,
                              e.target.files[0]
                            )
                          }
                        />
                      </div>
                      <div className={testE.answerContainer}>
                        {/* <label htmlFor={`friends.${index}.email`}>Email</label> */}
                        <Field
                          className={testE.answer}
                          name={`quizs.${index}.answer_1`}
                          placeholder="Cevap_1"
                          type="text"
                        />
                        <Field
                          className={testE.answer}
                          name={`quizs.${index}.answer_2`}
                          placeholder="Cevap_2"
                          type="text"
                        />
                        <Field
                          className={testE.answer}
                          name={`quizs.${index}.answer_3`}
                          placeholder="Cevap_3"
                          type="text"
                        />
                        <Field
                          className={testE.answer}
                          name={`quizs.${index}.answer_4`}
                          placeholder="Cevap_4"
                          type="text"
                        />
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
                        question: "",
                        answer_1: "",
                        answer_2: "",
                        answer_3: "",
                        answer_4: "",
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
            <button type="submit">Bitir</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

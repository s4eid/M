import * as Yup from "yup";

export const addTestSchema = Yup.object().shape({
  soru: Yup.string()
    .max(400, "Fazla Karekter")
    //     .min(6, "Too Short!")
    //     .max(30, "Too Long!")
    .required("Gerekli Bilgi"),
  a: Yup.string().max(400, "Fazla Karekter!").required("Gerekli Bilgi"),
  b: Yup.string().max(400, "Fazla Karekter!").required("Gerekli Bilgi"),

  c: Yup.string().max(400, "Fazla Karekter!").required("Gerekli Bilgi"),

  d: Yup.string().max(400, "Fazla Karekter!").required("Gerekli Bilgi"),

  answerKey: Yup.string().required("Gerekli Bilgi"),
});

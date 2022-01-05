import { object, array, string } from "yup";

export const addTestSchema = object().shape({
  quizs: array()
    .of(
      object().shape({
        q: string()
          .max(400, "Fazla Karekter!")
          .ensure()
          .required("Gerekli Bilgi!"),
        a: string().max(400, "Fazla Karekter!").required("Gerekli Bilgi!"),
        b: string()
          .max(400, "Fazla Karekter!")
          .ensure()
          .required("Gerekli Bilgi!"),
        c: string()
          .max(400, "Fazla Karekter!")
          .ensure()
          .required("Gerekli Bilgi!"),
        d: string()
          .max(400, "Fazla Karekter!")
          .ensure()
          .required("Gerekli Bilgi!"),
      })
    )
    .min(3, "En Az 3 Soru Yuklemeniz Lazem!")
    .required("Lütfen Bilgilere Girin!"),
});

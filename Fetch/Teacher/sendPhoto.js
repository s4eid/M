import axios from "axios";

export const sendPhoto = async (quize) => {
  let images = [];
  try {
    for (let i = 0; i < quize.length; i++) {
      const formData = new FormData();
      formData.append("file", quize[i].image);
      formData.append("upload_preset", "oipp5ox6");
      const data = await axios.post(
        "https://api.cloudinary.com/v1_1/nuzem/image/upload",
        formData
      );
      images.push(data.data.secure_url);
    }
    return images;
  } catch (error) {
    console.log(error);
  }
};

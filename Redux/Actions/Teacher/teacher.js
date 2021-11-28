import { TEACHER_TYPE } from "../../Types/Teacher/teacherTypes";
import { getUser } from "../../../Functions/getUser";

export const getTeacherInfo = () => async (dispatch) => {
  try {
    const user = await getUser("refresh_token");
    dispatch({ type: TEACHER_TYPE.TEACHER_INFO_TYPE, payload: user });
  } catch (error) {
    console.log(error);
  }
};

//   type: TEACHER_TYPE.TEACHER_INFO_TYPE,
//   payload: token,
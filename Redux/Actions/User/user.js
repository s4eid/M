import { USER_TYPE } from "../../Types/User/user";
import { getUser } from "../../../Functions/getUser";

export const getUserInfo = () => async (dispatch) => {
  try {
    const user = await getUser("refresh_token");
    console.log(user);
    dispatch({ type: USER_TYPE.USER_INFO_TYPE, payload: user });
  } catch (error) {
    console.log(error);
  }
};

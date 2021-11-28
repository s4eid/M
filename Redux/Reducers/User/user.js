import { USER_TYPE } from "../../Types/User/user";

const inisialState = {
  email: null,
  id: null,
  exp: null,
  role: null,
};

export const user = (state = inisialState, action) => {
  switch (action.type) {
    case USER_TYPE.USER_INFO_TYPE:
      return action.payload;
    default:
      return state;
  }
};

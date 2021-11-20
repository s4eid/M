export const loginTeacher_f = async (LoginTeacher, data, route, error) => {
  try {
    LoginTeacher({ variables: data });
    console.log(error);
    // route.push("/teacher/explore");
  } catch (error) {
    return error;
  }
};

import React, { useEffect } from "react";
import LoginTeacher from "../../components/LoginTeacher/LoginTeacher";
export default function LoginTeacherP() {
  // useEffect(() => {
  //   console.log(document.cookie);
  //   document.cookie = "testagain=me faf";
  // }, []);

  return (
    <div>
      <LoginTeacher />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  // console.log(req.cookies);
  if (req.cookies.refresh) {
    return {
      redirect: {
        destination: "/teacher/explore",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

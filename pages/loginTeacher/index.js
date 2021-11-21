import React from "react";
import LoginTeacher from "../../components/LoginTeacher/LoginTeacher";
export default function LoginTeacherP() {
  return (
    <div>
      <LoginTeacher />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  if (req.cookies.refresh_token) {
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

import React from "react";
import NavSide from "../../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../../components/Layout/Teacher/NavTop/NavTop";
import Loading from "../../../../components/Loading/Loading";
import TestlarimPage from "../../../../components/Teacher/Testlarim/TestlarimPage";
import { useQuery } from "@apollo/client";
import { GET_TEACHER_TESTS } from "../../../../graphql/Teacher/Query/getTeacherTests";
import { useSelector } from "react-redux";
export default function Testlarim() {
  const { user } = useSelector((state) => state);
  console.log(user);
  const { data, loading, error } = useQuery(GET_TEACHER_TESTS, {
    variables: { teacher_id: user.id },
    skip: !user.id,
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : data ? (
        <TestlarimPage data={data} />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <></>
      )}
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  if (!req.cookies.refresh) {
    return {
      redirect: {
        destination: "/loginTeacher",
        permanent: false,
      },
    };
  }
  // const client = initializeApollo();
  // const data = await client.query({
  //   query: GET_TESTS_TEACHER,
  //   context: {
  //     headers: {
  //       Cookie: req.headers.cookie,
  //     },
  //   },
  // });
  return {
    props: {
      initialApolloStatee: null,
      //  client.cache.extract(),
    },
  };
}

Testlarim.NavTop = NavTop;
Testlarim.NavSide = NavSide;

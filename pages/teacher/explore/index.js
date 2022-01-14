import React from "react";
import ExplorePage from "../../../components/Teacher/Explore/ExplorePage";
import NavSide from "../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../components/Layout/Teacher/NavTop/NavTop";
import Loading from "../../../components/Loading/Loading";
// import { initializeApollo } from "../../../apolloConfig/apollo";
import { GET_TESTS_TEACHER } from "../../../graphql/Teacher/Query/getTests";
import { useQuery } from "@apollo/client";

export default function Explore() {
  const { data, loading, error } = useQuery(GET_TESTS_TEACHER);
  return (
    <>
      {loading ? (
        <Loading />
      ) : data ? (
        <ExplorePage data={data.tests} />
      ) : error ? (
        <h1>...</h1>
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

Explore.NavTop = NavTop;
Explore.NavSide = NavSide;

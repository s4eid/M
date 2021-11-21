import React from "react";
import ExplorePage from "../../../components/Teacher/Explore/ExplorePage";
import NavSide from "../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../components/Layout/Teacher/NavTop/NavTop";
import { initializeApollo } from "../../../apolloConfig/apollo";
import { GET_TEST_TEACHER } from "../../../graphql/Teacher/Query/getTest";
import { useQuery } from "@apollo/client";

export default function Explore() {
  const { data } = useQuery(GET_TEST_TEACHER);
  return (
    <>
      <ExplorePage data={data.tests} />
    </>
  );
}
export async function getServerSideProps({ req, res }) {
  if (!req.cookies.refresh_token) {
    return {
      redirect: {
        destination: "/loginTeacher",
        permanent: false,
      },
    };
  }
  const client = initializeApollo();
  await client.query({ query: GET_TEST_TEACHER });
  return {
    props: { initialApolloState: client.cache.extract() },
  };
}

Explore.NavTop = NavTop;
Explore.NavSide = NavSide;

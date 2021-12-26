import React from "react";
import PostPage from "../../../../components/Teacher/Explore/Post/PostPage";
import NavSide from "../../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../../components/Layout/Teacher/NavTop/NavTop";
import { useQuery } from "@apollo/client";
import { GET_TEST_TEACHER } from "../../../../graphql/Teacher/Query/getTest";
import { useRouter } from "next/router";
import Loading from "../../../../components/Loading/Loading";
export default function Post() {
  const route = useRouter();
  const id = route.query.post;
  const { data, error, loading } = useQuery(GET_TEST_TEACHER, {
    variables: { id },
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : data ? (
        <PostPage data={data.test} />
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
  //   query: GET_TEST_TEACHER,
  //   context: {
  //     headers: {
  //       Cookie: req.headers.cookie,
  //     },
  //   },
  // });
  return {
    props: {
      initialApolloState: null,
      // client.cache.extract()
    },
  };
}

Post.NavTop = NavTop;
Post.NavSide = NavSide;

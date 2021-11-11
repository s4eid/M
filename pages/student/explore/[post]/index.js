import React from "react";
import PostPage from "../../../../components/Teacher/Explore/Post/PostPage";
import NavSide from "../../../../components/Layout/Student/NavSideStudent/NavSide";
import NavTop from "../../../../components/Layout/Student/NavTopStudent/NavTop";
export default function Post() {
  return (
    <>
      <PostPage />
    </>
  );
}

Post.NavTopStudent = NavTop;
Post.NavSideStudent = NavSide;

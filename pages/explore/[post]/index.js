import React from "react";
import PostPage from "../../../components/Explore/Post/PostPage";
import NavSide from "../../../components/Layout/NavSildeTeacher/NavSide";
import NavTop from "../../../components/Layout/NavTop/NavTop";
export default function Post() {
  return (
    <>
      <PostPage />
    </>
  );
}

Post.NavTop = NavTop;
Post.NavSide = NavSide;

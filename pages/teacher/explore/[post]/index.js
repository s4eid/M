import React from "react";
import PostPage from "../../../../components/Teacher/Explore/Post/PostPage";
import NavSide from "../../../../components/Layout/Teacher/NavSildeTeacher/NavSide";
import NavTop from "../../../../components/Layout/Teacher/NavTop/NavTop";
export default function Post() {
  return (
    <>
      <PostPage />
    </>
  );
}

Post.NavTop = NavTop;
Post.NavSide = NavSide;

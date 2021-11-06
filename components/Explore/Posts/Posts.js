import React from "react";
import posts from "./posts.module.css";
import { postData } from "../../../Data/PostsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function Posts() {
  const router = useRouter();
  return (
    <div className={posts.postMainContainer}>
      {postData.map((p, index) => (
        <div
          className={posts.post}
          key={index}
          onClick={() => router.push(`/explore/${index}`)}
        >
          <div className={posts.personContainer}>
            <div className={posts.personP}>
              <div className={posts.profile}>
                <p>{p.name.charAt(0)}</p>
              </div>
              <p className={posts.name}>{p.name}</p>
            </div>
            <div className={posts.dateContainer}>
              <p>{p.date}</p>
            </div>
          </div>
          <div className={posts.titleContainer}>
            <p>{p.title}</p>
          </div>
          <div className={posts.likeCommentsMainContainer}>
            <div className={posts.likeCommentsContainer}>
              <FontAwesomeIcon icon={p.iconL} className={posts.icon} />
              <p>{p.likes}</p>
              <FontAwesomeIcon icon={p.iconC} className={posts.icon} />
              <p>{p.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import posts from "./posts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/tr";
import { useRouter } from "next/router";

export default function Posts({ data }) {
  const router = useRouter();
  return (
    <div className={posts.postMainContainer}>
      {data.map((p, index) => (
        <div
          className={posts.post}
          key={index}
          onClick={() => router.push(`/teacher/explore/${p.test_id}`)}
        >
          <div className={posts.personContainer}>
            <div className={posts.personP}>
              <div className={posts.profile}>
                <p>{p.first_name.charAt(0)}</p>
              </div>
              <p className={posts.name}>
                {p.first_name} {p.last_name}
              </p>
            </div>
            <div className={posts.dateContainer}>
              <p>{moment(JSON.parse(p.test_createdat)).fromNow()}</p>
            </div>
          </div>
          <div className={posts.titleContainer}>
            <p>{p.title}</p>
          </div>
          <div className={posts.likeCommentsMainContainer}>
            <div className={posts.likeCommentsContainer}>
              <FontAwesomeIcon icon={faThumbsUp} className={posts.icon} />
              <p>2</p>
              <FontAwesomeIcon icon={faComment} className={posts.icon} />
              <p>4</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

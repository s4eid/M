import React from "react";
import personC from "./person.module.css";
import Image from "next/image";
export default function Persons({ person }) {
  return (
    <div className={personC.container}>
      <Image
        src={person.image}
        placeholder="blur"
        blurDataURL={person.blurImage}
        layout="intrinsic"
        alt="Persons"
        loading="lazy"
        width={128}
        height={128}
      />
      <p>{person.job}</p>
      <h1>{person.name}</h1>
    </div>
  );
}

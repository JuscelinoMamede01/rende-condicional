"use client";
import React, { useState } from "react";
import { postsData } from "./post-data";

export const Posts = () => {
  const [likes, setLikes] = useState(postsData.map(() => false)); //todos os posts começam com o likes=false

  const handleLikeClick = (id: number) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[id] = !newLikes[id];
      return newLikes;
    });
  };

  const postData = postsData.map((post, id) => (
    <li key={id}>
      <article className="flex w-full bg-white py-4  rounded-xl">
        <div className="w-1/2 flex justify-center">
          <img src={`/images/${post.image}`} alt="post-image" />
        </div>
        <div className="w-1/2 px-4">
          <div className="w-1/2 flex space-x-4 py-4">
            <img
              src={`/images/${post.imgProfile}`}
              alt="profile-image"
              className="w-10 "
            />
            <span className="text-sm font-extrabold flex items-center">
              {post.name}
            </span>
          </div>
          <div>
            <p>{post.postContent}</p>
            <div onClick={() => handleLikeClick} className="cursor-pointer">
              {likes[id] ? (
                <img
                  src={`/images/red-heart.png`}
                  alt="red-heart"
                  className="w-8"
                />
              ) : (
                <img
                  src={`/images/empty-heart.png`}
                  alt="empty-heart"
                  className="w-8"
                />
              )}
            </div>
          </div>
        </div>
      </article>
    </li>
  ));

  return <ul className="list-inside space-y-4">{postData}</ul>;
};

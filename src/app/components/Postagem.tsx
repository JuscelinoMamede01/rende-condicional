"use client";
import { Container } from "./Container";
import React, { useState } from "react";

interface PostProps {
  image: string;
  imgProfile: string;
  name: string;
  postContent: string;
}

export const Postagem = ({
  image,
  imgProfile,
  name,
  postContent,
}: PostProps) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike((prevLike) => {
      const novoEstado = !prevLike;
      return novoEstado;
    });
  };
  return (
    <>
      <Container>
        <article className="flex w-full bg-white py-4 rounded-xl">
          <div className="w-1/2 flex justify-center">
            <img src={`/images/${image}`} alt="post-image" />
          </div>
          <div className="w-1/2 px-4">
            <div className="w-1/2 flex space-x-4 py-4">
              <img
                src={`/images/${imgProfile}`}
                alt="profile-image"
                className="w-10 "
              />
              <span className="text-sm font-extrabold flex items-center">
                {name}
              </span>
            </div>
            <div>
              <p>{postContent}</p>
              <div onClick={handleClick} className="cursor-pointer">
                {like ? (
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
      </Container>
    </>
  );
};

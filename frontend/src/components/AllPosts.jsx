import React from "react";
import { getAllPosts } from "./utils/posts";
import PostItem from "./PostItem";

export default function AllPosts({ posts }) {
  return (
    <>
      {getAllPosts(posts).map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
}

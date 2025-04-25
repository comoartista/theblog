import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostTags } from "./postTags";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function PostItem({ post, isFlex = false, isGrid = false }) {
  if (!post) return null;
  

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={twMerge(
        clsx(
          "group flex flex-col gap-8",
          isFlex && "grid grid-cols-1 md:grid-cols-2 gap-x-8",
          isGrid && "grid md:grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-15"
        )
      )}>
      <div
        className={` overflow-hidden ${
          isGrid ? "lg:col-start-1 lg:col-end-7" : ""
        }`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${post.image?.url}`}
          alt={post.title}
          width={320}
          height={200}
          className={`object-cover w-full h-full group-hover:scale-103 group-hover:brightness-75 transition  ease-in`}
        />
      </div>
      <div className={isGrid ? "lg:col-start-7 lg:col-end-13" : ""}>
        <span className="text-[#6941C6] text-sm font-semibold">
          {post.formattedDate}
        </span>
        <div className="flex justify-between ">
          <h2 className="с-h2 ">{post.title}</h2>
          <img
            src="/icons/arrow.svg"
            className="w-[10px] h-[10px] group-hover:rotate-45 transition-transform duration-100 ease-in"
          />
        </div>
        <p className="pt-3 pb-6 с-text--description">{post.description}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <PostTags tags={post.Tags} />
        </div>
      </div>
    </Link>
  );
}

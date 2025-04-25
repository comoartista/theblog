import AllPosts from "@/components/AllPosts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PostTags } from "@/components/PostTags";
import Subscribe from "@/components/Subscribe";
import { formattedPosts } from "@/components/utils/posts";
import fetchPosts from "@/lib/fetch-data";
import Image from "next/image";
import React from "react";

export default async function Articles({ params }) {
  const { slug } = await params;
  const data = await fetchPosts();
  const posts = formattedPosts(data);

  const post = posts.find((post) => post.slug === slug);
  console.log(post);

  if (!post) {
    return <p className="text-center text-xl mt-10">Article not found.</p>;
  }

  return (
    <>
      <Header />
      <main className="mt-8 c-container flex flex-wrap lg:flex-nowrap lg:flex-row gap-8">
        <aside className="order-last lg:order-first lg:shrink-0 lg:w-[342px]">
          <h2 className="mb-8 text-2xl font-semibold">Recent blog posts</h2>
          <div className="grid grid-cols-2 md:grid-cols -3 lg:grid-cols-1 gap-8">
            <AllPosts posts={posts} />
          </div>
        </aside>

        <article>
          <span className="text-[#6941C6] text-sm font-semibold">
            {post.formattedDate}
          </span>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${post.image?.url}`}
            alt={post.title}
            width={320}
            height={200}
            className="pt-8 object-cover w-full"
          />
          {post.text?.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p className="pt-3" key={index}>
                  {block.children?.map((child, i) => {
                    const lines = child.text?.split("\n") || [""];
                    return lines.map((line, j) => (
                      <React.Fragment key={`${i}-${j}`}>
                        {child.bold ? (
                          <strong>{line}</strong>
                        ) : (
                          <span>{line}</span>
                        )}
                        {j < lines.length - 1 && <br />}
                      </React.Fragment>
                    ));
                  })}
                </p>
              );
            }

            if (block.type === "list" && block.format === "unordered") {
              return (
                <ul key={index} className="list-disc pl-6 pt-3 mb-4">
                  {block.children?.map((child, i) => (
                    <li key={i}>
                      {child.children?.map((sub, j) => {
                        const lines = sub.text?.split("\n") || [""];
                        return lines.map((line, k) => (
                          <React.Fragment key={`${j}-${k}`}>
                            {sub.bold ? (
                              <strong>{line}</strong>
                            ) : (
                              <span>{line}</span>
                            )}
                            {k < lines.length - 1 && <br />}
                          </React.Fragment>
                        ));
                      })}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}

          <div className="mt-6 flex items-center gap-2 flex-wrap">
            <PostTags tags={post.Tags} />
          </div>
        </article>
      </main>
      <Subscribe />

      <Footer />
    </>
  );
}

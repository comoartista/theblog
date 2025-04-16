import fetchPosts from "@/lib/fetch-data";
import Image from "next/image";
import Link from "next/link";
console.log("ffe");


export default async function Articles({ params }) {
  
  const { slug } = await params;
  const posts = await fetchPosts();

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <p className="text-center text-xl mt-10">Article not found.</p>;
  }

  return (
    <main className="c-container flex flex-wrap lg:flex-nowrap lg:flex-row gap-8">
      <aside className="order-last lg:order-first lg:shrink-0 lg:w-[342px]">
        <h2 className="c-h2">Recent blog posts</h2>
        <div className="grid grid-cols-2 md:grid-cols -3 lg:grid-cols-1 gap-8">
          {posts.map((post) => (
            <Link href={`/articles/${post.slug}`} key={post.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${post.image?.url}`}
                alt={post.title}
                width={342}
                height={240}
                className="object-cover w-full"
              />
              <div>
                <h2 className="с-h2">{post.title}</h2>
                <p className="pt-2 pb-6 с-text--description">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {post.tags?.map((tag) => (
                    <span className="c-button--tag" key={tag.id}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <article>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </article>
    </main>
  );
}

import Header from "@/components/header";
import getArticles from "@/lib/fetch-data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const articles = await getArticles();

  return (
    <>
      <Header />
      <main>
        <section className="text-7xl font-bold uppercase border-t-2 border-b-2 text-center">
          <h1 className="container mx-auto px-4 text-7xl lg:text-9xl xl:text-[210px] font-bold uppercase my-2">
            THE BLOG
          </h1>
        </section>
        <section className="container mx-auto px-4">
          <h2 className="с-h2 pt-12 pb-8">Recent blog posts</h2>
          <div>
            {articles.map((article) => {
              const { title, description, slug, coverImage, tags } = article;
              return (
                <Link
                  href={`/articles/${slug}`}
                  key={article.id}
                  className="mb-6">
                  <Image
                    className="w-full h-auto"
                    src={`${process.env.NEXT_PUBLIC_API_URL}${coverImage?.url}`}
                    alt={title}
                    width={600}
                    height={400}
                    priority
                  />
                  <h2 className="с-h2 pt-12 py-3">{title}</h2>
                  <p className="с-text-description">{description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

import Header from "@/components/header";
import getArticles from "@/lib/fetch-data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
            <div className="">
              <Articles index={1} flex="flex-col" width="592" height="228" />
            </div>
            <div className="flex flex-row md:flex-col gap-8">
              <Articles index={0} />
              <Articles index={0} />{" "}
            </div>
            <div className="lg:col-span-2 pt-[30px] pb-[30px] w-full">
              <Articles index={1} width="592" height="246" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function Articles({
  index,
  flex = "flex-row",
  width = "600",
  height = "400",
}) {
  const articles = await getArticles();
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4); // Відображення тільки 4 останніх статей

  const article = latestArticles[index]; // Отримуємо статтю за індексом

  return (
    <Link
      href={`/articles/${article.slug}`}
      key={article.id}
      className={`flex flex-col md:${flex} gap-6`}>
      <Image
        className="w-full h-auto object-cover flex-1/2"
        src={`${process.env.NEXT_PUBLIC_API_URL}${article.coverImage?.url}`}
        alt={article.title}
        width={width}
        height={height}
        priority
      />
      <div>
        <h2 className="с-h2">{article.title}</h2>
        <p className="pt-2 pb-6 с-text--description">{article.description}</p>
        <div className="flex items-center gap-x-2">
          {article.tags?.map((tag) => (
            <span className="c-button--tag" key={tag.id}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

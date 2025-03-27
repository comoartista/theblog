import Image from "next/image";
import Link from "next/link";

async function getArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*`
  );
  const data = await res.json();
  return data?.data || [];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Articles</h1>
      <div>
        {articles.map((article) => (
          <div key={article.id} className="mb-6">
            <h2 className="text-2xl font-semibold">
              <Link href={`/article/${article.attributes.slug}`}>
                {article.attributes.title}
              </Link>
            </h2>
            <p>{article.attributes.content.substring(0, 150)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
}

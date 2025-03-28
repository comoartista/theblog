async function getArticle(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug]=${slug}&populate=*`,

    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data = await res.json();
  return data?.data?.[0] || null;
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  console.log(article);

  if (!article) {
    return <p className="text-center text-xl mt-10">Article not found.</p>;
  }

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>

      {article.content.map((block, index) => (
        <p key={index} className="text-lg mb-4">
          {block.children.map((child, i) => child.text).join(" ")}
        </p>
      ))}
    </main>
  );
}

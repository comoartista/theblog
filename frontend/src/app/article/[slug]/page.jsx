async function getArticle(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`
  );
  const data = await res.json();
  return data?.data?.length ? data.data[0] : null;
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);

  if (!article) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{article.attributes.title}</h1>
      <img
        src={article.attributes.coverImage.url}
        alt={article.attributes.title}
        className="w-full my-4 rounded-lg"
      />
      <p className="text-lg">{article.attributes.content}</p>
    </main>
  );
}

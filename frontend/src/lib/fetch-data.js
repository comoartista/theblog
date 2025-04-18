export default async function fetchPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data?.data || [];
}

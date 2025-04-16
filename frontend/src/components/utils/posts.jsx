export function formattedPosts(posts) {
  return posts.map((post) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(post.date)
      .toLocaleDateString("en-GB", options)
      .replace(",", "");

    return { ...post, formattedDate };
  });
}

export function getFeaturedPosts(posts) {
  return posts
    .filter((post) => post.IsFeatured)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
}

export function getAllPosts(posts) {
  return posts
    .filter((post) => !post.IsFeatured)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

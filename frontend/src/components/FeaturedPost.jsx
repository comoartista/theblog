import PostItem from "./PostItem";
import { getFeaturedPosts } from "./utils/posts";

export default function FeaturedPost({ posts, postIndex, isFlex, isGrid }) {
  const featured = getFeaturedPosts(posts);
  const selectedPost = featured[postIndex]; // postIndex = 0, 1, 2...

  if (!selectedPost) return null;

  return <PostItem key={selectedPost.id} post={selectedPost} isFlex={isFlex} isGrid={isGrid} />;
}

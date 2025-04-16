import AllPosts from "@/components/AllPosts";
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { formattedPosts } from "@/components/utils/posts";
import fetchPosts from "@/lib/fetch-data";

export default async function Home() {
  const data = await fetchPosts();
  const posts = formattedPosts(data);

  return (
    <>
      <Header />
      <main>
        <section className=" text-7xl font-bold uppercase border-t-2 border-b-2 ">
          <h1 className="c-container flex justify-center text-7xl lg:text-9xl xl:text-[210px] font-bold uppercase my-2">
            THE BLOG
          </h1>
        </section>
        <section className="c-container">
          <h2 className="с-h2 pt-12 pb-8">Recent blog posts</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 lg:gap-y-15">
            <div className="lg:col-start-1 lg:col-end-7 ">
              <FeaturedPost posts={posts} postIndex={0} />
            </div>
            <div className="lg:col-start-7 lg:col-end-13">
              <div className="flex flex-col gap-8 ">
                {" "}
                <FeaturedPost posts={posts} postIndex={1} isFlex={true} />
                <FeaturedPost posts={posts} postIndex={2} isFlex={true} />
              </div>
            </div>
            <div className="lg:col-start-1 lg:col-end-13">
              <FeaturedPost posts={posts} postIndex={3} isGrid={true} />
            </div>
          </div>
        </section>
        <section className="c-container ">
          <div className="mt-15 mb-[30px]">
            {" "}
            <h2 className="с-h2 pb-8"> All blog posts</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-14 justify-between">
              <AllPosts posts={posts} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

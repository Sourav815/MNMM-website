import React from "react";
import Blog from "../components/Blogs/Blog";
import Hero from "../components/Blogs/Hero";
import Layout from "../components/Layout";
import { useFetch } from "../hooks/useFetch";

function Blogs() {
  const posts = useFetch();

  return (
    <Layout>
      <main className="bg-zinc-800 text-white flex flex-col items-center min-h-screen">
        <Hero />
        <h1 className="text-4xl font-extrabold py-10">Latest Posts </h1>

        <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap lg:p-10 gap-10 pb-10">
          {posts.allStrapiBlog.nodes.map((post) => (
            <Blog
              key={post.id}
              img={post.featuredImage}
              title={post.title}
              description={post.metadesc}
              url={post.id}
              tag={post.tag}
              date={post.createdAt}
              authorName={post.yourName}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Blogs;

export const Head = () => (
  <>
    <title>MNMM</title>
    <meta name="description" content="MNMM website" />
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
  </>
);

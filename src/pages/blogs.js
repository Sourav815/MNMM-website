import React from "react";
import Blog from "../components/Blogs/Blog";
import Hero from "../components/Blogs/Hero";
import Layout from "../components/Layout";
import { useFetch } from "../hooks/useFetch";

function Blogs() {
  const posts = useFetch();

  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col items-center min-h-screen">
        <Hero />
        <h1 className="text-4xl font-extrabold py-10">Latest Posts </h1>

        <div>
          {posts.allStrapiBlog.nodes.map((post) => (
            <Blog
              key={post.id}
              img={post.featuredImage}
              title={post.title}
              description={post.metadesc}
              url={post.id}
              // tags={post.node.tags.nodes}
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

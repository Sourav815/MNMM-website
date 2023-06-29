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
          {posts.allWpPost.edges.map((post) => (
            <Blog
              key={post.node.id}
              title={post.node.title}
              description={post.node.content}
              url={post.node.slug}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Blogs;

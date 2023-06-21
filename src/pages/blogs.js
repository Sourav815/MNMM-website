import React from "react";
import Blog from "../components/Blogs/blog";
import Hero from "../components/Blogs/Hero";
import Layout from "../components/Layout";

function blogs() {
  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col items-center min-h-screen">
        <Hero />
        <h1 className="text-4xl font-extrabold py-10">Latest Posts </h1>

        <div>
          <Blog />
          <Blog />
          <Blog />
        </div>
      </main>
    </Layout>
  );
}

export default blogs;

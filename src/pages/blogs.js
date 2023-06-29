import React from "react";
import Blog from "../components/Blogs/Blog";
import Hero from "../components/Blogs/Hero";
import Layout from "../components/Layout";
import { useFetch } from "../hooks/useFetch";

function Blogs() {
  const data = [
    {
      img: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      title: "Sweat, Strength, and Success, Success",
      description:
        "Before diving into any fitness journey, it's crucial to set specific, measurable, achievable, relevant, and time-bound (SMART) goals. Learn how to define your objectives and create a roadmap that keeps you motivated and focused throughout your fitness adventure.",
    },
  ];

  const posts = useFetch();

  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col items-center min-h-screen">
        <Hero />
        <h1 className="text-4xl font-extrabold py-10">Latest Posts </h1>

        <div>
          {data.map((blog, index) => (
            <Blog
              key={index}
              img={blog.img}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
        <div>from wordpress</div>
        <div>
          {posts.allWpPost.edges.reverse().map((post) => (
            <Blog
              key={post.node.id}
              title={post.node.title}
              description={post.node.content}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Blogs;

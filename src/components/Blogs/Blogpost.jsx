import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";

export default function BlogPost({ data }) {
  const post = data.allStrapiBlog;
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen">
        {post?.nodes.map((blog) => (
          <div className="flex flex-col items-center justify-center px-5 max-w-5xl mx-auto">
            {/* <h1 className="text-2xl lg:text-5xl font-extrabold pt-10 w-full flex justify-center">
              {blog.node.title}
            </h1> */}
            {/* <h4 className="text-lg font-light text-gray-400">DD/MM/YYYY</h4> */}
            <div
              className="lg:text-xl space-y-5 flex flex-col justify-center items-center mt-10 [&_img]:rounded-2xl [&_p]:text-justify [&>div]:flex [&>div]:ml-[-8rem] [&_strong]:text-xs [&_div_div]:ml-1 [&_ul]:flex [&_ul]:w-full [&_ul]:justify-around [&_li]:mb-8"
              // dangerouslySetInnerHTML={{ __html: blog.node.content }}
            >
              {blog.content.data.content}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allStrapiBlog(filter: { id: { eq: $slug } }) {
      nodes {
        id
        content {
          data {
            id
            content
          }
        }
      }
    }
  }
`;

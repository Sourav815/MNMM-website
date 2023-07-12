import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";

export default function BlogPost({ data }) {
  const post = data.allWpPost;
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen">
        {post.edges.map((blog) => (
          <div className="flex flex-col items-center justify-center px-5 max-w-5xl mx-auto">
            <h1 className="text-2xl lg:text-5xl font-extrabold pt-10 w-full flex justify-center">
              {blog.node.title}
            </h1>
            {/* <h4 className="text-lg font-light text-gray-400">DD/MM/YYYY</h4> */}
            <div
              className="text-center lg:text-xl space-y-5 flex flex-col justify-center items-center mt-10 [&_figure_img]:rounded-2xl [&_div_div_img]:rounded-full [&_p]:text-justify [&>div]:flex [&>div]:items-center [&>div]:ml-[-8rem] [&_strong]:text-xs [&_div_div]:ml-1 [&_ul]:flex [&_ul]:w-full [&_ul]:justify-around [&_li]:mb-8" 
              dangerouslySetInnerHTML={{ __html: blog.node.content }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          tags {
            nodes {
              name
            }
          }
          content
        }
      }
    }
  }
`;

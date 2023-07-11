import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";

export default function BlogPost({ data }) {
  const post = data.allWpPost;
  return (
    <Layout>
      <div className="min-h-screen max-w-xl mx-auto w-full">
        {post.edges.map((blog) => (
          <div className="flex flex-col items-center justify-center px-5">
            <h1 className="text-2xl font-extrabold pt-10 w-full flex justify-center">
              {blog.node.title}
            </h1>
            <h4 className="text-xl font-light">DD/MM/YYYY</h4>
            <div
              className="text-center space-y-5 flex flex-col justify-center items-center mt-10 [&:nth-child(3)]:text-justify"
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

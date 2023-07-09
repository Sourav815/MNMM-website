import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";

export default function BlogPost({ data }) {
  const post = data.allWpPost;
  return (
    <Layout>
      <div className="min-h-screen max-w-xl mx-auto">
        {post.edges.map((blog) => (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold py-10 px-3">
              {blog.node.title}
            </h1>
            <div
              className="px-5 text-center space-y-5"
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

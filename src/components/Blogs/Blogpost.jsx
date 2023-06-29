import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";

export default function BlogPost({ data }) {
  const post = data.allWpPost;
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {post.edges.map((blog) => (
          <>
            <h1 className="text-3xl font-extrabold p-10">{blog.node.title}</h1>
            <div>{blog.node.content}</div>
          </>
        ))}
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;

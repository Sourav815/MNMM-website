import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ data }) {
  const post = data.allStrapiBlog;
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen">
        {post?.nodes.map((blog) => (
          <div className="px-5 py-10 max-w-4xl mx-auto prose sm:prose-sm lg:prose-lg xl:prose-xl">
            <ReactMarkdown>{blog.content.data.content}</ReactMarkdown>
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

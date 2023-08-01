import { useStaticQuery, graphql } from "gatsby";

export const useFetch = () => {
  const data = useStaticQuery(graphql`
    query Blogs {
      allStrapiBlog {
        nodes {
          id
          title
          metadesc
          createdAt
          yourName
          tag
          featuredImage {
            id
            url
          }
        }
      }
    }
  `);

  return data;
};

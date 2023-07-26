import { useStaticQuery, graphql } from "gatsby";

export const useFetch = () => {
  const data = useStaticQuery(graphql`
    query Blogs {
      allStrapiBlog {
        nodes {
          id
          title
          metadesc
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

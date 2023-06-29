import { useStaticQuery, graphql } from "gatsby";

export const useFetch = () => {
  const data = useStaticQuery(graphql`
    query Posts {
      allWpPost {
        edges {
          node {
            id
            title
            content
            slug
          }
        }
      }
    }
  `);

  return data;
};

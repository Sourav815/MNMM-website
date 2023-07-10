import { useStaticQuery, graphql } from "gatsby";

export const useFetch = () => {
  const data = useStaticQuery(graphql`
    query Posts {
      allWpPost(sort: { date: DESC }) {
        edges {
          node {
            id
            title
            content
            slug
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `);

  return data;
};

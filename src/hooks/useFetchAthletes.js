import { useStaticQuery, graphql } from "gatsby";

export const useFetchAthletes = () => {
  const data = useStaticQuery(graphql`
    query Athletes {
      allStrapiAthlete {
        nodes {
          id
          name
          sport
          profilePicture {
            url
          }
        }
      }
    }
  `);

  return data;
};

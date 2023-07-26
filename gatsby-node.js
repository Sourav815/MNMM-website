exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query Blogs {
      allStrapiBlog {
        nodes {
          id
          content {
            data {
              content
            }
          }
        }
      }
    }
  `);

  const { data: althletes } = await graphql(`
    query Athletes {
      allStrapiAthlete {
        nodes {
          id
          name
          sport
          bio
          profilePicture {
            url
          }
        }
      }
    }
  `);

  data.allStrapiBlog.nodes.forEach((edge) => {
    const slug = edge.id;
    actions.createPage({
      path: `blogs/${slug}`,
      component: require.resolve(`./src/components/Blogs/Blogpost.jsx`),
      context: { slug: slug },
    });
  });

  althletes.allStrapiAthlete.nodes.forEach((edge) => {
    const slug = edge.id;
    actions.createPage({
      path: `community/${slug}`,
      component: require.resolve(`./src/components/Community/AtheletePage.jsx`),
      context: { slug: slug },
    });
  });
};

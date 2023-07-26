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

  data.allStrapiBlog.nodes.forEach((edge) => {
    const slug = edge.id;
    actions.createPage({
      path: `blogs/${slug}`,
      component: require.resolve(`./src/components/Blogs/Blogpost.jsx`),
      context: { slug: slug },
    });
  });
};

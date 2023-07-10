exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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
  data.allWpPost.edges.forEach((edge) => {
    const slug = edge.node.slug;
    actions.createPage({
      path: `blogs/${slug}`,
      component: require.resolve(`./src/components/Blogs/Blogpost.jsx`),
      context: { slug: slug },
    });
  });
};

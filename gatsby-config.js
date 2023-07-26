/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://35.243.205.170",
        accessToken:
          "39dde4ca2295994de639ab123d840e07f3e7eaa431887ca8f2d5e4229b02866d9ceecf23a0e850a6bb5772078d59eaa6231a4437d0a4ed556ff84cad7f6866dd07b9e46843d6988131618db4ceb24f34c3c58ce8a6a0a8c9becda1b4c35c746a5794579ad2a935a97de4e1a48a0b6985315daf0b6f0bb6b31cf31d5d5691d549",
        collectionTypes: ["blog", "athlete"],
        singleTypes: [],
        maxParallelRequests: 5, // (Optional) Default: Number.POSITIVE_INFINITY
        remoteFileHeaders: {
          /**
           * Customized request headers
           * For http request with a image or other files need authorization
           * For expamle: Fetch a CDN file which has a security config when gatsby building needs
           */
          Referer: "https://your-site-domain/",
          // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: "http://35.243.205.170/index.php?graphql",
    //     // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
    //     // process.env.WPGRAPHQL_URL,
    //     // || `http://localhost/wordpress/index.php?graphql`,
    //     schema: {
    //       //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
    //       typePrefix: `Wp`,
    //     },
    //     develop: {
    //       //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
    //       hardCacheMediaFiles: true,
    //     },
    //     type: {
    //       Post: {
    //         limit:
    //           process.env.NODE_ENV === `development`
    //             ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
    //               50
    //             : // and we don't actually need more than 5000 in production for this particular site
    //               5000,
    //       },
    //     },
    //   },
    // },
  ],
};

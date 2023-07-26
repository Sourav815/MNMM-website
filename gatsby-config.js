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
        apiURL: process.env.STRAPI_LOCAL_URL,
        accessToken:
          "d4edac00f44de2da92ad3a4e0b4c4469970547d1d8d7d23a8b811bca116ceb93361d99555719054609d2c6dfbfb255588c0c846ffb331e5bc238f07712409bbe8582676b5b0478c0c63eb86da409d04b3b31b3bec7ffb594a414ba4594c66b8322998c3450adf261dbf99bc07b0a7e152fe88521e38eda5294fb1412817dd000",
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "http://35.243.205.170/index.php?graphql",
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
        // process.env.WPGRAPHQL_URL,
        // || `http://localhost/wordpress/index.php?graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
  ],
};

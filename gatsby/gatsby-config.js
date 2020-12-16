import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    pathPrefix: '/blog',
    siteMetadata: {
      title: `Tyler Henry`,
      siteUrl: 'https://www.tylerhenry.blog',
      description: `Blog written by the great Tyler Henry.  Just kidding.  He's really, really dumb.`,
      image: '/lightningbolt.png',
      twitter: '@ty24henry',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      {
        // this is the name of the plugin you are adding
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: '6qkh211i',
          dataset: 'production',
          watchMode: true,
          token: process.env.SANITY_TOKEN,
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: 'UA-142485528-7',
        },
      },
      {
        resolve: `gatsby-plugin-hotjar`,
        options: {
          includeInDevelopment: true, // optional parameter to include script in development
          id: 2159035,
          sv: 6,
        },
      },
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: `tyler-henry`
        }
      },
    ],
  };
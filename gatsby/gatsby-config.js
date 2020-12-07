import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    pathPrefix: '/blog',
    siteMetadata: {
      title: `Tyler Henry`,
      siteUrl: 'http://www.tylerhenry.blog',
      description: `Blog written by the great Tyler Henry.  Just kidding.  He's really, really dumb.`,
      image: '/favicon.png',
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
    ],
  };
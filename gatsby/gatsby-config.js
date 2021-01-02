import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    pathPrefix: '/',
    siteMetadata: {
      title: `Tyler Henry's Blog`,
      siteUrl: 'https://www.tylerhenry.blog/',
      description: `Tyler Henry writes essays, makes websites, and creates short videos and sketches.`,
      image: '/favicon.png',
      twitter: '@ty24henry',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Tyler Henry's Blog`,
          short_name: `tyler-henry-blog`,
          description: `Tyler Henry writes essays, makes websites, and creates short videos and sketches.`,
          lang: `en`,
          icon: `static/favicon.png`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#5944e4`,
          display: `standalone`,
        },
      },
      `gatsby-plugin-offline`,
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
    ],
  };
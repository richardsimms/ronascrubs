module.exports = {
  siteMetadata: {
    title: ` A not for profit organisation creating scrubs for our healthcare staff`,
    description: `Our mission is to provide a new way of giving back to our medical heroes, and the wider community, during the COVID-19 pandemic.`,
    author: `Rona Scrubs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },    
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `100`,
              `100i`,
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`, `800`],
          },
          {
            family: `Raleway`,
            variants: [`500`, `600`],
          },
          {
            family: `Heebo`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`],
          },
          {
            family: `B612`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `DM Sans`,
            variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1746281,
        sv: 6
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-56512737-7",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
         respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "ronascrubs.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',

  ],
};

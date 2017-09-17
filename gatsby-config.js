module.exports = {
  siteMetadata: {
    author: 'Stephen Nixon',
    title: `Stephen Nixon's Design, Type, and Code Blog`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
        pathPrefix: '/',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          // `markdown-it`, //not working yet
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1395
            }
          },
          {
          resolve: `gatsby-remark-prismjs`,
        },

        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp'
  ],
  
}

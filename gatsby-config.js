module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  polyfill: false,
  siteMetadata: {
    author: 'Jonathan Cremin',
    title: 'Jonathan Cremin\'s Blog',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 660,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-66209-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp'
  ],
}

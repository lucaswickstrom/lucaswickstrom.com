module.exports = {
  siteMetadata: {
    siteUrl: `https://lucaswickstrom.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingId: 'G-W4GRB35MPB',
      },
    },
  ],
};

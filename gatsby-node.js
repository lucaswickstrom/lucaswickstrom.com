exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.module.rules = [
    ...config.module.rules.filter(
      (rule) =>
        String(rule.test) !==
        String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/),
    ),
    {
      use: loaders.url(),
      test: /\.(ico|svg|gif)(\?.*)?$/,
    },
    {
      test: /\.(jpg|jpeg|png|gif|webp|avif)(\?.*)?$/i,
      use: {
        loader: 'sharp-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          cacheDirectory: true,
          presets: {
            carousel: {
              name: '[name]@[width]x[height].[hash:8].[ext]',
              format: ['webp', 'jpg'],
              height: [256 * 2],
            },
            profile: {
              format: ['webp', 'jpg'],
              width: 192 * 2,
            },
          },
        },
      },
    },
  ];
  actions.replaceWebpackConfig(config);
};

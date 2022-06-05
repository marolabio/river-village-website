module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }
    return config;
  },
};

const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1',
        destination: 'http://192.168.43.170:8081/api/v1' // Proxy to Backend
      }
    ]
  }
};

module.exports = withPlugins([], nextConfig);

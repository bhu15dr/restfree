/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Disabling Turbopack and ensuring Webpack is used
  experimental: {
    turbopack: false,  // Disable Turbopack
  },
  
  // Optionally, you can configure Webpack here if needed
  webpack: (config, { isServer }) => {
    if (isServer) {
      // You can customize Webpack settings here, if necessary
      config.experiments = { ...config.experiments, topLevelAwait: true };
    }
    return config;
  },
};

export default nextConfig;

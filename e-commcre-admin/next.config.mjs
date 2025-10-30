/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: { 
    remotePatterns: [ 
      { 
        hostname: "firebasestorage.googleapis.com" 
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;

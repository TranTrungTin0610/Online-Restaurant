/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: { 
        remotePatterns: [ 
            { 
                hostname: "firebasestorage.googleapis.com" 
            }
        ]
    } 
    module.exports = {
        eslint: {
          ignoreDuringBuilds: true,
        },
      };
      
};
export default nextConfig;

import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://slelguoygbfzlpylpxfs.supabase.co/**"),
      new URL("https://d1mgcpums0qvsa.cloudfront.net/**"),
    ],
  },
};

export default nextConfig;

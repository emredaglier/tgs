import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["heeayulnhyor92wd.public.blob.vercel-storage.com"],
  },
};

export default withNextVideo(nextConfig);

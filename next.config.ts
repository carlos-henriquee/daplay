import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/BXsH868X59U/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/S/pv-target-images/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 's2.glbimg.com',
        port: '',
        pathname: '/**',
        search:'',
      },
      {
        
          protocol: 'https',
          hostname: 'wallpapers.com',
          port: '',
          pathname: '/images/**',
          search:'',
      },
      {
          protocol: 'https',
          hostname: 'clubecinema.com.br',
          port: '',
          pathname: '/wp-content/uploads/2014/11/**',
          search:'',
      },
      {
          protocol: 'https',
          hostname: 't.ctcdn.com.br',
          port: '',
          pathname: '/Yeq8VifLeoKTiFKmTl35f1wqsV8=/717x228:3089x1563/1200x675/smart/**',
          search:'',
      }
    ],
  },
};

export default nextConfig;

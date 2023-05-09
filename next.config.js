module.exports = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    NEXT_PUBLIC_A2IMCMS_API_URL: process.env.NEXT_PUBLIC_A2IMCMS_API_URL,
    NEXT_PUBLIC_A2IMCMS_API_GQL_URL: process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
  images: {
    domains: [
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
      'images.a2imindieweek.org',
      'a2imindieweek.org',
      'indieweek.xyz',
      'a2im-strapi-cms-images.s3.amazonaws.com',
      'i.ytimg.com',
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'a2imindieweek.org',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'http',
        hostname: 'images.a2imindieweek.org',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'http',
        hostname: 'a2imindieweek.org',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'http',
        hostname: 'indieweek.xyz',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'http',
        hostname: 'a2im-strapi-cms-images.s3.amazonaws.com',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'http',
        hostname: 'i.ytimg.com',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'a2imindieweek.org',
        port: '443',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'images.a2imindieweek.org',
        port: '443',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'a2imindieweek.org',
        port: '443',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'indieweek.xyz',
        port: '443',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'a2im-strapi-cms-images.s3.amazonaws.com',
        port: '443',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '443',
        pathname: '/***',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; sandbox;",
    minimumCacheTTL: 60,
},
experimental: {
  appDir: true,
},
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
}
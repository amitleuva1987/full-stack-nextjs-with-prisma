/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env:{
    NEXTAUTH_URL:'******',
    GIT_ID:"*******",
    GIT_SECRET:"*******",
    EMAIL_SERVER:"*********",
    EMAIL_FROM:"********",
    DATABASE_URL:"********"
   },
   target: 'serverless',
}

module.exports = nextConfig

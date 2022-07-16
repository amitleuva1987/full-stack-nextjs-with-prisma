This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to deploy over aws using serverless

## To deploy over aws, refer "aws-version" branch. Main branch works with "Vercels"

Open the next.config.js file and fill the environment variables.
```bash
NEXTAUTH_URL:'******',
GIT_ID:"*******",
GIT_SECRET:"*******",
EMAIL_SERVER:"*********",
EMAIL_FROM:"********",
DATABASE_URL:"********"
```

then run below commands

```bash
npm install
npx prisma generate
npm run build
serverless
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

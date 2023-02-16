This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
cp .env.example .env
add API_URL="https://simple-api.anggitutomo.com"

npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## API endpoint
```bash
GET https://simple-api.anggitutomo.com/api/list
POST https://simple-api.anggitutomo.com/api/list
GET https://simple-api.anggitutomo.com/api/list/{id}
PATCH https://simple-api.anggitutomo.com/api/list/{id}
DELETE https://simple-api.anggitutomo.com/api/list/{id}
```

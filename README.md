# Coding Practice

Features:

- Favorite dogs React App: https://sojern.orangejuice.vercel.app/
- api providing version number comparison
- api providing math calculations
- /img providing server tracking

## API Usage (TODO)

### /api/version

Compare two version numbers

If version1 > version2 return 1,

If version1 < version2 return -1,

otherwise return 0

Example request: `[GET]  /api/version?v1=0.1&v2=1.1`

Example response: `{"result":-1}`

### /api/math

Calculate math result and return to the user, including:

- minimum (func: min)
- maximum (func: max)
- average (func: avg)
- median (func: median)
- percentile (func: percentile)

Example request:

``[GET]  /api/math``

with json

```json
{
  "func": "min",
  "numbers": [
    35.4525,
    2465.34,
    253.42,
    5,
    425.5,
    234,
    57426,
    4265,
    523,
    2593
  ],
  "quantifier": 10
}
```

Example response:

```json
{
  "statusCode": 200,
  "message": "calculated minimum value",
  "result": 5
}
```

### /api/ping

Returns response code 200 and string OK when file /tmp/ok is present, if file is not present returns 503 service
unavailable

Example request: `[GET]  /api/ping`

Example response: `ok`

### /api/img

Returns a 1x1 image, and log the request to mongodb database.

# Reference & Credits

- https://stackoverflow.com/questions/22172604/convert-image-from-url-to-base64
- https://www.robinwieruch.de/local-storage-react/#local-storage-in-react
- https://usehooks.com/useLocalStorage/
- https://usehooks-ts.com/react-hook/use-local-storage
- https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page
- https://stackoverflow.com/questions/69837146/use-swr-to-fetch-multiple-times-to-populate-an-array
- https://stackoverflow.com/questions/70110536/how-should-i-fetch-data-onclick-in-next-js
- https://react-icons.github.io/react-icons/search?q=refresh
- https://dev.to/dendekky/accessing-localstorage-in-nextjs-39he
- https://stackoverflow.com/questions/68771600/react-js-api-call-jest-test-case
- https://seanconnolly.dev/unit-testing-nextjs-api-routes
- https://jestjs.io/docs/api#describename-fn
- https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest
- https://jestjs.io/docs/configuration
- https://github.com/vercel/next.js/tree/canary/examples/with-jest
- https://nodejs.org/api/fs.html
- https://nextjs.org/docs/api-routes/edge-api-routes
- https://www.prisma.io/docs/concepts/database-connectors/mongodb
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-node-mongodb

---

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

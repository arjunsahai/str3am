This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run `npm install`

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Keys and Unlock Locks
You'll need to create a Livepeer Studio account. You can generate an API Key from there.

Create a .env folder in the root and set `NEXT_PUBLIC_STUDIO_API_KEY`.

You'll also need to create a lock using the Unlock Dashboard. After creating the lock update the config in `./components/WatchStream.tsx`.

## Awards
This project won $2000 Livepeer best use prize for EthSF hackathon. See [this link](https://ethglobal.com/showcase/str3am-tef4d) for details

import * as React from 'react';

import { NavHeader } from '../components';

const Page = () => {
  return (
    <>
      <NavHeader title='Welcome to Str3am' tab='Home'></NavHeader>
      <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h2 className='text-3xl'>🎥 Str3am is a decentralized streaming application</h2>
            <br></br>
            <h2 className='text-3xl'>⚡️ Streaming is powered by Livepeer</h2>
            <br></br>
            <h2 className='text-3xl'>🔐 Viewers can subscribe to streamers via Free or Paid Subscriptions powered by Unlock</h2>
            <br></br>
            <h2 className='text-3xl'>👌 Streamers have full control over the rates and lengths of subscriptions</h2>

          </div>
        </main>
      {/* <h1 className="text-3xl font-bold underline">Str3am</h1>
      <CreateStream />
      <WatchStream /> */}
    </>
  );
};

export default Page;

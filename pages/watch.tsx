import * as React from 'react';

import { NavHeader, WatchStream } from '../components';

const Page = () => {
  return (
    <>
      <NavHeader title='Watch a Str3am' tab='Watch'></NavHeader>
      <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <WatchStream />
          </div>
        </main>
    </>
  );
};

export default Page;

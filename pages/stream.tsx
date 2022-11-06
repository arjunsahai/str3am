import * as React from 'react';

import { NavHeader, CreateStream } from '../components';

const Page = () => {
  return (
    <>
      <NavHeader title='Create a Str3am' tab='Stream'></NavHeader>
      <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <CreateStream />
          </div>
        </main>
    </>
  );
};

export default Page;

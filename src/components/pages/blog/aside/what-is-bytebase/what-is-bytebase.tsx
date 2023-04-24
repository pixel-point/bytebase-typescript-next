import Button from '@/components/shared/button';

import ROUTE from '@/lib/route';

const WhatIsBytebase = () => {
  return (
    <figure className="flex flex-col justify-between rounded-xl bg-primary-1 p-5 text-white lg:col-span-5 lg:col-start-2 md:col-span-6 sm:col-span-full sm:rounded-[4px]">
      <div>
        <h3 className="font-title text-34 leading-none">What is Bytebase?</h3>
        <p className="mt-3 text-15 leading-snug lg:mt-2.5 sm:mt-2">
          Bytebase offers a web-based collaboration workspace to help DBAs and Developers manage the
          lifecycle of application database schemas.
        </p>
      </div>
      <Button
        className="mt-4 flex h-9 w-[122px] items-center justify-center uppercase"
        theme="gray-filled"
        href={ROUTE.ABOUT}
        size="sm"
      >
        Learn more
      </Button>
    </figure>
  );
};

export default WhatIsBytebase;

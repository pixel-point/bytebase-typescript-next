import { useCallback, useState } from 'react';

import clsx from 'clsx';

interface AccordionProps {
  title: string;
  description: string;
  isOpenExternal?: boolean;
  onChange?: () => void;
  defaultOpen?: boolean;
}

const Accordion = ({
  title,
  description,
  defaultOpen,
  onChange,
  isOpenExternal,
}: AccordionProps) => {
  const [isOpenLocal, setIsOpenLocal] = useState(defaultOpen);
  const isOpen = onChange ? isOpenExternal : isOpenLocal;

  const handleToggleLocalIsOpen = useCallback(() => {
    setIsOpenLocal((prev) => !prev);
  }, []);
  const handleClick = onChange || handleToggleLocalIsOpen;

  return (
    <div className="bg-tones-green-light w-full">
      <div
        className={clsx(
          isOpen
            ? 'cursor-pointer pt-6 xl:pt-4 lg:pt-4'
            : 'cursor-pointer py-6 xl:py-5 lg:py-4 lg:pt-4',
        )}
        onClick={handleClick}
      >
        <div className="">
          {isOpen ? (
            <>
              <div className="flex items-center">
                <img
                  src="/images/accordion-arrow.svg"
                  alt=""
                  className="h-8 lg:h-7 shadow-iconGreen rounded-[100%] shrink-0"
                />
                <p className="ml-4 lg:ml-3 font-bold leading-extra-tight -tracking-wider xl:tracking-normal text-24 xl:text-20 lg:text-18 lg:font-semibold">
                  {title}
                </p>
              </div>
              <p className="pl-12 mt-[11px] 2xl:mt-2 xl:mt-1 lg:mt-1.5 pb-6 2xl:pb-5 text-16 xl:text-14 leading-normal xl:leading-snug">
                {description}
              </p>
            </>
          ) : (
            <div className="flex items-center">
              <img
                src="/images/accordion-arrow-green.svg"
                alt=""
                className="h-8 lg:h-7 rounded-[100%] shrink-0"
              />
              <div className="ml-4 lg:ml-3">
                <p className="font-bold leading-tight -tracking-wider xl:tracking-normal text-24 xl:text-20 lg:text-18 lg:font-semibold">
                  {title}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

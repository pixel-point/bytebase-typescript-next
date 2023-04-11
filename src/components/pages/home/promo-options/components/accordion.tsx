import Image from 'next/image';

import { useCallback, useState } from 'react';

import clsx from 'clsx';

interface AccordionProps {
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  isOpenExternal?: boolean;
  onChange?: () => void;
  defaultOpen?: boolean;
}

const Accordion = ({
  title,
  description,
  image,
  imageMobile,
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
    <div
      className={clsx(
        isOpen
          ? 'bg-opacity-50 bg-tones-purple-light'
          : 'bg-cite bg-tones-purple-light border-t-[1px] border-b-[1px] border-white',
      )}
    >
      <div
        className={clsx(
          isOpen
            ? 'cursor-pointer container py-0 lg:pt-12 md:pt-10 grid grid-cols-12 md:grid-cols-4 grid-gap items-center'
            : 'cursor-pointer container border-none py-[26px] lg:py-6 md:py-5',
        )}
        onClick={handleClick}
      >
        {isOpen ? (
          <div
            className={clsx(' flex col-start-1 col-end-8 xl:col-end-7 lg:col-end-13 md:col-end-5')}
          >
            <img
              src="/images/accordion-arrow.svg"
              alt=""
              className="w-14 xl:w-11 lg:w-9 md:w-6 h-14 xl:h-11 lg:h-9 md:h-6 shadow-icon rounded-[100%] shrink-0"
            />
            <div className="ml-[30px] xl:ml-6 lg:ml-4 md:ml-3">
              <p
                className={clsx(
                  isOpen
                    ? 'font-bold leading-[112.5%] -tracking-[0.04em] ml-0 text-44 xl:text-36 lg:text-30 md:text-24'
                    : 'ml-7 text-30',
                )}
              >
                {title}
              </p>
              {isOpen && (
                <div className="order-1 flex-grow col-start-1 col-end-8 md:col-end-5">
                  <p className="mt-4.5 xl:mt-2 lg:mt-1.5 text-18 xl:text-16 lg:text-14 leading-none 2xl:max-w-[604px] xl:!max-w-[538px]">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center col-start-1 col-end-8">
            <img
              src="/images/accordion-arrow-closed.svg"
              alt=""
              className="h-11 w-11 xl:w-[38px] xl:h-[38px] lg:w-8 lg:h-8 md:w-7 md:h-7 rounded-[100%] shrink-0"
            />
            <div
              className={clsx(
                isOpen
                  ? 'font-bold leading-[112.5%] -tracking-[0.04em] ml-0 text-44 xl:text-36 lg:text-30 md:text-24'
                  : 'font-bold leading-[112.5%] -tracking-[0.04em] ml-7 xl:ml-6 lg:ml-4 md:ml-3 text-30 xl:text-24 lg:text-20 md:text-18',
              )}
            >
              {title}
              {isOpen && (
                <div className="order-1 flex-grow col-start-1 col-end-8">
                  <p className="mt-4.5 text-18 leading-none">{description}</p>
                </div>
              )}
            </div>
          </div>
        )}
        {isOpen && (
          <div className="col-start-8 xl:col-start-7 col-end-13 lg:col-start-2 lg:col-end-12 md:col-start-1 md:col-end-5">
            <div>
              <Image
                className="order-2 flex-shrink-0 translate-x-3 md:hidden"
                src={image}
                width={590}
                height={418}
                alt=""
              />
              <Image
                className="order-2 mt-6 w-full flex-shrink-0 translate-x-3 hidden md:block"
                src={imageMobile}
                width={328}
                height={270}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

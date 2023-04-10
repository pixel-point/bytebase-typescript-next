import Image from 'next/image';

import { FC, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import AccordionIconClosed from '@/svgs/accordion-arrow-closed.inline.svg';
import AccordionIcon from '@/svgs/accordion-arrow.inline.svg';

interface AccordionProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const Accordion: FC<AccordionProps> = ({ title, description, image, index }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isOpen = activeIndex === index;

  const handleToggle = () => {
    if (isOpen) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const backgroundColor = `bg-cite bg-tones-purple-light border-t-[1px] border-b-[1px] border-white ${
    isOpen ? 'bg-opacity-50' : ''
  }`;

  const titleText = `ml-7 text-30 font-bold leading-[112.5%] -tracking-[0.04em] ${
    isOpen ? '!ml-0 text-44 font-bold leading-[112.5%] -tracking-[0.04em]' : ''
  }`;

  const buttonClass = `py-[26px] ${isOpen ? 'py-0' : ''}`;

  return (
    <div className={backgroundColor}>
      <div
        className={clsx(
          'cursor-pointer container grid grid-cols-12 gap-x-10 2xl:gap-x-9 items-center py-[26px]',
          buttonClass,
        )}
        onClick={handleToggle}
      >
        {isOpen ? (
          <div className={clsx('flex col-start-1 col-end-8')}>
            <AccordionIcon className="h-14 shadow-icon rounded-[100%] shrink-0 " />
            <div className="ml-[30px]">
              <p className={titleText}>{title}</p>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="order-1 flex-grow col-start-1 col-end-8"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="mt-4.5 text-18 leading-none">{description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="flex items-center col-start-1 col-end-8">
            <AccordionIconClosed className="h-11 rounded-[100%] shrink-0" />
            <div className={titleText}>
              {title}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="order-1 flex-grow col-start-1 col-end-8"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="mt-4.5 text-18 leading-none">{description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="col-start-8 col-end-13"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div>
                <Image
                  className="order-2 flex-shrink-0 translate-x-3"
                  src={image}
                  width={590}
                  height={418}
                  alt=""
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;

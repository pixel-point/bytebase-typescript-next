'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { LABELS, PLANS } from './data/pricing-plans';
import PlanCard from './plan-card';

const Table = () => {
  const [currentRow, setCurrentRow] = useState('');

  useEffect(() => {
    const cells = document.querySelectorAll(`[data-row-id]`);

    cells.forEach((cell) => {
      const rowId = cell.getAttribute('data-row-id') || '';

      cell.addEventListener('mouseenter', () => setCurrentRow(rowId));
      cell.addEventListener('mouseleave', () => setCurrentRow(''));
    });

    return () => {
      cells.forEach((cell) => {
        const rowId = cell.getAttribute('data-row-id') || '';

        cell.removeEventListener('mouseenter', () => setCurrentRow(rowId));
        cell.removeEventListener('mouseleave', () => setCurrentRow(''));
      });
    };
  }, []);
  return (
    <section className="mt-20">
      <div className="container max-w-[1220px] px-0 2xl:px-12 2xl:max-w-full relative">
        <div className="lg:scrollbar-hidden mx-auto mt-16 lg:overflow-x-scroll lg:-mx-7 lg:px-7 md:-mx-4 md:px-4">
          <div className="grid grid-cols-10 2xl:grid-cols-12 items-start relative">
            <div className="col-span-3 2xl:col-span-4 relative flex flex-col lg:sticky lg:top-0 lg:left-0 lg:z-20">
              <div className="z-30 sticky top-0 left-0 bg-white h-[222px] w-full">
                <Image
                  src="/images/pricing/table-decor.png"
                  width={338}
                  height={330}
                  alt=""
                  className="absolute -top-[135px] -left-9 2xl:left-12 z-40 lg:w-[280px] lg:h-auto md:w-[162px]"
                />
              </div>
              <div className="sticky top-[222px] bg-white z-20 left-0">
                {LABELS.map(({ title, items }, index) => (
                  <div
                    className="relative mt-7 border-b border-black border-opacity-10 first:mt-0 last:border-b-0"
                    key={index}
                  >
                    <p className="py-4 sticky top-0 bg-white text-24 font-bold leading-none xl:text-20 xl:leading-tight">
                      {title}
                    </p>
                    <ul className="flex flex-col divide-y divide-black divide-opacity-10">
                      {Object.keys(items).map((item, idx) => {
                        const isActive = `${item}-${idx}` === currentRow;
                        return (
                          <li
                            className={clsx(
                              'flex h-12 items-center text-16 font-medium leading-normal text-gray-15',
                              {
                                'bg-[#FCFBFF]': isActive,
                              },
                            )}
                            data-row-id={`${item}-${index}`}
                            key={index}
                          >
                            {items[item as keyof typeof items]}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-7 2xl:col-span-8 flex">
              {Object.keys(PLANS).map((plan, index) => (
                <PlanCard
                  className="basis-1/3 grow"
                  currentRow={currentRow}
                  key={index}
                  {...PLANS[plan as keyof typeof PLANS]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;

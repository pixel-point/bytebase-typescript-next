'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { isLabelLong, isLabelMedium } from '@/components/pages/pricing/table/data/long-labels';
import { LABELS, PLANS } from '@/components/pages/pricing/table/data/pricing-plans';
import PlanCard from '@/components/pages/pricing/table/plan-card';

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
    <section className="pt-20 xl:pt-16 md:pt-14 sm:pt-10">
      <div className="mx-auto max-w-[1220px] 2xl:px-12 xl:px-11 md:px-7 sm:px-4 2xl:max-w-full relative">
        <Image
          src="/images/pricing/table-decor.png"
          width={338}
          height={330}
          alt=""
          className="absolute -top-[140px] -left-10 2xl:left-24 z-50 lg:w-[280px] lg:h-auto md:w-[225px] lg:-top-[100px] lg:left-11 md:-top-3 md:left-7 sm:w-[204px] sm:-left-14 sm:top-0"
        />
        <div className="md:scrollbar-hidden max-w-[1220px] 2xl:max-w-full md:max-w-none mx-auto md:overflow-x-auto md:-mr-7 md:pr-7 sm:-mr-4 sm:pr-4">
          <div className="flex items-start relative">
            <div className="min-w-[378px] 2xl:min-w-[460px] lg:min-w-[321px] md:min-w-[244px] relative flex flex-col md:sticky md:top-0 md:left-0 md:z-40 sm:min-w-[156px]">
              <div className="z-40 sticky top-0 left-0 bg-white h-[219px] 2xl:h-[241px] w-full lg:h-[216px] md:h-[210px]" />
              <div className="bg-white z-40">
                {LABELS.map(({ title, items }, index) => (
                  <div
                    className="relative mt-7 border-b border-black border-opacity-10 first:mt-0 last:border-b-0"
                    key={index}
                  >
                    <p className="py-4 bg-white text-24 font-bold leading-none lg:text-20 lg:leading-tight sm:text-18 sm:pb-3">
                      {title}
                    </p>
                    <ul className="flex flex-col divide-y divide-black divide-opacity-10">
                      {Object.keys(items).map((item, idx) => {
                        const isActive = `${item}-${idx}` === currentRow;
                        return (
                          <li
                            className={clsx(
                              'flex h-12 items-center text-16 font-medium leading-normal text-gray-15 sm:text-15 sm:pr-4.5',
                              {
                                'bg-[#FCFBFF]': isActive,
                              },
                              { 'lg:h-[72px] sm:h-[94px]': isLabelLong(item) },
                              { 'sm:h-[72px]': isLabelMedium(item) },
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
            <div className="flex">
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

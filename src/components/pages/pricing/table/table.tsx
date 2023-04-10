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
      <div className="container max-w-[1386px] relative">
        <Image
          src="/images/pricing/table-decor.png"
          width={338}
          height={330}
          alt=""
          className="absolute -top-36 left-11"
        />
        <div className="md:scrollbar-hidden mx-auto mt-16 max-w-[1220px] md:overflow-x-auto">
          <div className="grid min-w-[940px] grid-cols-10 items-start">
            <div className="col-span-3 mt-[234px]">
              {LABELS.map(({ title, items }, index) => (
                <div
                  className="mt-11 border-b border-black border-opacity-10 first:mt-0 last:border-b-0"
                  key={index}
                >
                  <span className="text-24 font-bold leading-none">{title}</span>
                  <ul className="mt-3 flex flex-col divide-y divide-black divide-opacity-10">
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
            <div className="col-span-7 flex">
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

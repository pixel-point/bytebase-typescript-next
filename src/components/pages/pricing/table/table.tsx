'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { LABELS, PLANS } from '@/components/pages/pricing/table/data/pricing-plans';
import PlanCard from '@/components/pages/pricing/table/plan-card';

import { calculateCellHeight } from './data/calculate-cell-height';
import FeatureList from './plan-card/feature-list';

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
        <div className="flex items-start relative">
          <div className="min-w-[378px] grow 2xl:min-w-[460px] lg:min-w-[321px] md:min-w-[244px] relative flex flex-col z-40 sm:min-w-[156px] shadow-labels">
            <div className="z-40 bg-white h-[219px] 2xl:h-[241px] w-full lg:h-[216px] md:h-[210px]" />
            <div className="bg-white z-40">
              {LABELS.map(({ title, items }, idx) => (
                <div
                  className="relative mt-11 border-b border-black border-opacity-10 first:mt-4 md:first:mt-5 sm:first:mt-4 last:border-b-0"
                  key={`${title}_${idx}`}
                >
                  <p className="text-24 font-bold leading-none lg:text-20 lg:leading-tight sm:text-18">
                    {title}
                  </p>
                  <ul className="mt-4 flex flex-col divide-y divide-black divide-opacity-10">
                    {Object.keys(items).map((item, rowIdx) => {
                      const isActive = `${item}-${rowIdx}` === currentRow;
                      return (
                        <li
                          className={clsx(
                            'flex h-12 items-center text-16 font-medium leading-normal text-gray-15 sm:text-15 sm:pr-4.5',
                            {
                              'bg-[#FCFBFF]': isActive,
                            },

                            calculateCellHeight(item),
                          )}
                          data-row-id={`${item}-${rowIdx}`}
                          key={`${item}_${rowIdx}`}
                        >
                          <span className="lg:max-w-[300px] md:max-w-[220px]">
                            {items[item as keyof typeof items]}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:overflow-x-auto relative md:scrollbar-hidden max-w-[1220px] 2xl:max-w-full md:max-w-none mx-auto md:h-full md:-mr-7 md:pr-7 sm:-mr-4 sm:pr-4">
            {Object.keys(PLANS).map((plan, idx) => {
              const currentPlan = PLANS[plan as keyof typeof PLANS];

              return (
                <div className="flex flex-col" key={`${currentPlan.title}_${idx}`}>
                  <div className="z-20 sticky top-0">
                    <PlanCard className="basis-1/3 grow" {...currentPlan} />
                  </div>
                  <div
                    className={clsx(
                      'basis-1/3 grow border border-t-0 border-tones-purple-dark md:min-w-[284px] 2xs:min-w-fit 2xs:w-[156px]',
                      { 'border-l-0 border-r-0 bg-[#F9FAFF]': currentPlan.title === 'team' },
                    )}
                  >
                    <FeatureList
                      title={currentPlan.title}
                      features={currentPlan.changeManagement}
                      currentRow={currentRow}
                    />
                    <FeatureList
                      title={currentPlan.title}
                      features={currentPlan.sql}
                      currentRow={currentRow}
                    />
                    <FeatureList
                      title={currentPlan.title}
                      features={currentPlan.collaboration}
                      currentRow={currentRow}
                    />
                    <FeatureList
                      title={currentPlan.title}
                      features={currentPlan.security}
                      currentRow={currentRow}
                      withLongTitle
                    />
                    <FeatureList
                      title={currentPlan.title}
                      features={currentPlan.bespoke}
                      currentRow={currentRow}
                      isLastSection
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;

'use client';

import Image from 'next/image';

import { useCallback, useState } from 'react';

import Accordion from './components';

const accordionData = [
  {
    title: 'Explore the schema',
    description:
      'Perform complex SQL tasks and protect data privacy with ByteBase’s web-based IDE, anonymization engine, and access controls.',
  },
  {
    title: 'Run and explain query',
    description:
      'Perform complex SQL tasks and protect data privacy with ByteBase’s web-based IDE, anonymization engine, and access controls.',
  },
  {
    title: 'Anonymize data',
    description:
      'Perform complex SQL tasks and protect data privacy with ByteBase’s web-based IDE, anonymization engine, and access controls.',
  },
  {
    title: 'Database access control',
    description:
      'Perform complex SQL tasks and protect data privacy with ByteBase’s web-based IDE, anonymization engine, and access controls.',
  },
];

const PromoQuery = () => {
  const defaultOpenPanelId = 0;
  const [activePanelId, setActivePanelId] = useState<number | undefined>(defaultOpenPanelId);

  const createHandleToggle = useCallback(
    (id: number) => () => {
      setActivePanelId((prevId) => {
        return prevId === id ? undefined : id;
      });
    },
    [],
  );
  return (
    <section className="mt-[94px] xl:mt-[72px] lg:mt-14 md:mt-20 container relative overflow-x-clip">
      <header className="pt-[66px] md:p-0">
        <Image
          className="absolute top-0 right-[156px] 2xl:right-20 xl:w-[216px] xl:h-[204px] lg:w-[183px] lg:h-[172px] md:w-[141px] md:hidden"
          src="/images/ufo.png"
          width={230}
          height={218}
          alt=""
        />
        <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-secondary-1 px-2.5 py-2 rounded-3xl text-gray-15">
          Query
        </span>
        <h2 className="font-title font-semibold leading-none text-88 xl:text-68 max-w-3xl xl:max-w-2xl lg:text-54 md:text-48 lg:max-w-lg md:max-w-[340px]">
          Explore data with <span className="whitespace-nowrap">all-in-one</span>{' '}
          <mark className="bg-transparent text-primary-1 whitespace-nowrap text-center">
            SQL editor
          </mark>
        </h2>
      </header>
      <div className="mt-10 grid grid-cols-12 grid-gap md:flex md:flex-col-reverse">
        <div className="row-span-full col-span-full">
          <Image
            src="/images/interface.png"
            className="w-full h-auto shadow-[0_5px_15px_rgba(15,22,36,0.2)] rounded"
            width={1472}
            height={845}
            alt=""
          />
        </div>

        <div className="row-span-full col-start-9 col-span-4 pr-10 2xl:pr-0 2xl:col-start-8 xl:col-start-8 xl:col-span-5 xl:-translate-x-6 lg:col-start-7 lg:col-span-6 md:translate-y-0 md:translate-x-0 relative md:mt-[25px]">
          <Image
            className="hidden absolute -top-[100px] -right-[32px] md:h-[135px] md:block z-20"
            src="/images/ufo.png"
            width={141}
            height={135}
            alt=""
          />
          <ul className="bg-tones-green-light border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(143,188,169,0.5)] border-tones-green-dark -translate-y-10 px-6 xl:px-5 lg:px-4 py-3.5 divide-y divide-tones-green-dark min-h-[520px] 2xl:min-h-[496px] xl:min-h-[391px] lg:min-h-[344px] lg:-translate-y-4 ">
            {accordionData.map((option, index) => (
              <li key={index}>
                <Accordion
                  title={option.title}
                  description={option.description}
                  isOpenExternal={index === activePanelId}
                  defaultOpen={index === defaultOpenPanelId}
                  onChange={createHandleToggle(index)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="row-span-full col-start-9 col-span-4 pr-10">
          <div className="bg-tones-green-light border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(143,188,169,0.5)] border-tones-green-dark -translate-y-10 px-6 py-3.5 divide-y divide-tones-green-dark min-h-[520px]">
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                Explore the schema
              </h3>
              <p className="mt-3 leading-[150%]">
                Perform complex SQL tasks and protect data privacy with ByteBase&apos;s web-based
                IDE, anonymization engine, and access controls.
              </p>
            </div>
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                Run and explain query
              </h3>
            </div>
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">Anonymize data</h3>
            </div>
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                Database access control
              </h3>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PromoQuery;

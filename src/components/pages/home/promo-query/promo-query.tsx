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
    <section className="container">
      <header className="">
        {/* TODO: move to separate <Label /> component */}
        <span className="inline-flex rounded-3xl bg-secondary-1 px-2.5 py-2 text-12 font-bold uppercase leading-none tracking-wider text-gray-15">
          Query
        </span>
        <h2 className="mt-3 max-w-3xl font-title text-88 font-semibold leading-none lg:max-w-2xl lg:text-68 lg:leading-104 md:mt-2 md:max-w-lg md:text-54 md:leading-none sm:max-w-[340px] sm:text-48 sm:leading-95">
          Explore data with <span className="whitespace-nowrap">all-in-one</span>{' '}
          <mark className="whitespace-nowrap bg-transparent text-center text-primary-1 sm:whitespace-normal">
            SQL editor
          </mark>
        </h2>
      </header>
      <div className="gap-x-grid grid grid-cols-12">
        <div className="col-span-full row-span-full">
          <Image
            src="/images/interface.png"
            className="h-auto w-full rounded shadow-[0_5px_15px_rgba(15,22,36,0.2)]"
            width={1472}
            height={845}
            alt=""
          />
        </div>
        {/* TODO: fix accordeon pixelperfect */}
        <div className="col-start-9 col-end-13 row-span-full 3xl:col-start-8 3xl:col-end-12 md:col-start-7 md:col-end-13">
          <ul className="mr-10 -mt-10 min-h-[520px] divide-y divide-tones-green-dark border border-tones-green-dark bg-tones-green-light px-6 py-10 shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(143,188,169,0.5)] 3xl:mr-0 3xl:min-h-[496px] xl:-mt-6 xl:min-h-0 xl:px-5 xl:py-8 md:px-4 md:py-7">
            {accordionData.map((option, idx) => (
              <li key={idx}>
                <Accordion
                  title={option.title}
                  description={option.description}
                  isOpenExternal={idx === activePanelId}
                  defaultOpen={idx === defaultOpenPanelId}
                  onChange={createHandleToggle(idx)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PromoQuery;

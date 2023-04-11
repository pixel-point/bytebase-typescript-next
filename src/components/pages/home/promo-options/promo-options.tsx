'use client';

import { useCallback, useState } from 'react';

import Accordion from './components';

const options = [
  {
    title: 'Auto style and anti-patterns checks',
    description:
      '100+ lint rules to detect SQL anti-patterns and enforce consistent SQL style in the organization.',
    image: '/images/auto-style.png',
    imageMobile: '/images/auto-style-md.png',
    index: 1,
  },
  {
    title: 'Batch schema changes to tenant databases',
    description:
      '100+ lint rules to detect SQL anti-patterns and enforce consistent SQL style in the organization.',
    image: '/images/batch-schemas.png',
    imageMobile: '/images/batch-schemas.png',
    index: 2,
  },
  {
    title: 'Online schema change',
    description:
      '100+ lint rules to detect SQL anti-patterns and enforce consistent SQL style in the organization.',
    image: '/images/online-schemas.png',
    imageMobile: '/images/online-schemas.png',
    index: 3,
  },
  {
    title: 'GitOps',
    description:
      '100+ lint rules to detect SQL anti-patterns and enforce consistent SQL style in the organization.',
    image: '/images/git-ops.png',
    imageMobile: '/images/git-ops.png',
    index: 4,
  },
];

const PromoOptions = () => {
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
    <section>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Accordion
              title={option.title}
              description={option.description}
              image={option.image}
              imageMobile={option.imageMobile}
              isOpenExternal={index === activePanelId}
              defaultOpen={index === defaultOpenPanelId}
              onChange={createHandleToggle(index)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PromoOptions;

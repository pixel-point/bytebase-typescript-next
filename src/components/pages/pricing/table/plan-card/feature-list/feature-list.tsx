import clsx from 'clsx';

import { Item } from '@/types/pricing';

const presentFeature = <img src="/images/check.svg" alt="Present Feature" className="h-6 w-6" />;
const missingFeature = <img src="/images/cross.svg" className="h-6 w-6" alt="Missing Feature" />;

const renderFeature = (feature: boolean | { value: string; tooltip: string } | string) => {
  if (typeof feature === 'boolean') {
    if (feature) return presentFeature;
    if (!feature) return missingFeature;
  }
  if (typeof feature === 'object') {
    // TODO: add tooltip component
    return feature.value;
  }
  return feature;
};

type FeatureListProps = {
  features: Item;
  currentRow: string;
  isLastSection?: boolean;
};

const FeatureList = ({ features, currentRow, isLastSection }: FeatureListProps) => (
  <div
    className={clsx(
      '[&:nth-child(2)]:mt-[27px] mt-[100px] flex flex-col divide-y divide-black divide-opacity-10 border-b border-black border-opacity-10 text-center lg:[&:nth-child(2)]:mt-7 lg:mt-[101px]',
      { 'last:border-b-0': isLastSection },
    )}
  >
    {Object.keys(features).map((item, index) => {
      const isActive = `${item}-${index}` === currentRow;
      return (
        <span
          className={clsx(
            'flex h-12 w-full justify-center items-center text-16 leading-normal text-gray-15',
            {
              'bg-[#FCFBFF]': isActive,
            },
          )}
          data-row-id={`${item}-${index}`}
          key={index}
        >
          {renderFeature(features[item])}
        </span>
      );
    })}
  </div>
);

export default FeatureList;

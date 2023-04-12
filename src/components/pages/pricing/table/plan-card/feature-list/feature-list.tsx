import clsx from 'clsx';

import { isLabelLong, isLabelMedium } from '@/components/pages/pricing/table/data/long-labels';
import Tooltip from '@/components/shared/tooltip';

import { Item } from '@/types/pricing';

const presentFeature = <img src="/images/check.svg" alt="Present Feature" className="h-6 w-6" />;
const missingFeature = <img src="/images/cross.svg" className="h-6 w-6" alt="Missing Feature" />;

const renderFeature = (feature: boolean | { value: string; tooltip: string } | string) => {
  if (typeof feature === 'boolean') {
    if (feature) return presentFeature;
    if (!feature) return missingFeature;
  }
  if (typeof feature === 'object') {
    return (
      <div className="flex items-center">
        <span>{feature.value}</span>
        <Tooltip text={feature.tooltip} />
      </div>
    );
  }
  return feature;
};

type FeatureListProps = {
  features: Item;
  currentRow: string;
  isLastSection?: boolean;
  withLongTitle?: boolean;
};

const FeatureList = ({ features, currentRow, isLastSection, withLongTitle }: FeatureListProps) => (
  <div
    className={clsx(
      '[&:nth-child(2)]:mt-4 mt-[84px] flex flex-col divide-y divide-black divide-opacity-10 border-b border-black border-opacity-10 text-center md:[&:nth-child(2)]:mt-[23px] 2xl:[&:nth-child(2)]:mt-[19px] lg:mt-[85px] sm:[&:nth-child(2)]:mt-[37px] sm:mt-[78.5px]',
      { 'md:mt-[110px] sm:mt-[101px]': withLongTitle },
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
            { 'lg:h-[72px] sm:h-[94px]': isLabelLong(item) },
            { 'sm:h-[72px]': isLabelMedium(item) },
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

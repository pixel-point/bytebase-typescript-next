import clsx from 'clsx';

import { isLabelLong, isLabelMedium } from '@/components/pages/pricing/table/data/long-labels';
import Tooltip from '@/components/shared/tooltip';

import { PricingTableItem } from '@/types/pricing';

import { COLORS } from '../../data/pricing-plans';

const presentFeature = <img src="/images/check.svg" alt="Present Feature" className="h-6 w-6" />;
const missingFeature = <img src="/images/cross.svg" className="h-6 w-6" alt="Missing Feature" />;

const renderFeature = (feature: boolean | { value: string; tooltip: string } | string) => {
  if (typeof feature === 'boolean') {
    return feature ? presentFeature : missingFeature;
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
  title: keyof typeof COLORS;
  features: PricingTableItem;
  currentRow: string;
  isLastSection?: boolean;
  withLongTitle?: boolean;
};

const FeatureList = ({
  title,
  features,
  currentRow,
  isLastSection,
  withLongTitle,
}: FeatureListProps) => (
  <div
    className={clsx(
      'first:pt-4 pt-[84px] flex flex-col text-center md:first:pt-[23px] 2xl:first:pt-[19px] lg:pt-[85px] sm:first:pt-[37px] sm:pt-[78.5px]',
      { 'md:pt-[110px] sm:pt-[101px]': withLongTitle },
      { 'last:border-b-0': isLastSection },
      {
        'divide-y divide-black border-b border-black border-opacity-10  divide-opacity-10':
          title !== 'team',
      },
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

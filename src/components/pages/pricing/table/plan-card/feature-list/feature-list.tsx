import clsx from 'clsx';

import Tooltip from '@/components/shared/tooltip';

import { PricingTableItem } from '@/types/pricing';

import { calculateCellHeight } from '../../data/calculate-cell-height';
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
      'first:pt-4 pt-[84px] flex flex-col text-center md:first:pt-[23px] 2xl:first:pt-[19px] lg:pt-[85px] sm:first:pt-[37px] divide-y border-b',
      withLongTitle ? 'md:pt-[110px] sm:pt-[105px]' : 'sm:pt-[82.5px]',
      title === 'team'
        ? 'border-transparent divide-transparent'
        : 'border-black divide-y divide-black border-b  border-opacity-10  divide-opacity-10',
      { 'last:border-b-0': isLastSection },
    )}
  >
    {Object.keys(features).map((item, idx) => {
      const isActive = `${item}-${idx}` === currentRow;

      return (
        <span
          className={clsx(
            'flex h-12 w-full justify-center items-center text-16 leading-normal text-gray-15',
            calculateCellHeight(item),
            isActive ? (title === 'team' ? 'bg-[#F9FAFF]' : 'bg-[#FCFBFF]') : '',
          )}
          data-row-id={`${item}-${idx}`}
          key={`${title}_${item}_${idx}`}
        >
          {renderFeature(features[item])}
        </span>
      );
    })}
  </div>
);

export default FeatureList;

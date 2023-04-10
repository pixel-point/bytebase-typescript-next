import clsx from 'clsx';

import Button from '@/components/shared/button';

import { Plan } from '@/types/pricing';

import FeatureList from './feature-list';

const colors = { team: '#5647EB', free: '#3DB8F5', enterprise: '#172136' };

const PlanCard = ({
  title,
  description,
  additionalDescription,
  buttonText,
  buttonUrl,
  buttonTheme,
  changeManagement,
  sql,
  security,
  bespoke,
  collaboration,
  className,
  currentRow,
}: Plan & {
  className: string;
  currentRow: string;
}) => {
  const planColor = colors[title.toLowerCase() as keyof typeof colors];

  return (
    <div
      className={clsx(
        'relative flex flex-col text-center border border-t-8 border-tones-purple-dark max-w-[280px]',
        className,
        { 'bg-[#F9FAFF]': title.toLowerCase() === 'team' },
      )}
      style={{ borderTopColor: planColor }}
    >
      <div className="flex flex-col mx-4.5 pt-6 border-b border-gray-80 min-h-[250px]">
        <h3 className="font-title text-56 leading-none">{title}</h3>
        <p className="mt-3 text-14 leading-tight tracking-tight text-gray-40">{description}</p>
        <Button
          theme={buttonTheme}
          size="md"
          to={buttonUrl}
          additionalClassName="mt-5 w-[232px] mx-auto"
        >
          {buttonText}
        </Button>
        {additionalDescription && (
          <p className="mt-4 text-gray-15 text-14 leading-tight tracking-tight">
            {additionalDescription}
          </p>
        )}
      </div>
      <FeatureList features={changeManagement} currentRow={currentRow} />
      <FeatureList features={sql} currentRow={currentRow} />
      <FeatureList features={collaboration} currentRow={currentRow} />
      <FeatureList features={security} currentRow={currentRow} />
      <FeatureList features={bespoke} currentRow={currentRow} isLastSection />
    </div>
  );
};

export default PlanCard;

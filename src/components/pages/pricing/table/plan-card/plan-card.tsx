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
        'relative flex flex-col text-center border border-tones-purple-dark lg:max-w-[204px]',
        className,
        { 'bg-[#F9FAFF] border-l-0 border-r-0': title.toLowerCase() === 'team' },
      )}
    >
      <div
        className={clsx(
          'border-t-8 sticky top-0 flex flex-col px-4.5 2xl:px-6 pt-6 lg:px-4.5 min-h-[250px] lg:min-h-[230px]',
          title.toLowerCase() === 'team' ? 'bg-[#F9FAFF]' : 'bg-white',
        )}
        style={{ borderTopColor: planColor }}
      >
        <h3 className="font-title text-56 leading-none lg:text-44">{title}</h3>
        <p
          className="mt-3 text-14 leading-tight tracking-tight text-gray-40 max-w-[244px] mx-auto lg:mt-2 lg:min-h-[54px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          theme={buttonTheme}
          size="md"
          to={buttonUrl}
          additionalClassName="mt-5 w-[232px] xl:w-full mx-auto lg:mt-4"
        >
          {buttonText}
        </Button>
        {additionalDescription && (
          <p className="mt-4 text-gray-15 text-14 leading-tight tracking-tight">
            {additionalDescription}
          </p>
        )}
        <div
          className={clsx(
            'w-full h-px bg-gray-80',
            additionalDescription ? 'mt-5 lg:mt-4' : 'mt-[54px] lg:mt-[50px]',
          )}
        />
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

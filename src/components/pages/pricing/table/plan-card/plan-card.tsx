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
        'relative flex flex-col text-center border border-tones-purple-dark',
        className,
        { 'bg-[#F9FAFF] border-l-0 border-r-0': title.toLowerCase() === 'team' },
      )}
    >
      <div
        className={clsx(
          'border-t-8 sticky top-0 flex flex-col px-4.5 2xl:px-6 pt-6 min-h-[250px]',
          title.toLowerCase() === 'team' ? 'bg-[#F9FAFF]' : 'bg-white',
        )}
        style={{ borderTopColor: planColor }}
      >
        <h3 className="font-title text-56 leading-none">{title}</h3>
        <p
          className="mt-3 text-14 leading-tight tracking-tight text-gray-40 2xl:max-w-[244px] 2xl:mx-auto"
          dangerouslySetInnerHTML={{ __html: description }}
        />
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

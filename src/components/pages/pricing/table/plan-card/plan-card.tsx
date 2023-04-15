import clsx from 'clsx';

import { COLORS } from '@/components/pages/pricing/table/data/pricing-plans';
import Button from '@/components/shared/button';

import { Plan } from '@/types/pricing';

const PlanCard = ({
  title,
  description,
  additionalDescription,
  buttonText,
  buttonUrl,
  buttonTheme,
  className,
}: Plan & {
  className: string;
}) => {
  const planColor = COLORS[title];

  return (
    <div
      className={clsx(
        'relative flex flex-col text-center border border-tones-purple-dark md:min-w-[284px] 2xs:min-w-fit 2xs:w-[156px]',
        className,
        { 'bg-[#F9FAFF] border-l-0 border-r-0': title === 'team' },
      )}
    >
      <div
        className={clsx(
          'border-t-8 flex flex-col px-4.5 2xl:px-6 pt-6 lg:px-4.5 min-h-[250px] lg:min-h-[230px] z-20 xs:px-2 sm:pt-5',
          title === 'team' ? 'bg-[#F9FAFF]' : 'bg-white',
        )}
        style={{ borderTopColor: planColor }}
      >
        <h3 className="font-title capitalize text-56 leading-none lg:text-44 md:text-34">
          {title}
        </h3>
        <p
          className="mt-3 text-14 leading-tight tracking-tight text-gray-40 max-w-[244px] mx-auto lg:mt-2 2xl:min-h-[54px] sm:min-h-[72px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          theme={buttonTheme}
          size="md"
          to={buttonUrl}
          additionalClassName="mt-5 w-[232px] xl:w-full mx-auto lg:mt-4 md:mt-5"
        >
          {buttonText}
        </Button>
        {additionalDescription && (
          <p className="mt-4 text-gray-15 text-14 leading-tight tracking-tight sm:mt-2.5">
            {additionalDescription}
          </p>
        )}
        <div
          className={clsx(
            'w-full',
            additionalDescription
              ? 'mt-5 lg:mt-4 sm:mt-2.5'
              : 'mt-[54px] lg:mt-[50px] sm:mt-[38px]',
          )}
        />
      </div>
    </div>
  );
};

export default PlanCard;

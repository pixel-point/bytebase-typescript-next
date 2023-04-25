import clsx from 'clsx';

import InfoIcon from '@/svgs/info.inline.svg';
import WarningIcon from '@/svgs/warning.inline.svg';

interface HintBlockProps {
  type: 'info' | 'warning';
  children: React.ReactNode;
}

const typeClassNames = {
  info: {
    wrapper: 'border-tones-purple-dark shadow-[0px_5px_15px_rgba(156,186,201,0.5)]',
    inner: 'bg-tones-purple-light',
    icon: 'bg-primary-1',
    text: 'prose-a:no-underline prose-a:text-primary-1 prose-a:font-semibold prose-li:marker:!text-primary-1',
  },
  warning: {
    wrapper: 'border-[#D2ACB3] shadow-[0px_5px_15px_rgba(210,172,179,0.4)]',
    inner: 'bg-[#FDF2F3]',
    icon: 'bg-secondary-4',
    text: 'prose-a:no-underline prose-a:text-secondary-4 prose-a:font-semibold prose-li:marker:!text-secondary-4',
  },
};

const icons = {
  info: InfoIcon,
  warning: WarningIcon,
};

const HintBlock = ({ type = 'info', children }: HintBlockProps) => {
  const Icon = icons[type];

  return (
    <figure className={clsx('hint-block border', typeClassNames[type].wrapper)}>
      <div
        className={clsx(
          'flex gap-x-4 px-5 pt-6 pb-8 shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] md:gap-x-3 md:px-4 md:pt-5 md:pb-7 sm:px-3 sm:pt-4 sm:pb-5',
          typeClassNames[type].inner,
        )}
      >
        <span
          className={clsx(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full md:h-7 md:w-7 sm:h-6 sm:w-6',
            typeClassNames[type].icon,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>

        <div>
          <div className="not-prose">
            <h4 className="text-24 font-bold leading-extra-tight tracking-tight text-gray-15 first-letter:capitalize lg:text-20 md:text-18 sm:pt-1.5 sm:text-14">
              {type}
            </h4>
          </div>
          <div
            className={clsx(
              'prose mt-4 space-y-2.5 !text-15 !leading-snug prose-p:my-2.5 prose-p:first:mt-0 prose-p:last:mb-0 sm:mt-3 sm:!text-14 sm:leading-snug',
              typeClassNames[type].text,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default HintBlock;

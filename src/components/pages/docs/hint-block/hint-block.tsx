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
    text: 'prose-a:no-underline prose-a:text-primary-1 prose-a:font-semibold prose-li:text-primary-1',
  },
  warning: {
    wrapper: 'border-[#D2ACB3] shadow-[0px_5px_15px_rgba(210,172,179,0.4)]',
    inner: 'bg-[#FDF2F3]',
    icon: 'bg-secondary-4',
    text: 'prose-a:no-underline prose-a:text-secondary-4 prose-a:font-semibold prose-li:text-secondary-4',
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
      <div className="pt-1.5 pl-1.5">
        <div className={clsx('flex gap-x-4 px-3 pt-4 pb-8 md:gap-x-3', typeClassNames[type].inner)}>
          <span
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-full shrink-0 md:w-7 md:h-7 sm:h-6 sm:w-6',
              typeClassNames[type].icon,
            )}
          >
            <Icon className="h-4 w-4" />
          </span>

          <div>
            <div className="not-prose">
              <h4 className="text-24 font-bold leading-extra-tight tracking-tight text-gray-15 first-letter:capitalize">
                {type}
              </h4>
            </div>
            <div
              className={clsx(
                'prose mt-4 !text-15 !leading-snug prose-p:my-2.5 prose-p:first:mt-0 prose-p:last:mb-0',
                typeClassNames[type].text,
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default HintBlock;

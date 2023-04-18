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

const HintBlock = ({ type, children }: HintBlockProps) => {
  const Icon = icons[type];
  return (
    <figure className={clsx('hint-block border', typeClassNames[type].wrapper)}>
      <div className="pt-1.5 pl-1.5">
        <div className={clsx('flex pt-4 px-3 pb-8 gap-x-4', typeClassNames[type].inner)}>
          <span
            className={clsx(
              'w-8 h-8 flex justify-center items-center rounded-full',
              typeClassNames[type].icon,
            )}
          >
            <Icon className="w-4 h-4" />
          </span>

          <div>
            <div className="not-prose">
              <h3 className="first-letter:capitalize text-24 font-bold tracking-tight leading-extra-tight text-gray-15">
                {type}
              </h3>
            </div>
            <div
              className={clsx(
                '!text-15 mt-4 !leading-snug prose prose-p:my-2.5 prose-p:first:mt-0 prose-p:last:mb-0',
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

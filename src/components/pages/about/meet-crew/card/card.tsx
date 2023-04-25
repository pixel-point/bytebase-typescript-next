import Image from 'next/image';

import clsx from 'clsx';

type CardProps = {
  info: {
    image: string;
    imageLg?: string;
    imageMd?: string;
    imageSm?: string;
    position: string;
    name: string;
    about: string;
  };
  theme: string;
  imageStyle?: string;
  className?: string;
  showHat?: boolean;
};

type ThemeList = {
  [theme: string]: {
    positionColor: string;
    insideStyle: string;
    outsideStyle: string;
  };
};

const themeList: ThemeList = {
  blue: {
    positionColor: 'text-tones-deep-blue-dark',
    insideStyle: 'shadow-[inset_0_0_0_1px_rgba(156,186,201,0.5)] pr-2 pl-8',
    outsideStyle:
      'bg-tones-blue-light shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)]',
  },
  green: {
    positionColor: 'text-tones-deep-green-dark',
    insideStyle: 'shadow-[inset_0_0_0_1px_rgba(143,188,169,0.4)] pl-2 pr-8',
    outsideStyle:
      'bg-tones-green-light shadow-[inset_6px_6px_0_#fff,0_5px_20px_rgba(143,188,169,0.4)]',
  },
};

const Card = (props: CardProps) => {
  const { imageStyle, className, theme, showHat = false, info } = props;
  const { image, imageLg = image, imageMd = image, imageSm = image, position, name, about } = info;
  const { insideStyle, outsideStyle, positionColor } = themeList[theme];
  return (
    <div
      className={clsx(
        'relative col-span-6 row-start-2 mt-[228px] 3xl:mt-[222px] xl:mt-[158px] md:mt-[131px] sm:col-span-full sm:col-span-full sm:row-start-auto sm:row-start-auto sm:mt-[17px]',
        outsideStyle,
        className,
      )}
    >
      <div
        className={clsx(
          'md:column-reverse flex items-start gap-1 pt-8 pb-6 xl:items-center xl:pt-6 xl:pl-6 xl:pb-5 xl:pr-1 md:p-6 md:text-center sm:text-left',
          insideStyle,
        )}
      >
        <div>
          <div className="items-center justify-start gap-x-4 sm:flex">
            <Image
              src={imageMd}
              alt=""
              width={198}
              height={168}
              className={clsx('mx-auto hidden shrink-0 md:block sm:hidden', imageStyle)}
            />
            <Image
              src={imageSm}
              alt=""
              width={92}
              height={93}
              className={clsx('hidden shrink-0 sm:block', imageStyle)}
            />
            <div className="md:mt-2 sm:mt-0">
              <span
                className={clsx(
                  'text-18 font-semibold xl:text-16 xl:leading-snug md:text-15 sm:text-14',
                  positionColor,
                )}
              >
                {position}
              </span>
              <p className="mt-2 font-title text-56 font-semibold leading-none xl:mt-1.5 xl:text-44 md:text-38 sm:mt-1 sm:text-34">
                {name}
              </p>
            </div>
          </div>
          <p
            className="mt-5 text-18 xl:mt-2 xl:text-16 xl:leading-snug sm:mt-3"
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </div>
        <Image
          src={image}
          alt=""
          width={244}
          height={244}
          className={clsx('shrink-0 xl:hidden', imageStyle)}
        />
        <Image
          src={imageLg}
          alt=""
          width={180}
          height={196}
          className={clsx('hidden shrink-0 xl:block md:hidden', imageStyle)}
        />
      </div>
      <Image
        src="/images/hat.png"
        width={92}
        height={65}
        alt=""
        className={clsx(
          'absolute -top-7 -left-9 xl:-top-4.5 xl:-left-6 xl:h-[42px] xl:w-[58px] sm:h-[46px] sm:w-16',
          { ['hidden']: !showHat },
        )}
      />
    </div>
  );
};

export default Card;

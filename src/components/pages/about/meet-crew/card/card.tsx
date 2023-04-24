import Image from 'next/image';

import clsx from 'clsx';

type CardProps = {
  image: string;
  imageLg?: string;
  imageMd?: string;
  imageSm?: string;
  position: string;
  name: string;
  children: string | React.ReactNode;
  imageStyle?: string;
  positionColor: string;
  className?: string;
  insideStyle?: string;
  showHat?: boolean;
};

const Card = (props: CardProps) => {
  const {
    image,
    imageLg = image,
    imageMd = image,
    imageSm = image,
    imageStyle,
    position,
    name,
    children,
    positionColor,
    className,
    insideStyle,
    showHat = false,
  } = props;
  return (
    <div
      className={clsx(
        'relative col-span-6 row-start-2 mt-[220px] 2xl:mt-[222px] lg:mt-[158px] md:mt-[131px] sm:col-span-full sm:col-span-full sm:row-start-auto sm:row-start-auto sm:mt-[17px]',
        className,
      )}
    >
      <div
        className={clsx(
          'md:column-reverse flex items-start gap-1 pt-8 pb-6 lg:items-center lg:pt-6 lg:pl-6 lg:pb-5 lg:pr-1 md:p-6 md:text-center sm:text-left',
          insideStyle,
        )}
      >
        <div>
          <div className="flex items-center justify-start gap-x-4">
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
                  'text-18 font-semibold lg:text-16 lg:leading-snug md:text-15 sm:text-14',
                  `text-${positionColor}`,
                )}
              >
                {position}
              </span>
              <p className="mt-2 font-title text-56 font-semibold leading-none lg:mt-1.5 lg:text-44 md:text-38 sm:mt-1 sm:text-34">
                {name}
              </p>
            </div>
          </div>
          <p className="mt-5 text-18 lg:mt-2 lg:text-16 lg:leading-snug sm:mt-3">{children}</p>
        </div>
        <Image
          src={image}
          alt=""
          width={244}
          height={244}
          className={clsx('shrink-0 lg:hidden', imageStyle)}
        />
        <Image
          src={imageLg}
          alt=""
          width={180}
          height={196}
          className={clsx('hidden shrink-0 lg:block md:hidden', imageStyle)}
        />
      </div>
      <Image
        src="/images/hat.png"
        width={92}
        height={65}
        alt=""
        className={clsx(
          'absolute -top-7 -left-9 lg:-top-4.5 lg:-left-6 lg:h-[42px] lg:w-[58px] sm:h-[46px] sm:w-16',
          { ['hidden']: !showHat },
        )}
      />
    </div>
  );
};

export default Card;

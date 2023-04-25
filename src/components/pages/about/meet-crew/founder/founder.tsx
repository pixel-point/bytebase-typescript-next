import Image from 'next/image';

import clsx from 'clsx';

const founder = {
  danny: {
    name: 'Danny',
    position: 'Co-Founder & CTO',
    image: {
      default: '/images/page/about/danny.webp',
      xl: '/images/page/about/danny-xl.webp',
      md: '/images/page/about/danny-md.webp',
      sm: '/images/page/about/danny-sm.webp',
    },
    about:
      "Danny was the Staff Engineer at Google Cloud and TL overseeing Cloud SQL and API&nbsp;&&nbsp;Service Infrastructure. He has won Google's highest engineering award twice.",
  },
  tianzhou: {
    name: 'Tianzhou',
    position: 'Co-Founder & CEO',
    image: {
      default: '/images/page/about/tianzhou.webp',
      xl: '/images/page/about/tianzhou-xl.webp',
      md: '/images/page/about/tianzhou-md.webp',
      sm: '/images/page/about/tianzhou-sm.webp',
    },
    about:
      'Tianzhou was the TL of Google Cloud SQL, the maintainer of Google&apos;s internal PostgreSQL and MySQL branch. He was the head of Database/<wbr/>DevTools/<wbr/>Collaboration group in Ant Group.',
  },
};

const themeList = {
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

const Founder = ({ id, className }: { id: keyof typeof founder; className?: string }) => {
  const { position, name, image, about } = founder[id];

  return (
    <article
      className={clsx(
        'flex items-start border border-solid pt-8 pb-6 xl:pt-6 xl:pl-6 xl:pb-5 xl:pr-1 md:flex-col md:items-center md:p-6 md:pb-5 sm:items-start sm:pb-6',
        {
          'border-tones-blue-dark bg-tones-blue-light pl-8 pr-2 shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(156,186,201,0.5)]':
            id === 'danny',
          'border-tones-green-dark bg-tones-green-light pl-2 pr-8 shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(156,186,201,0.5)] 3xl:pr-10':
            id === 'tianzhou',
        },
        className,
      )}
    >
      {/* TODO: replace to one image */}
      <Image
        src={image.default}
        alt=""
        width={244}
        height={244}
        className={clsx('shrink-0 xl:hidden', {
          'order-2': id === 'danny',
          'mr-1': id === 'tianzhou',
        })}
      />
      <Image
        src={image.xl}
        alt=""
        width={180}
        height={196}
        className={clsx('hidden shrink-0 xl:block md:hidden', {
          'order-2 mt-1': id === 'danny',
          'order-2 mt-4': id === 'tianzhou',
        })}
      />
      <Image
        src={image.md}
        alt=""
        width={198}
        height={168}
        className="mb-2 hidden shrink md:block sm:hidden"
      />
      <div className="flex grow flex-col gap-6 xl:gap-2 md:grow-0 md:gap-4 sm:gap-2.5">
        <div className="sm:flex sm:flex-row sm:items-center sm:gap-4">
          <Image
            src={image.sm}
            alt=""
            width={92}
            height={93}
            className="hidden shrink-0 sm:block"
          />
          <div className="flex flex-col gap-1 md:gap-0 md:text-center sm:grow sm:text-left">
            <h3 className="order-2 font-title text-56 font-semibold leading-none xl:text-44 md:text-38 sm:text-34">
              {name}
            </h3>
            <small
              className={clsx(
                'font-sans text-18 font-semibold xl:text-16 xl:leading-snug md:text-15 sm:text-14',
                {
                  'text-tones-deep-blue-dark': id === 'danny',
                  'text-tones-deep-green-dark': id === 'tianzhou',
                },
              )}
            >
              {position}
            </small>
          </div>
        </div>
        <p
          className={clsx('text-18 xl:text-16 xl:leading-snug md:text-center sm:text-left', {
            'xl:-mr-1 md:mr-0': id === 'danny',
          })}
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </article>
  );
};

export default Founder;

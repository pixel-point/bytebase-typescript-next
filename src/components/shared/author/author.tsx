import Image from 'next/image';

import clsx from 'clsx';

interface AuthorProps {
  className?: string;
  image?: string;
}

const Author = ({ className, image }: AuthorProps) => {
  return (
    <div className={clsx('flex items-center', className)}>
      {image && <Image src={image} alt="" width={36} height={36} className="mr-3" />}
      <div className="flex items-baseline text-14 leading-none text-gray-40">
        <p>Name</p>
        <p className="px-1.5">·</p>
        <p className="uppercase">Date</p>
      </div>
    </div>
  );
};

export default Author;

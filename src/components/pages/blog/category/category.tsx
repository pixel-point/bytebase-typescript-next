import { ReactNode } from 'react';

import clsx from 'clsx';

interface CategoryProps {
  className?: string;
  children: ReactNode;
  textColor?: string;
  borderColor?: string;
}

const Category = ({ className, children }: CategoryProps) => {
  return <div className={clsx('', className)}>{children}</div>;
};

export default Category;

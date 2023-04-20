import { Fragment } from 'react';

import Link from '@/components/shared/link';

import { Breadcrumb } from '@/types/docs';

import Route from '@/lib/route';

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <div className="text-15 font-medium text-gray-30 inline-flex gap-x-[11px] items-center">
    {breadcrumbs.map(({ title: breadcrumbTitle, url }, index) => (
      <Fragment key={url}>
        {index !== 0 && <span>/</span>}
        {url ? (
          <Link
            additionalClassName="text-15 font-medium leading-none text-gray-15 hover:text-primary-1"
            to={Route.DOCS + url}
          >
            {breadcrumbTitle}
          </Link>
        ) : (
          <span key={breadcrumbTitle} className="text-15 font-medium leading-none text-gray-15">
            {breadcrumbTitle}
          </span>
        )}
      </Fragment>
    ))}
  </div>
);

export default Breadcrumbs;

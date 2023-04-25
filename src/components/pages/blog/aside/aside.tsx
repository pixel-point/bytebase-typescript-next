import TableOfContents from '../../docs/table-of-contents';
import { TableOfContentsProps } from '../../docs/table-of-contents/table-of-contents';
import Author from './author';
import { AuthorProps } from './author/author';
import WhatIsBytebase from './what-is-bytebase/what-is-bytebase';

type AsideProps = TableOfContentsProps & AuthorProps;

const Aside = ({ author, contentRef }: AsideProps) => {
  return (
    <aside className="scrollbar-hidden lg:gap-x-grid col-span-3 ml-auto flex w-full flex-col gap-y-9 overflow-y-auto lg:static lg:col-span-full lg:mt-14 lg:grid lg:grid-cols-12 md:mt-10 sm:mt-8 sm:gap-y-4">
      <WhatIsBytebase />
      <Author author={author} />
      <TableOfContents contentRef={contentRef} />
    </aside>
  );
};

export default Aside;

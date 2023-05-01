'use client';

import { useRouter } from 'next/navigation';

import ReactPaginate from 'react-paginate';

import Arrow from '@/svgs/arrow.inline.svg';

type PaginationProps = {
  currentPageIndex: number;
  pageCount: number;
  path: string;
};

// TODO: design disable state for prev/next links
const Pagination = ({ currentPageIndex, pageCount, path = '' }: PaginationProps) => {
  const router = useRouter();

  const handlePageClick = ({ selected }: { selected: number }) => {
    const navigateTo = path + (!selected ? '' : `/${selected + 1}`);
    router.push(navigateTo);
  };

  return (
    <div className="mt-16 border-t border-gray-90 pt-8 xl:mt-14 md:mt-12 sm:mt-8">
      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={2}
        pageCount={pageCount}
        forcePage={currentPageIndex - 1}
        containerClassName="flex justify-center items-center gap-x-5 sm:gap-x-2.5"
        pageLinkClassName="flex w-10 h-10 pt-0.5 justify-center items-center rounded-full bg-gray-97 font-medium text-18 leading-none transition-colors duration-200 hover:bg-gray-90"
        breakLinkClassName="flex w-10 h-10 pt-0.5 justify-center items-center rounded-full bg-gray-97 font-medium text-18 leading-none transition-colors duration-200 hover:bg-gray-90"
        activeLinkClassName="bg-primary-1 text-white pointer-events-none"
        previousClassName="mr-auto"
        nextClassName="ml-auto"
        previousLinkClassName="flex items-center text-18 gap-x-2 px-5 bg-gray-97 rounded-full h-10 font-medium transition-colors hover:bg-gray-90 md:w-10 md:justify-center md:px-0"
        nextLinkClassName="flex items-center text-18 gap-x-2 px-5 bg-gray-97 rounded-full h-10 font-medium transition-colors hover:bg-gray-90 md:w-10 md:justify-center md:px-0"
        disabledLinkClassName="pointer-events-none text-gray-60"
        previousLabel={
          <>
            <Arrow className="w-5 -rotate-180" alt="" />
            <span className="pt-0.5 leading-none md:hidden">Previous</span>
          </>
        }
        nextLabel={
          <>
            <span className="pt-0.5 leading-none md:hidden">Next</span>
            <Arrow className="w-5" alt="" />
          </>
        }
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default Pagination;

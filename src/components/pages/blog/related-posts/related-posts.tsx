import Link from '@/components/shared/link';

import { BlogPost } from '@/types/blog-post';

import ROUTE from '@/lib/route';

import BlogPostCard from '../blog-post-card';

type RelatedPostsProps = {
  posts: BlogPost[];
};

// TODO: fix button arrow
const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts) return null;

  return (
    <section className="container related-posts mt-10">
      <div className="flex items-center justify-between border-t border-gray-90 pt-16 lg:pt-8 md:pt-10 sm:pt-8">
        <h2 className="font-title text-52 leading-none lg:text-50 md:text-46 sm:text-34">
          Related posts
        </h2>
        <Link
          className="flex items-center rounded-full bg-gray-97 px-5 py-[11px] text-18 font-medium leading-none 
                      md:text-16 sm:py-2 sm:px-4 sm:text-14"
          href={ROUTE.BLOG}
          withArrow
        >
          Back to blog
        </Link>
      </div>
      <ul className="gap-x-grid mt-10 grid grid-cols-12 lg:mt-8 md:mt-6 md:gap-y-8 sm:gap-y-8">
        {posts.map((post, index) => (
          <li className="col-span-4 sm:col-span-full" key={index}>
            <BlogPostCard post={post} theme="default" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedPosts;

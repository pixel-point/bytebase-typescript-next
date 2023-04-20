import Image from 'next/image';

import getBlogTagTheme from '@/utils/get-blog-tag-theme';
import slugifyText from '@/utils/slugify-text';
import clsx from 'clsx';

import Link from '@/components/shared/link';

import { BlogPost } from '@/types/blog-post';

import ROUTE from '@/lib/route';

interface BlogPostHeroProps {
  post: BlogPost;
  isBlogPost?: boolean;
}

const BlogPostHero = ({ post, isBlogPost = true }: BlogPostHeroProps) => {
  const { tags, author, title, feature_image, slug, published_at } = post;
  const categorySlug = slugifyText(tags);

  const WrapperTag = isBlogPost ? 'div' : 'article';

  return (
    <section className="container pt- pt-[136px] 2xl:pt-32 lg:pt-[120px] md:pt-[104px] sm:pt-24">
      <WrapperTag className="grid-gap grid grid-cols-12 items-center border-b border-gray-90 pb-14 lg:gap-y-6 lg:pb-12 md:gap-y-[18px] md:pb-10 sm:pb-8">
        <div className="col-span-6 flex flex-col gap-y-6 2xl:gap-y-5 xl:gap-y-3 md:col-span-full">
          <Link
            to={`${ROUTE.BLOG_CATEGORY}/${categorySlug}`}
            additionalClassName={clsx(
              getBlogTagTheme(categorySlug),
              'px-3 py-[5px] text-14 rounded-full inline-flex max-w-fit font-medium leading-none',
            )}
          >
            {tags}
          </Link>
          {isBlogPost ? (
            <h1 className="font-title text-72 font-semibold leading-none 2xl:text-68 xl:text-50 md:text-46 sm:text-34">
              {title}
            </h1>
          ) : (
            <Link to={`${ROUTE.BLOG}/${slug}`}>
              <h3 className="font-title text-72 font-semibold leading-none 2xl:text-68 xl:text-50 md:text-46 sm:text-34">
                {title}
              </h3>
            </Link>
          )}
          <div className="flex items-center gap-x-3">
            <Image
              className="h-9 w-9 rounded-full border border-gray-90"
              src={`/images/authors/${slugifyText(post.author)}.webp`}
              alt={post.author}
              width={36}
              height={36}
            />
            <div className="flex gap-x-4 text-14 leading-none text-gray-40">
              <span className="">{author}</span>
              <time className="uppercase">{new Date(published_at).toDateString()}</time>
            </div>
          </div>
        </div>
        {isBlogPost ? (
          <Image
            className="relative col-span-6 aspect-[2] overflow-hidden rounded-lg border border-gray-15 border-opacity-20 shadow-pricing lg:aspect-[1.6] md:col-span-full md:aspect-auto"
            src={feature_image}
            alt={title}
            width="967"
            height="484"
          />
        ) : (
          <Link to={`${ROUTE.BLOG}/${slug}`} additionalClassName="col-span-6 md:col-span-full">
            <Image
              className="relative aspect-[2] overflow-hidden rounded-lg border border-gray-15 border-opacity-20 shadow-pricing lg:aspect-[1.6] md:aspect-auto"
              src={feature_image}
              alt={title}
              width="967"
              height="484"
            />
          </Link>
        )}
      </WrapperTag>
    </section>
  );
};

export default BlogPostHero;

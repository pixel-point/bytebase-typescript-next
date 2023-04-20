import Image from 'next/image';

import getBlogTagTheme from '@/utils/get-blog-tag-theme';
import slugifyText from '@/utils/slugify-text';
import clsx from 'clsx';

import Link from '@/components/shared/link';

import { BlogPost } from '@/types/blog-post';

import ROUTE from '@/lib/route';

export type BlogPostTCardThemes = 'default' | 'small' | 'large';

interface BlogPostCardProps {
  post: BlogPost;
  hasImage?: boolean;
  theme: BlogPostTCardThemes;
}

const themes = {
  large: {
    image: {
      width: 716,
      height: 345,
    },
  },
  default: {
    image: {
      width: 474,
      height: 229,
    },
  },
  small: {
    image: {
      width: 474,
      height: 229,
    },
  },
};

const BlogPostCard = ({ post, hasImage = true, theme = 'default' }: BlogPostCardProps) => {
  const categorySlug = slugifyText(post.tags);

  return (
    <article
      className={clsx(
        'flex flex-col md:gap-y-3',
        theme === 'large' ? 'gap-y-5 lg:gap-y-4' : 'gap-y-4',
      )}
    >
      {hasImage && post?.feature_image && (
        <Link
          to={`${ROUTE.BLOG}/${post.slug}`}
          additionalClassName="relative overflow-hidden aspect-[2.07] lg:aspect-[2.084] rounded-[4px] sm:aspect-[2.1]"
        >
          <Image
            className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            src={post.feature_image}
            alt={post.title}
            {...themes[theme].image}
          />
        </Link>
      )}
      <div className="flex flex-col gap-y-3 md:gap-y-2">
        <Link
          to={`${ROUTE.BLOG_CATEGORY}/${categorySlug}`}
          additionalClassName={clsx(
            getBlogTagTheme(categorySlug),
            'px-3 py-[5px] text-14 rounded-full inline-flex max-w-fit font-medium leading-none',
          )}
        >
          {post.tags}
        </Link>
        <Link to={`${ROUTE.BLOG}/${post.slug}`}>
          <h3
            className={clsx(
              'font-medium line-clamp-3 md:leading-tight',
              theme === 'small'
                ? 'text-18'
                : 'text-24 leading-snug xl:text-20 lg:leading-snug md:text-18',
            )}
          >
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center gap-x-3 md:gap-x-2">
          <Image
            className={clsx(
              theme === 'small' && 'hidden md:block',
              'h-9 w-9 rounded-full border border-gray-90 md:h-8 md:w-8',
            )}
            src={`/images/authors/${slugifyText(post.author)}.webp`}
            alt={post.author}
            width={36}
            height={36}
          />
          <div className="relative flex gap-x-4 text-14 leading-none text-gray-40">
            <span className="">{post.author}</span>
            <time className="uppercase">{new Date(post.published_at).toDateString()}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;

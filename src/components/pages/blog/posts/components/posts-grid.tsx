import Image from 'next/image';

import clsx from 'clsx';

import Author from '@/components/shared/author';

import Category from '../../category';

const posts = [
  {
    title: 'Streamline Database Change Management for TiDB Cloud with Bytebase',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with PostgreSQL',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Bytebase 1.12.0 Deep Dive',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with MySQL and GitHub',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Streamline Database Change Management for TiDB Cloud with Bytebase',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with PostgreSQL',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Bytebase 1.12.0 Deep Dive',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with MySQL and GitHub',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Streamline Database Change Management for TiDB Cloud with Bytebase',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with PostgreSQL',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Bytebase 1.12.0 Deep Dive',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with MySQL and GitHub',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Streamline Database Change Management for TiDB Cloud with Bytebase',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with PostgreSQL',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Bytebase 1.12.0 Deep Dive',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Database Change Management with MySQL and GitHub',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
  {
    title: 'Introducing Terraform Bytebase Provider',
    category: 'Announcement',
    image: '/images/blog-hero.png',
  },
];

const PostsGrid = () => {
  return (
    <ul className="grid grid-cols-12 grid-gap gap-y-14 mt-16">
      {posts
        .map((post, index) => (
          <li
            key={index}
            className={clsx(
              index > 2 && index <= 4 ? 'col-span-6' : 'col-span-4',
              index > 4 && index <= 8 ? '!col-span-3' : 'col-span-4',
              index > 14 && index <= 16 ? 'col-span-6' : 'col-span-4',
              index > 16 && index <= 20 ? '!col-span-3' : 'col-span-4',
            )}
          >
            <div>
              <Image src={post.image} alt="" width={716} height={345} className="rounded-[4px]" />
              <Category className="mt-4">{post.category}</Category>
              <h2 className="mt-3 text-24 leading-[137%]">{post.title}</h2>
              <Author className="mt-3" />
            </div>
          </li>
        ))
        .slice(0, 21)}
    </ul>
  );
};

export default PostsGrid;

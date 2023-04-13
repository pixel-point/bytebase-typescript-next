import Image from 'next/image';

import Author from '@/components/shared/author';

import RelatedPosts from './components';

const author = {
  image: '/images/author-blog.png',
};

const relatedPosts = [
  { title: 'Introducing Terraform Bytebase Provider', postClass: 'Announcement' },
  { title: 'Introducing MongoDB Support in Bytebase', postClass: 'Industry' },
  { title: 'Stop Using Navicat as Your SQL Client', postClass: 'Announcement' },
  { title: 'The SQL Editor for Developers and DBAs', postClass: 'Explanation' },
];

const Hero = () => {
  return (
    <section className="container items-center">
      <header className="pt-[136px] 2xl:pt-32 xl:pt-[120px] lg:pt-[104px] sm:pt-24 pb-14 xl:pb-[48px] lg:pb-10 sm:pb-8 grid grid-cols-12 grid-gap border-b-gray-90 border-b-[1px] lg:flex lg:flex-col">
        <div className="col-span-6">
          <p className="text-14 px-3 py-[5px] bg-tones-purple-medium rounded-[50px] w-fit text-tags-purple">
            Announcement
          </p>
          <h1 className="font-title leading-none 2xl:leading-104 text-72 2xl:text-68 xl:text-50 lg:text-46 sm:text-34 xl:leading-none mt-6 2xl:mt-5 xl:mt-3 xl:max-w-[436px] lg:max-w-none">
            Streamline Database Change Management for TiDB Cloud with Bytebase
          </h1>
          <Author image={author.image} className="mt-6 2xl:mt-5 xl:mt-3" />
        </div>
        <div className="col-span-6 lg:mt-6 sm:mt-4.5">
          <Image
            src="/images/blog-hero.png"
            width={716}
            height={358}
            alt=""
            className="rounded-lg shadow-image border-[1px] border-gray-70 xl:h-[284px] lg:w-full lg:h-auto"
          />
        </div>
      </header>
      <footer>
        <ul className="grid grid-cols-12 sm:grid-cols-4 grid-gap pt-14 xl:pt-[48px] md:gap-y-8 lg:pt-10 sm:pt-8">
          {relatedPosts.map((post, index) => (
            <li
              key={index}
              className="col-span-3 max-w-[300px] md:max-w-[340px] sm:max-w-none md:col-span-6 sm:col-span-4"
            >
              <RelatedPosts postClass={post.postClass} title={post.title} />
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
};

export default Hero;

import Image from 'next/image';
import NextLink from 'next/link';

import DiscordIcon from '@/svgs/discord.inline.svg';
import GithubIcon from '@/svgs/github.inline.svg';
import TwitterIcon from '@/svgs/twitter.inline.svg';

const Community = () => {
  return (
    <section className="community mt-[160px] pb-[80px] container">
      <header className="grid grid-cols-12 grid-gap">
        <div className="col-span-6 row-span-2 col-start-7">
          <Image src="/images/welcome.png" width={591} height={613} alt="" />
        </div>
        <h1 className="font-title font-semibold leading-none text-112 col-span-4 row-start-1 self-end">
          <mark className="bg-transparent text-primary-1">Join</mark> the community
        </h1>
        <p className="mt-7 text-20 leading-[140%] col-span-5 row-start-2 self-start">
          At Bytebase, we believe in the power of collaboration and open communication, and we have
          a number of communities that you can join to connect with other like-minded.
        </p>
      </header>
      <ul className="mt-11 grid grid-cols-3 grid-gap text-center">
        <li className="-translate-y-[132px] bg-tones-purple-light p-9 pb-14 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-purple-dark flex flex-col items-center">
          <DiscordIcon className="w-20 h-20 text-primary-1" />
          <p className="mt-7">
            <b className="text-56 leading-none font-title font-semibold">Discord</b>
          </p>
          <p className="mt-4 text-20 leading-[150%]">
            Participate in discussion with others DBAs or developers.
          </p>
          <NextLink
            href="#"
            className="flex mx-auto w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white bg-primary-1 rounded-full"
          >
            Join Us
          </NextLink>
        </li>
        <li className="bg-tones-blue-light p-9 pb-14 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(156,186,201,0.5)] border-tones-blue-dark flex flex-col items-center">
          <TwitterIcon className="w-20 h-20 text-secondary-3" />
          <p className="mt-7">
            <b className="text-56 leading-none font-title font-semibold">Twitter</b>
          </p>
          <p className="mt-4 text-20 leading-[150%]">
            Latest news and updates about Bytebase. Tag us if you need any help or want to share a
            feedback.
          </p>
          <NextLink
            href="#"
            className="w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white bg-secondary-3 rounded-full"
          >
            Follow Us
          </NextLink>
        </li>
        <li className="translate-y-[80px] bg-gray-97 p-9 pb-14 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(167,175,190,0.5)] border-gray-70 flex flex-col items-center">
          <GithubIcon className="w-20 h-20" />
          <p className="mt-7">
            <b className="text-56 leading-none font-title font-semibold">GitHub</b>
          </p>
          <p className="mt-4 text-20 leading-[150%]">
            We appreciate any help even if it&apos;s a small typo change or an issue report.
            It&apos;s easy to become a contributor.
          </p>
          <NextLink
            href="#"
            className="flex mx-auto w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white bg-gray-15 rounded-full"
          >
            Explore Codebase
          </NextLink>
        </li>
      </ul>
    </section>
  );
};

export { Community };

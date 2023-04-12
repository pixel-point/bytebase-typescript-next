import Image from 'next/image';
import NextLink from 'next/link';

import DiscordIcon from '@/svgs/discord.inline.svg';
import GithubIcon from '@/svgs/github.inline.svg';
import TwitterIcon from '@/svgs/twitter.inline.svg';

const Community = () => {
  return (
    <section className="mt-[160px] 2xl:mt-36 lg:mt-32 md:mt-24 sm:mt-20 pb-[80px] container">
      <header className="flex 2xl:justify-between sm:flex-col">
        <div className="mt-[104px] 2xl:mt-[98px] lg:mt-14 md:mt-12 sm:mt-0 flex flex-col max-w-[630px] 2xl:max-w-[575px] md:max-w-[456px] ">
          <div className="font-title font-semibold leading-none lg:leading-95 text-112 lg:text-90 md:text-80 sm:text-56">
            <span className="flex items-center ">
              <mark className="bg-transparent text-primary-1 flex items-center">
                <span>Join</span>
              </mark>
              <img
                src="/images/plus-icon.svg"
                alt=""
                className="w-20 h-20 lg:h-[62px] lg:w-[62px] md:w-[55px] md:h-[55px] sm:h-[39px] sm:w-[39px] ml-[6px] mr-[6px] mt-[14px] lg:mt-1 md:mt-1 sm:mt-2 sm:mx-1"
              />
              <span>the</span>
            </span>
            <p>community</p>
          </div>
          <p className="mt-9 lg:mt-5 md:mt-3.5 text-20 lg:text-18 md:text-16 leading-normal lg:leading-snug self-start">
            At Bytebase, we believe in the power of collaboration and open communication, and we
            have a number of communities that you can join to connect with other like-minded.
          </p>
        </div>
        <div className="ml-[126px] 2xl:ml-0 lg:ml-16 md:ml-5 sm:ml-0 shrink-0 sm:self-center sm:mt-3">
          <Image
            src="/images/welcome.png"
            width={591}
            height={613}
            alt=""
            objectFit="contain"
            className="xl:h-[415px] lg:w-[400px] md:h-[357px] md:w-[346px] sm:w-[328px] sm:h-[341px]"
          />
        </div>
      </header>
      <ul className="mt-11 2xl:mt-7 lg:mt-8 md:mt-[25px] sm:-mt-[88px] grid grid-cols-3 grid-gap text-center sm:flex sm:flex-col sm:[&>li]:translate-y-0 sm:[&>li]:mt-4">
        <li className="flex flex-col items-center justify-between -translate-y-[132px] 2xl:-translate-y-[128px] lg:-translate-y-[57px] md:-translate-y-12 bg-tones-purple-light p-9 2xl:p-[31px] lg:p-[23px] lg:pb-8 md:p-[19px] md:pt-7 sm:px-6 sm:py-7 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-purple-dark sm:items-start lg:max-h-[400px]">
          <div className="flex flex-col items-center sm:flex-row sm:[&>p]:mt-0 sm:[&>p]:ml-4">
            <DiscordIcon className="w-20 h-20 md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] text-primary-1" />
            <p className="mt-7 2xl:mt-6 lg:mt-4 md:mt-5">
              <b className="text-56 lg:text-44 md:text-34 leading-none font-title font-semibold">
                Discord
              </b>
            </p>
          </div>
          <p className="mt-4 2xl:mt-5 lg:mt-3 text-20 lg:text-18 md:text-16 leading-normal md:leading-snug sm:mt-3 sm:text-start">
            Participate in discussion with others DBAs or developers.
          </p>
          <NextLink
            href="#"
            className="xl:w-full justify-center flex mx-auto w-fit mt-11 2xl:mt-8 lg:mt-[50px] sm:mt-4 px-14 py-6 uppercase text-16 md:text-13 md:p-4 leading-none font-bold tracking-wide text-white bg-primary-1 rounded-full"
          >
            Join Us
          </NextLink>
        </li>
        <li className="flex flex-col items-center justify-between bg-tones-blue-light p-9 2xl:p-[31px] lg:p-[23px] md:p-[19px] md:pt-7 sm:px-6 sm:py-7 lg:pb-8 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-blue-dark lg:max-h-[400px] sm:items-start">
          <div className="flex flex-col items-center sm:flex-row sm:[&>p]:mt-0 sm:[&>p]:ml-4">
            <TwitterIcon className="w-20 h-20 md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] text-secondary-3" />
            <p className="mt-7 2xl:mt-6 lg:mt-4 md:mt-5">
              <b className="text-56 lg:text-44 md:text-34 leading-none font-title font-semibold">
                Twitter
              </b>
            </p>
          </div>
          <p className="mt-4 2xl:mt-5 lg:mt-3 text-20 lg:text-18 md:text-16 leading-normal md:leading-snug sm:mt-3 sm:text-start">
            Latest news and updates about Bytebase. Tag us if you need any help or want to share a
            feedback.
          </p>
          <NextLink
            href="#"
            className="xl:w-full justify-center flex mx-auto w-fit mt-11 2xl:mt-8 lg:mt-6 sm:mt-4 px-14 py-6 uppercase text-16 md:text-13 md:p-4 leading-none font-bold tracking-wide text-white bg-secondary-3 rounded-full"
          >
            Follow Us
          </NextLink>
        </li>
        <li className="flex flex-col items-center justify-between translate-y-[80px] 2xl:translate-y-[76px] lg:translate-y-[57px] md:translate-y-10 bg-gray-97 p-9 2xl:p-[31px] lg:p-7 lg:px-5 md:p-[19px] md:pt-7 sm:px-6 sm:py-7 lg:pb-8 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-gray-70 lg:max-h-[400px] sm:items-start">
          <div className="flex flex-col items-center sm:flex-row sm:[&>p]:mt-0 sm:[&>p]:ml-4">
            <GithubIcon className="w-20 h-20 md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px]" />
            <p className="mt-7 2xl:mt-6 lg:mt-4 md:mt-5">
              <b className="text-56 lg:text-44 md:text-34 leading-none font-title font-semibold">
                GitHub
              </b>
            </p>
          </div>
          <p className="mt-4 2xl:mt-5 lg:mt-3 text-20 lg:text-18 md:text-16 leading-normal md:leading-snug sm:mt-3 sm:text-start">
            We appreciate any help even if it&apos;s a small typo change or an issue report.
            It&apos;s easy to become a contributor.
          </p>
          <NextLink
            href="#"
            className="xl:w-full justify-center flex mx-auto w-fit mt-11 2xl:mt-8 lg:mt-5 sm:mt-4 px-14 lg:px-4 py-6 uppercase text-16 md:text-13 md:p-4 leading-none font-bold tracking-wide text-white bg-gray-15 rounded-full"
          >
            Explore Codebase
          </NextLink>
        </li>
      </ul>
    </section>
  );
};

export { Community };

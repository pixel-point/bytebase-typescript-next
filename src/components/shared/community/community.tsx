import Image from 'next/image';
import NextLink from 'next/link';

import DiscordIcon from '@/svgs/discord.inline.svg';
import GithubIcon from '@/svgs/github.inline.svg';
import TwitterIcon from '@/svgs/twitter.inline.svg';

const Community = () => {
  return (
    <section className="mt-[160px] 2xl:mt-36 xl:mt-32 lg:mt-24 md:mt-20 pb-[80px] container">
      <header className="flex 2xl:justify-between md:flex-col">
        <div className="mt-[104px] 2xl:mt-[98px] xl:mt-14 lg:mt-12 md:mt-0 flex flex-col max-w-[630px] 2xl:max-w-[575px] lg:max-w-[456px] ">
          <div className="font-title font-semibold leading-none text-112 xl:text-90 lg:text-80 md:text-56">
            <span className="flex items-center ">
              <mark className="bg-transparent text-primary-1 flex items-center">
                <span>Join</span>
              </mark>
              <img
                src="/images/plus-icon.svg"
                alt=""
                className="w-20 h-20 xl:h-[62px] xl:w-[62px] lg:w-[55px] lg:h-[55px] md:h-[39px] md:w-[39px] ml-[6px] mr-[6px] mt-[14px] lg:mt-2 md:mt-2"
              />
              {/* <PlusIcon className="w-20 h-20 xl:h-[62px] xl:w-[62px] lg:w-[55px] lg:h-[55px] md:h-[39px] md:w-[39px] ml-[6px] mr-[6px] mt-[14px] lg:mt-2 md:mt-2" /> */}
              <span>the</span>
            </span>
            <p>community</p>
          </div>
          <p className="mt-9 xl:mt-4 text-20 xl:text-18 lg:text-16 leading-[140%] self-start">
            At Bytebase, we believe in the power of collaboration and open communication, and we
            have a number of communities that you can join to connect with other like-minded.
          </p>
        </div>
        <div className="ml-[126px] 2xl:ml-0 xl:ml-16 lg:ml-5 md:ml-0 shrink-0 md:self-center md:mt-3">
          <Image
            src="/images/welcome.png"
            width={591}
            height={613}
            alt=""
            objectFit="contain"
            className="xl:h-[415px] xl:w-[400px] lg:h-[357px] lg:w-[346px] md:w-[328px] md:h-[341px]"
          />
        </div>
      </header>
      <ul className="mt-11 2xl:mt-7 xl:mt-8 md:-mt-20 grid grid-cols-3 grid-gap text-center md:flex md:flex-col md:[&>li]:translate-y-0 md:[&>li]:mt-4">
        <li className="flex flex-col items-center justify-between -translate-y-[132px] 2xl:-translate-y-[128px] xl:-translate-y-[57px] bg-tones-purple-light p-9 2xl:p-[31px] xl:p-[19px] lg:p-[19px] md:-[23px] pb-14 xl:pb-8 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-purple-dark md:items-start">
          <div>
            <div className="flex flex-col items-center md:flex-row md:[&>p]:mt-0 md:[&>p]:ml-4">
              <DiscordIcon className="w-20 h-20 lg:h-[60px] lg:w-[60px] md:h-[50px] md:w-[50px] text-primary-1" />
              <p className="mt-7 xl:mt-5">
                <b className="text-56 xl:text-44 lg:text-34 leading-none font-title font-semibold">
                  Discord
                </b>
              </p>
            </div>
            <p className="mt-4 xl:mt-3 text-20 xl:text-18 lg:text-16 leading-[150%] xl:leading-6 md:mt-[18px] md:text-start">
              Participate in discussion with others DBAs or developers.
            </p>
          </div>
          <NextLink
            href="#"
            className="xl:w-full justify-center flex mx-auto w-fit mt-11 md:mt-4 px-14 py-6 uppercase text-16 lg:text-13 lg:p-4 leading-none font-bold tracking-tight text-white bg-primary-1 rounded-full"
          >
            Join Us
          </NextLink>
        </li>
        <li className="flex flex-col items-center justify-between  bg-tones-blue-light p-9 2xl:p-[31px] xl:p-[19px] lg:p-[19px] md:-[23px] pb-14 xl:pb-8 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-blue-dark">
          <div>
            <div className="flex flex-col items-center md:flex-row md:[&>p]:mt-0 md:[&>p]:ml-4">
              <TwitterIcon className="w-20 h-20 lg:h-[60px] lg:w-[60px] md:h-[50px] md:w-[50px] text-secondary-3" />
              <p className="mt-7 xl:mt-5">
                <b className="text-56 xl:text-44 lg:text-34 leading-none font-title font-semibold">
                  Twitter
                </b>
              </p>
            </div>
            <p className="mt-4 xl:mt-3 text-20 xl:text-18 lg:text-16 leading-[150%] xl:leading-6 md:mt-[18px] md:text-start">
              Latest news and updates about Bytebase. Tag us if you need any help or want to share a
              feedback.
            </p>
          </div>
          <NextLink
            href="#"
            className="xl:w-full justify-center flex mx-auto w-fit mt-11 md:mt-4 px-14 py-6 uppercase text-16 lg:text-13 lg:p-4 leading-none font-bold tracking-tight text-white bg-secondary-3 rounded-full"
          >
            Follow Us
          </NextLink>
        </li>
        <li className="flex flex-col items-center justify-between translate-y-[80px] 2xl:translate-y-[76px] xl:translate-y-[57px] bg-gray-97 p-9 2xl:p-[31px] xl:p-[19px] lg:p-[19px] md:-[23px] pb-14 xl:pb-8 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-gray-70">
          <div>
            <div className="flex flex-col items-center md:flex-row md:[&>p]:mt-0 md:[&>p]:ml-4">
              <GithubIcon className="w-20 h-20 lg:h-[60px] lg:w-[60px] md:h-[50px] md:w-[50px]" />
              <p className="mt-7 xl:mt-5">
                <b className="text-56 xl:text-44 lg:text-34 leading-none font-title font-semibold">
                  GitHub
                </b>
              </p>
            </div>
            <p className="mt-4 xl:mt-3 text-20 xl:text-18 lg:text-16 leading-[150%] xl:leading-6 md:mt-[18px] md:text-start">
              We appreciate any help even if it&apos;s a small typo change or an issue report.
              It&apos;s easy to become a contributor.
            </p>
          </div>
          <NextLink
            href="#"
            className="xl:w-full justify-center flex mx-auto w-fit mt-11 md:mt-4 px-14 py-6 uppercase text-16 lg:text-13 lg:p-4 leading-none font-bold tracking-tight text-white bg-gray-15 rounded-full"
          >
            Explore Codebase
          </NextLink>
        </li>
      </ul>
    </section>
  );
};

export { Community };

const Testimonials = () => {
  return (
    <section className="pt-[176px] 2xl:pt-36 xl:pt-28 lg:pt-20 pb-[234px] 2xl:pb-[202px] xl:pb-[218px] lg:pb-[154px] md:pb-[130px] bg-cite">
      <div className="container">
        <figure className="flex flex-col items-center mx-auto max-w-[1048px] xl:max-w-[776px] lg:max-w-[590px] text-center">
          <img src="/images/quote.svg" alt="" className="h-10 xl:h-8 lg:h-7 md:h-6" />
          <blockquote>
            <p className="mt-16 2xl:mt-14 xl:mt-12 lg:mt-10 md:mt-6 text-40 xl:text-30 lg:text-24 md:text-20 leading-[125%] tracking-tight font-semibold">
              Bytebase helped us save $24M in OpEx. We’re also saving 50% of our time with automated
              renewal tracking and alerting across IT, Procurement, and Finance departments
            </p>
          </blockquote>
          <figcaption className="mt-8 xl:mt-6 lg:mt-5 md:mt-4 md:text-12 font-semibold tracking-tight leading-none">
            — Brian Crosson, <cite className="font-normal not-italic">HD Supply</cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;

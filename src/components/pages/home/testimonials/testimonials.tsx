const Testimonials = () => {
  return (
    <section className="testimonials pt-[176px] pb-[234px] bg-cite">
      <div className="container">
        <figure className="mx-auto max-w-[1048px] text-center">
          <blockquote>
            <p className="text-40 leading-[125%] tracking-tight font-semibold">
              Bytebase helped us save $24M in OpEx. We’re also saving 50% of our time with automated
              renewal tracking and alerting across IT, Procurement, and Finance departments
            </p>
          </blockquote>
          <figcaption className="mt-8 font-semibold tracking-tight leading-none">
            — Brian Crosson, <cite className="font-normal not-italic">HD Supply</cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export { Testimonials };

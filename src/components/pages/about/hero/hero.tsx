const Hero = () => {
  const supTitle = 'About us';
  const title = 'Why we build';
  const description =
    'While we have a plethora of commercial and open-source database engines serving billions of users, our tooling around making reliable, consistent, auditable application database schema changes is embarrassing. And today many teams are still connecting to the production DB and applying changes directly. Quick and dirty, until BOMB!';

  return (
    <section className="container pt-[136px]">
      <p className=" w-fit rounded-[50px] bg-tones-purple-dark px-[12px] py-[5px] text-14 text-tags-purple">
        {supTitle}
      </p>
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-end-6">
          <h1 className=" mt-5 font-title text-112 font-semibold leading-[112px]">{title}</h1>
        </div>
        <div className=" col-start-7 col-end-13 mt-4 text-20 leading-7">{description}</div>
      </div>
    </section>
  );
};

export default Hero;

const Logos = () => {
  return (
    <div className="mt-[160px] 2xl:mt-36 xl:mt-[128px] lg:mt-24 md:mt-20 relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logos-caption.svg"
        alt="Built by engineers knowing database development flow"
        width={321}
        height={64}
        className="relative left-[55.5%] lg:left-[40%] md:!left-[30%] mb-6 xl:mb-[18px] xl:w-[283px] xl:h-[58px] md:w-[220px] md:h-[42px]"
      />
      <div className="logos xl:h-[76px] lg:h-[72px] md:h-14" />
    </div>
  );
};

export default Logos;

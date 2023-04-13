const Logos = () => {
  return (
    <div className="mt-[160px] 2xl:mt-36 lg:mt-[130px] md:mt-[90px] sm:mt-20 relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logos-caption.svg"
        alt="Built by engineers knowing database development flow"
        width={321}
        height={64}
        className="relative left-[54.5%] 2xl:left-[53.7%] lg:left-[58.2%] md:left-[50.3%] sm:left-[40%] xs:left-[34%] mb-6 lg:mb-[18px] xs:mb-3 lg:w-[283px] lg:h-[58px] sm:w-[220px] sm:h-[42px]"
      />
      <div className="logos lg:h-[76px] md:h-[72px] sm:h-14" />
    </div>
  );
};

export default Logos;

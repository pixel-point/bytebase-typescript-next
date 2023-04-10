const Logos = () => {
  return (
    <div className="mt-[160px] relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logos-caption.svg"
        alt="Built by engineers knowing database development flow"
        width={321}
        height={64}
        className="relative left-1/2 mb-6"
      />
      <div className="logos" />
    </div>
  );
};

export { Logos };

import Image from 'next/image';

const Hero = () => {
  const title = 'About us page';
  const supTitle = 'Why we build';
  const imgAlt =
    'Bytebase supports every major database systems, Bytebase offers the most comprehensive SQL Lint rules, All Bytebase source code is available on GitHub';

  return (
    <section className="container pt-[136px] text-center">
      <h1 className="sr-only">{title}</h1>
      <span className="w-fit rounded-[20px] bg-secondary-1 py-2 px-2.5 text-12 font-bold uppercase leading-none tracking-wider">
        {supTitle}
      </span>
      <h2 className="mt-5 font-title text-88 font-semibold leading-none">
        Simplify database changes
        <br className="xs:hidden" />
        with <mark className="bg-transparent text-primary-1">standardization</mark>, lint rules
      </h2>
      <Image
        src="/images/page/about/why-we-build.png"
        alt={imgAlt}
        width={1292}
        height={631}
        className="mx-auto mt-[52px]"
        priority
      />
    </section>
  );
};

export default Hero;

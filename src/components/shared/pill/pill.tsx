import clsx from 'clsx';

type PillProps = {
  children: React.ReactNode;
  bg?: string;
  color?: string;
  className?: string;
};

const Pill = ({ children, bg = 'secondary-1', color = 'gray-15', className }: PillProps) => (
  <div
    className={clsx(
      `w-fit rounded-[20px] py-2 px-2.5 text-12 font-bold uppercase leading-none tracking-wider bg-${bg} text-${color}`,
      className,
    )}
  >
    {children}
  </div>
);

export default Pill;

import { cn } from '@/utils/style';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <p
      className={cn(
        `text-center text-primary text-[80px] font-hancomSans leading-[120px]`,
        className,
      )}
    >
      mate
    </p>
  );
};

export default Logo;

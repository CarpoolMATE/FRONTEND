type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <p
      className={`text-center text-[#007aff] text-[80px] font-['hancomSans'] leading-[120px] ${className}`}
    >
      mate
    </p>
  );
};

export default Logo;

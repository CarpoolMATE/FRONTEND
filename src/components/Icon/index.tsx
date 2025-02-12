import Icons, { IconsList } from '@/components/Icon/constants';

import { cn } from '@/utils/style';

interface IconProps {
  icon: IconsList;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  return (
    <svg
      style={{
        fill: 'currentColor',
      }}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-5 h-5', className)}
      {...Icons[icon].svgOptions}
    >
      {Icons[icon].icon}
    </svg>
  );
};

export default Icon;

export type { IconsList };

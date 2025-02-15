import Image from 'next/image';

import { ProfileImageProps } from '@/components/Image/Profile/types';

import { cn } from '@/utils/style';

const ProfileImage = ({ url, size = 44, className }: ProfileImageProps) => {
  return (
    <div
      className={cn(
        'relative bg-[#f2f8ff] rounded-full overflow-hidden',
        className,
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={url}
        width={size}
        height={size}
        alt="img"
        className="absolute rounded-full"
      />
    </div>
  );
};

export default ProfileImage;

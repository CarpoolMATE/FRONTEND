import { ProfileCardProps } from '@/app/profile/components/apis/types';

import Icon from '@/components/Icon';

const ProfileCard = ({
  date,
  from,
  headCount,
  maxCount,
  price,
  time,
}: ProfileCardProps) => {
  return (
    <div className="h-[105px] w-full flex justify-between items-center border-b-space border-b px-4 py-5">
      <div className="flex flex-col gap-3">
        <span className="text-default">{date}</span>
        <span className="text-gray">
          {from} 출발 | {price}원
        </span>
        <span className="text-default">{time}</span>
      </div>
      <div className="flex h-full items-center gap-5">
        <div className="rounded-2xl bg-gray text-white h-9 w-[52px] flex items-center justify-center">
          {headCount}/{maxCount}
        </div>
        <Icon icon="DOTS" className="cursor-pointer text-[#666666]" />
      </div>
    </div>
  );
};

export default ProfileCard;

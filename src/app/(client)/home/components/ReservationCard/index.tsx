'use client';

import Icon from '@/components/Icon';

import { useMemberStore } from '@/store/member';

const ReservationCard = () => {
  const { member } = useMemberStore();

  if (!member?.reservation) {
    return (
      <div className="w-full mt-2 min-h-[147px] bg-white rounded-[1.25rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.08)] border border-input flex-col justify-center items-center gap-4 inline-flex">
        <h2 className="text-lg font-semibold">
          현재 예약 중인 카풀이 없습니다
        </h2>
        <p className="text-placeholder text-sm font-medium">
          내일의 카풀을 예약하거나 모집해보세요
        </p>
      </div>
    );
  }

  // TODO: 데이터 조회 예정
  return (
    <div className="w-full mt-2 min-h-[147px] bg-white rounded-[1.25rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.08)] border border-input flex-col justify-center items-center gap-4 inline-flex">
      <h2 className="text-lg font-semibold">
        내일 <span className="text-primary">8시 30분</span>에 카풀 예약이 있어요
      </h2>

      <div className="flex items-center gap-9">
        <div className="flex flex-col items-center gap-y-3">
          <p className="text-placeholder text-sm font-medium">출발지</p>
          <p className="text-sm">{'{주소}'}</p>
        </div>
        <div className="flex items-center gap-0.5">
          {Array(3)
            .fill('')
            .map((_value, index) => (
              <Icon
                key={index}
                icon="CHEVRONS_RIGHT"
                className="size-3 text-primary opacity-50"
              />
            ))}
        </div>

        <div className="flex flex-col items-center gap-y-3">
          <p className="text-placeholder text-sm font-medium">도착지</p>
          <p className="text-sm">OO대학교</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;

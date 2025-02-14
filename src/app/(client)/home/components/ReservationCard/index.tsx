'use client';

const ReservationCard = () => {
  return (
    <div className="w-full mt-2 min-h-[147px] bg-white rounded-[1.25rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.08)] border border-input flex-col justify-center items-center gap-4 inline-flex">
      <h2 className="text-lg font-semibold">현재 예약 중인 카풀이 없습니다</h2>
      <p className="text-placeholder text-sm font-medium">
        내일의 카풀을 예약하거나 모집해보세요
      </p>
    </div>
  );
};

export default ReservationCard;

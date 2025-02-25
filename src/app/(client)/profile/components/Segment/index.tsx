'use client';

type SegmentControlProps = {
  isPassinger: boolean;
  onClick: () => void;
};

const SegmentControl = ({ isPassinger, onClick }: SegmentControlProps) => {
  const tabs = [
    { id: 'passenger', label: '패신저' },
    { id: 'driver', label: '드라이버' },
  ];

  return (
    <div
      onClick={onClick}
      className="relative flex bg-[#F1F1F1] rounded-2xl p-[2px] transition-all duration-300 w-[150px] h-[38px] cursor-pointer"
    >
      <div
        className="absolute top-[2px] left-[2px] w-[73px] h-[34px] bg-white rounded-2xl transition-transform duration-300"
        style={{
          transform: `translateX(${isPassinger ? '0px' : '73px'})`,
        }}
      />
      {tabs.map((v) => (
        <div
          key={v.id}
          className={`w-[73px] h-[34px] flex items-center justify-center relative z-10 transition-all duration-300 text-sm ${(isPassinger && v.label === '패신저') || (!isPassinger && v.label !== '패신저') ? 'text-default font-semibold' : 'text-placeholder'}`}
        >
          {v.label}
        </div>
      ))}
    </div>
  );
};

export default SegmentControl;

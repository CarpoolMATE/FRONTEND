import React, { useState, useRef, useEffect } from 'react';

interface TimePickerProps {
  initialHour?: number;
  initialMinute?: number;
  initialPeriod?: 'AM' | 'PM';
  onComplete?: (hour: number, minute: number, period: 'AM' | 'PM') => void;
  onClose: (e: boolean) => void;
}

type Period = 'AM' | 'PM';

const TimePickerBottomSheet = ({
  initialHour = 7,
  initialMinute = 31,
  initialPeriod = 'AM',
  onComplete,
  onClose,
}: TimePickerProps) => {
  const ITEM_HEIGHT = 32;

  const [selectedHour, setSelectedHour] = useState<number>(initialHour);
  const [selectedMinute, setSelectedMinute] = useState<number>(initialMinute);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>(initialPeriod);
  const periodRef = useRef<HTMLDivElement>(null);

  const hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hourRef.current) {
      hourRef.current.scrollTop = (selectedHour - 1) * ITEM_HEIGHT;
      hourRef.current.addEventListener('wheel', preventDefaultScroll, {
        passive: false,
      });
      hourRef.current.addEventListener('touchmove', preventDefaultScroll, {
        passive: false,
      });
    }
    if (minuteRef.current) {
      minuteRef.current.scrollTop = selectedMinute * ITEM_HEIGHT;
      minuteRef.current.addEventListener('wheel', preventDefaultScroll, {
        passive: false,
      });
      minuteRef.current.addEventListener('touchmove', preventDefaultScroll, {
        passive: false,
      });
    }

    if (periodRef.current) {
      periodRef.current.scrollTop =
        (selectedPeriod === 'AM' ? 0 : 1) * ITEM_HEIGHT;
      periodRef.current.addEventListener('wheel', preventDefaultScroll, {
        passive: false,
      });
      periodRef.current.addEventListener('touchmove', preventDefaultScroll, {
        passive: false,
      });
    }

    return () => {
      if (hourRef.current) {
        hourRef.current.removeEventListener('wheel', preventDefaultScroll);
        hourRef.current.removeEventListener('touchmove', preventDefaultScroll);
      }
      if (minuteRef.current) {
        minuteRef.current.removeEventListener('wheel', preventDefaultScroll);
        minuteRef.current.removeEventListener(
          'touchmove',
          preventDefaultScroll,
        );
      }
      if (periodRef.current) {
        periodRef.current.removeEventListener('wheel', preventDefaultScroll);
        periodRef.current.removeEventListener(
          'touchmove',
          preventDefaultScroll,
        );
      }
    };
  }, []);

  const preventDefaultScroll = (e: Event): void => {
    e.preventDefault();
  };

  const handleScroll = <T extends string | number>(
    e: React.UIEvent<HTMLDivElement>,
    values: T[],
    setter: (value: T) => void,
  ): void => {
    const container = e.target as HTMLDivElement;
    const scrollTop = container.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);

    if (values[index] !== undefined) {
      requestAnimationFrame(() => {
        setter(values[index]);
        container.scrollTo({
          top: index * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      });
    }
  };

  const handleWheel = <T extends string | number>(
    e: React.WheelEvent<HTMLDivElement>,
    values: T[],
    setter: (value: T) => void,
    currentValue: T,
  ): void => {
    const container = e.currentTarget;
    const direction = e.deltaY > 0 ? 1 : -1;
    const currentIndex = values.indexOf(currentValue);
    const nextIndex = Math.max(
      0,
      Math.min(values.length - 1, currentIndex + direction),
    );

    if (nextIndex !== currentIndex) {
      setter(values[nextIndex]);
      requestAnimationFrame(() => {
        container.scrollTop = nextIndex * ITEM_HEIGHT;
      });
    }
  };

  const renderPicker = <T extends string | number>(
    ref: React.RefObject<HTMLDivElement | null>,
    values: T[],
    selected: T,
    setter: (value: T) => void,
    formatValue: (v: T) => string = (v) => v.toString(),
  ): React.ReactNode => (
    <div className="flex-1 h-full overflow-hidden text-center relative">
      <div
        className="absolute left-0 right-0 h-8 top-1/2 -translate-y-1/2 bg-gray-100"
        style={{ zIndex: 1 }}
      />
      <div
        ref={ref}
        className="relative h-full overflow-y-auto"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          zIndex: 2,
        }}
        onWheel={(e) => handleWheel(e, values, setter, selected)}
        onScroll={(e) => handleScroll(e, values, setter)}
      >
        <div style={{ height: 'calc(50% - 16px)' }} />
        {values.map((value) => {
          const isSelected = value === selected;
          return (
            <div
              key={value}
              className={`h-8 flex items-center justify-center relative
                ${
                  isSelected
                    ? 'text-blue-500 font-semibold translate-y-1'
                    : 'text-gray-400'
                }
              `}
              style={{ zIndex: 2 }}
            >
              {formatValue(value)}
            </div>
          );
        })}
        <div style={{ height: 'calc(50% - 16px)' }} />
      </div>
    </div>
  );

  const handleComplete = (): void => {
    if (onComplete) {
      onComplete(selectedHour, selectedMinute, selectedPeriod);
    }
  };

  return (
    <div
      className="absolute inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-lg"
      style={{ width: '375px', height: '323px' }}
    >
      <div className="relative h-full p-4">
        <button
          onClick={() => onClose(false)}
          className="cursor-pointer z-[100] absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>

        <div className="flex justify-center items-center h-52 mb-4">
          <div className="flex w-full h-full relative">
            {renderPicker<number>(
              hourRef,
              hours,
              selectedHour,
              setSelectedHour,
            )}
            {renderPicker<number>(
              minuteRef,
              minutes,
              selectedMinute,
              setSelectedMinute,
              (minute) => minute.toString().padStart(2, '0'),
            )}

            {renderPicker<Period>(
              periodRef,
              ['AM', 'PM'] as Period[],
              selectedPeriod,
              setSelectedPeriod,
            )}
          </div>
        </div>

        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
          onClick={handleComplete}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default TimePickerBottomSheet;

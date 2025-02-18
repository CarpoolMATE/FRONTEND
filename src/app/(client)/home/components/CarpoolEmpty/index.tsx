import { PropsWithChildren } from 'react';

import Icon from '@/components/Icon';

const CarpoolEmpty = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full justify-center items-center flex flex-col mt-14">
      <div className="h-[150.32px] flex-col justify-start items-center gap-[45px] inline-flex">
        {children}
        <div className="opacity-40 w-[125.55px] h-[75.32px] relative">
          <Icon icon="CAR" className="text-[#D1D5D9] w-[133px] h-[83px]" />
        </div>
      </div>
    </div>
  );
};

export default CarpoolEmpty;

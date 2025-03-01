'use client';

import { useFormContext } from 'react-hook-form';

import { DRIVER_REGISTRATION_HEADER_HEIGHT } from '@/app/(client)/driver-registration/constants';

import { CarpoolRegistrationNextStepProps } from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

import { CarpoolRegistrationFormValues } from '@/app/(client)/carpool-registration/components/Form/schema';

import Button from '@/components/Button';

const StartLocation = ({ onNext }: CarpoolRegistrationNextStepProps) => {
  const { watch } = useFormContext<CarpoolRegistrationFormValues>();
  console.log(process.env.NEXT_PUBLIC_KAKAOJSKEY, 'dwdaw');
  // const [modalOpen, setModalOpen] = useState(false);

  // const onClickHandle = () => {
  //   console.log('123');
  // };
  return (
    <section
      className="flex flex-col"
      style={{ height: `calc(100vh - ${DRIVER_REGISTRATION_HEADER_HEIGHT}px)` }}
    >
      {/* <MapModal onClose={() => ''} location='"서울특별시 중구 세종대로 110"' /> */}
      {/* <BasicMap onClose={() => ''} /> */}
      <div className="px-5 flex flex-col">
        <h1 className="text-2xl font-bold pt-12">출발지를 선택해주세요</h1>
        <span className="my-4 text-sm text-placeholder">
          도착지는 대학교로 자동 설정됩니다
        </span>
        <div className="flex flex-col gap-2.5">
          <p className="text-icon text-sm font-medium">출발 지역</p>
          <div className="flex gap-3 border rounded-lg border-placeholder h-[51px] items-center pl-4">
            {/* <Icon icon="MAP" className="text-primary" /> */}
            <input
              className="w-full h-full text-lg rounded-lg outline-none"
              placeholder="지도에서 선택"
              readOnly
              // onClick={() => setModalOpen(true)}
              value={watch('departureCoordinate')}
            />
          </div>
        </div>
      </div>

      <div className="mt-auto p-5">
        <Button
          // disabled={!watch('departureCoordinate')}
          onClick={onNext}
        >
          다음
        </Button>
      </div>
    </section>
  );
};

export default StartLocation;

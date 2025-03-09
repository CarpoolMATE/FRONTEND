import { Suspense } from 'react';

import ReservationCard from '@/app/(client)/home/components/ReservationCard';
import CarpoolFilter from '@/app/(client)/home/components/CarpoolFilter';
import CarpoolList from '@/app/(client)/home/components/CarpoolList';
import HomeHeader from '@/app/(client)/home/components/Header';
import Spin from '@/components/Spin';

const HomePage = () => {
  return (
    <section className="px-5 flex flex-col justify-center items-center">
      <HomeHeader />
      <ReservationCard />
      <Suspense
        fallback={
          <div className="flex items-center h-[30dvh]">
            <Spin />
          </div>
        }
      >
        <CarpoolFilter />
        <CarpoolList />
      </Suspense>
    </section>
  );
};

export default HomePage;

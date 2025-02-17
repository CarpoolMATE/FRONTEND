import ReservationCard from '@/app/(client)/home/components/ReservationCard';
import CarpoolFilter from '@/app/(client)/home/components/CarpoolFilter';
import CarpoolList from '@/app/(client)/home/components/CarpoolList';

import HomeHeader from '@/app/(client)/home/components/Header';

const HomePage = () => {
  return (
    <section className="px-5 flex flex-col justify-center items-center">
      <HomeHeader />
      <ReservationCard />
      <CarpoolFilter />
      <CarpoolList />
    </section>
  );
};

export default HomePage;

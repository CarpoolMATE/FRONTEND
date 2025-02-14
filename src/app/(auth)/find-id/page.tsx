import React from 'react';

import FindIdForm from '@/app/(auth)/find-id/components/Form';

const IdFindPage: React.FC = () => {
  return (
    <section className="pt-16 px-5 pb-[34px] h-[calc(100%-64px)]">
      <FindIdForm />
    </section>
  );
};

export default IdFindPage;

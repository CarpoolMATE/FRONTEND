'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CarpoolRegistrationFunnel from '@/app/(client)/carpool-registration/components/Funnel';

import {
  CarpoolRegistrationFormValues,
  carpoolRegistrationSchema,
} from '@/app/(client)/carpool-registration/components/Form/schema';

const CarpoolRegistrationForm = () => {
  const methods = useForm<CarpoolRegistrationFormValues>({
    resolver: zodResolver(carpoolRegistrationSchema),
    defaultValues: {
      departureCoordinate: '서울특별시 강남구 테헤란로 152',
      latitude: 37.5000242405515,
      longitude: 127.036508620542,
    },
  });

  return (
    <FormProvider {...methods}>
      <CarpoolRegistrationFunnel />
    </FormProvider>
  );
};

export default CarpoolRegistrationForm;

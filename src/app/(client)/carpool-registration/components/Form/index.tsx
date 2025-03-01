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
  });

  return (
    <FormProvider {...methods}>
      <CarpoolRegistrationFunnel />
    </FormProvider>
  );
};

export default CarpoolRegistrationForm;

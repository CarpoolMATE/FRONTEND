'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import DriverRegistrationFunnel from '@/app/(client)/driver-registration/components/Funnel';

import {
  DriverRegistrationFormValues,
  driverRegistrationSchema,
} from '@/app/(client)/driver-registration/components/Form/schema';

const DriverRegistrationForm = () => {
  const methods = useForm<DriverRegistrationFormValues>({
    resolver: zodResolver(driverRegistrationSchema),
  });

  return (
    <FormProvider {...methods}>
      <DriverRegistrationFunnel />
    </FormProvider>
  );
};

export default DriverRegistrationForm;

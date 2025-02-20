import { DriverRegistrationFormValues } from '@/app/(client)/driver-registration/components/Form/schema';

export type PhoneNumberProps = {
  onSubmit: (values: DriverRegistrationFormValues) => void;
};

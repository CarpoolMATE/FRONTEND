import { ButtonIntentType } from '@/components/button/types';

export const BUTTON_INTENT_CLASSES: Record<ButtonIntentType, string> = {
  default: 'bg-primary text-white',
  delete: 'bg-error text-white',
  outline: 'border border-primary text-primary bg-white hover:bg-[#F2F8FF]',
};

import React from 'react';

import { ButtonIntentType } from '@/components/Button/types';

import { BUTTON_INTENT_CLASSES } from '@/components/Button/constants';

import { cn } from '@/utils/style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: ButtonIntentType;
};

const Button = ({ intent = 'default', className, ...props }: ButtonProps) => {
  const buttonClasses = cn(
    'h-[51px] font-pretendard cursor-pointer w-full rounded-xl font-semibold text-lg hover:opacity-95 active:opacity-95 disabled:border-none disabled:bg-[#DADDE1] disabled:cursor-not-allowed disabled:text-[#A2ABB4] disabled:hover:opacity-100',
    BUTTON_INTENT_CLASSES[intent],
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

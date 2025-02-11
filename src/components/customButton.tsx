import React from 'react';
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'default' | 'delete' | 'outline';
};

const CustomButton = ({
  intent = 'default',
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    'h-[51px] font-pretendard cursor-pointer w-full rounded-xl font-semibold text-lg hover:opacity-95 active:opacity-95 disabled:border-none disabled:bg-[#DADDE1] disabled:cursor-not-allowed disabled:text-[#A2ABB4] disabled:hover:opacity-100',
    {
      'bg-primary text-white': intent === 'default',
      'bg-error text-white': intent === 'delete',
      'border border-primary text-primary bg-white hover:bg-[#F2F8FF]':
        intent === 'outline',
    },
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;

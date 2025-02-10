import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'default' | 'delete' | 'out_line';
  size?: 'default' | 'small';
};

const CustomButton: React.FC<ButtonProps> = ({
  intent = 'default',
  size = 'default',
  className,
  ...props
}) => {
  return (
    <button
      className={`font-pretendard cursor-pointer w-full rounded-xl font-semibold text-lg hover:opacity-95 active:opacity-95 disabled:border-none disabled:bg-[#DADDE1] disabled:cursor-not-allowed disabled:text-[#A2ABB4] disabled:hover:opacity-100
        ${size === 'default' ? 'h-[51px]' : size === 'small' ? 'h-11' : ''}
        ${
          intent === 'default'
            ? 'bg-primary text-white'
            : intent === 'delete'
              ? 'bg-error text-white'
              : 'border-[1px] border-primary text-primary bg-white hover:bg-[#F2F8FF]'
        }`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;

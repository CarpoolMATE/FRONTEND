'use client';

import { useState } from 'react';

import { InputProps } from '@/components/Input/types';

import { cn } from '@/utils/style';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

const Input = ({
  error = false,
  errorText,
  className = '',
  type,
  ...rest
}: InputProps) => {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const baseClasses =
    'w-full self-stretch h-[51px] p-[15px] bg-white justify-start items-center gap-3 inline-flex placeholder:text-placeholder text-main text-lg font-pretendard rounded-[10px]';

  const errorClasses = error ? 'border border-error' : 'border border-input';

  return (
    <div>
      <div className="relative">
        <input
          {...rest}
          type={inputType}
          className={cn(baseClasses, errorClasses, className)}
        />
        {isPassword && (
          <Button
            type="button"
            intent="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            <Icon
              icon={!showPassword ? 'EYE_ON' : 'EYE_OFF'}
              className="w-6 h-6"
            />
          </Button>
        )}
      </div>
      {error && errorText && (
        <p className="pl-[10px] mt-[3px] text-error text-sm font-normal font-pretendard">
          {errorText}
        </p>
      )}
    </div>
  );
};

export default Input;

import { ValidationResult } from '@/types/signup';

// validators.ts
export const validators = {
  id: (value: string): ValidationResult => {
    const alphanumericPattern = /^[A-Za-z0-9]+$/;
    return {
      isValid: alphanumericPattern.test(value),
      message: '영문, 숫자 조합',
    };
  },

  password: (value: string): ValidationResult[] => {
    const lengthValid = value.length >= 3 && value.length <= 20;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    return [
      {
        isValid: lengthValid,
        message: '3~20자 이내',
      },
      {
        isValid: hasLetter && hasNumber,
        message: '영문, 숫자 조합 ',
      },
    ];
  },

  name: (value: string): ValidationResult[] => {
    const koreanOnly = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/;
    const noSpacing = !value.includes(' ');
    const noSpecialChars = !/[!@#$%^&*(),.?":{}|<>]/.test(value);

    return [
      {
        isValid: koreanOnly.test(value),
        message: '한글 8자 이내',
      },
      {
        isValid: noSpacing,
        message: '띄어쓰기 금지',
      },
      {
        isValid: noSpecialChars,
        message: '특수문자 금지',
      },
    ];
  },

  email: (value: string): ValidationResult => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value) && value.length <= 254;

    return {
      isValid,
      message: '올바른 형식',
    };
  },
};

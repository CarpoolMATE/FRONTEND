import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** 에러 상태 여부 */
  error?: boolean;
  errorText?: string;
};

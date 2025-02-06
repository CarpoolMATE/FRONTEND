// types.ts
export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export interface FormField {
  value: string;
  error: boolean;
  duplicate?: boolean;
}

export interface SignupForm {
  id: FormField;
  password: FormField;
  passwordConfirm: FormField;
  name: FormField;
  email: FormField;
}

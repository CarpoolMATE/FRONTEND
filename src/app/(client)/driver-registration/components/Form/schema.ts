import { z } from 'zod';

export const driverRegistrationSchema = z.object({
  carImage: z.string().min(1, { message: '차량 이미지를 선택해주세요.' }),
  carNumber: z
    .string()
    .nonempty('차량 번호를 입력해주세요.')
    .regex(
      /^\d{2,3}[가-힣]\d{4}$/,
      '띄어쓰기 없이, 올바른 차량번호를 입력해주세요.',
    ),
  phoneNumber: z
    .string()
    .nonempty('휴대 번호를 입력해주세요.')
    .regex(/^\d{11}$/, "'-' 없이 11자리 숫자를 입력해주세요."),
});

export type DriverRegistrationFormValues = z.infer<
  typeof driverRegistrationSchema
>;

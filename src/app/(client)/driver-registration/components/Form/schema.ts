import { z } from 'zod';

export const driverRegistrationSchema = z.object({
  carImage: z
    .instanceof(File, { message: '파일을 선택하세요.' })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: '10MB 이하의 파일만 업로드 가능합니다.',
    })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'JPG 또는 PNG 파일만 업로드 가능합니다.',
    }),
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

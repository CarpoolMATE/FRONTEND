import { z } from 'zod';

export const editProfileSchema = z.object({
  nickname: z.string(),
  profileImage: z.string(),
});

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;

export const editDriverProfileSchema = z.object({
  carNumber: z.string(),
  phoneNumber: z.string(),
  carImage: z.string(),
});

export type EditDriverProfileFormValues = z.infer<
  typeof editDriverProfileSchema
>;

export const verifyPasswordSchema = z.object({
  password: z.string().min(1),
});

export type VerifyPasswordFormValues = z.infer<typeof verifyPasswordSchema>;

export const changePasswordSchema = z
  .object({
    password: z
      .string()
      .min(3)
      .max(20)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/),
    newPassword: z.string().min(3, { message: '새 비밀번호를 입력해주세요.' }),
  })
  .refine((data) => data.password === data.newPassword, {
    message: '새 비밀번호가 일치하지 않습니다.',
    path: ['newPassword'],
  });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

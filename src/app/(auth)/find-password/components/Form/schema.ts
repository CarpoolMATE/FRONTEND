import { z } from 'zod';

export const findPasswordSchema = z.object({
  memberId: z.string().min(1, { message: '아이디를 입력해주세요.' }),
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '이메일 형식을 확인해주세요.' }),
});

export type FindPasswordFormValues = z.infer<typeof findPasswordSchema>;

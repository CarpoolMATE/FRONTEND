import { z } from 'zod';

export const findIdSchema = z.object({
  nickname: z.string().min(1, { message: '닉네임을 입력해주세요.' }),
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '유효한 이메일을 입력해주세요.' }),
});

export type FindIdFormValues = z.infer<typeof findIdSchema>;

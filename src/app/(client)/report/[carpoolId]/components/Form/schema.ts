import { z } from 'zod';

export const reportSchema = z.object({
  reportTitle: z.string().nonempty('제목을 입력해주세요.'),
  reportContent: z
    .string()
    .nonempty('내용을 입력해주세요.')
    .max(200, '200자 내로 입력해주세요.'),
});

export type ReportFormValues = z.infer<typeof reportSchema>;

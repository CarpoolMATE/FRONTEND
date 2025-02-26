import { z } from 'zod';

export const editProfileSchema = z.object({
  nickname: z.string(),
  profileImage: z.string(),
});

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;

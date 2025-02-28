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

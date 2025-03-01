import { z } from 'zod';

export const carpoolRegistrationSchema = z.object({
  departureCoordinate: z.string().min(1),
  latitude: z.string(),
  longitude: z.string(),
  chatLink: z.string().min(1),
  capacity: z.number().min(1),
  cost: z
    .number()
    .min(1)
    .or(z.nan().transform(() => 0)),
  startTime: z.number().min(1),
  startMinute: z.number().min(1),
});

export type CarpoolRegistrationFormValues = z.infer<
  typeof carpoolRegistrationSchema
>;

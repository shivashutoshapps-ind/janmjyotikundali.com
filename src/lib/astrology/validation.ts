import { z } from 'zod';

export const birthPlaceSchema = z.object({
  name: z.string().min(2, { message: 'स्थान का नाम दर्ज करें' }),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  timezone: z.string().optional(),
});

export const birthDataSchema = z.object({
  name: z.string().min(2, { message: 'पूरा नाम दर्ज करें' }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'सही जन्म तिथि दर्ज करें' }),
  time: z.string().regex(/^\d{2}:\d{2}$/, { message: 'सही जन्म समय दर्ज करें' }),
  place: birthPlaceSchema,
});

export type ValidatedBirthData = z.infer<typeof birthDataSchema>;

export const validateBirthData = (data: unknown) => {
  return birthDataSchema.safeParse(data);
};

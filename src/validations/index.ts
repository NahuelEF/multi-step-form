import { z } from 'zod';

const personalInfoSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'This field is required' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'Invalid name' })
    .trim(),
  email: z
    .string()
    .nonempty({ message: 'This field is required' })
    .email({ message: 'Invalid email address' })
    .trim(),
  phone: z
    .string()
    .nonempty({ message: 'This field is required' })
    .regex(/^[0-9]+$/, { message: 'Invalid phone number' })
    .min(10, { message: 'Must be at least 10 digits' })
    .max(15, { message: 'Cannot exceed 15 digits' })
    .trim(),
});

const planSchema = z.object({
  plan: z.enum(['arcade', 'advanced', 'pro']),
  billingCycle: z.enum(['monthly', 'yearly']),
});

const addOnsSchema = z.object({
  addOns: z.array(z.enum(['onlineService', 'largerStorage', 'customizableProfile'])).optional(),
});

export const stepSchemas = [personalInfoSchema, planSchema, addOnsSchema];

export const formSchema = personalInfoSchema.merge(planSchema).merge(addOnsSchema);

export type FormData = z.infer<typeof formSchema>;

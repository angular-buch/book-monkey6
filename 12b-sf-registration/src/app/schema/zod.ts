import * as z from 'zod';
import { schema } from '@angular/forms/signal-experimental';
import { validateStandardSchema } from '@angular/forms/standard_schema';

export interface RegisterFormData {
  username: string;
  age: number;
  birthday: Date,
  password: { pw1: string; pw2: string };
  email: string[];
  newsletter: boolean;
  newsletterTopics: string[];
  agreeToTermsAndConditions: boolean;
}

const zodSchema = z
  .object({
    username: z
      .string({ message: 'Username is required' })

      .min(3, {
        message: 'A username must be at least 3 characters long',
      })
      .max(12, { message: 'A username can be max. 12 characters long' }),
    age: z.number().min(18, {
      message: 'You must be >=18 years old',
    }),
    birthday: z.date(),
    email: z
      .array(z.string().email({ message: 'E-Mail format is invalid' }))
      .refine((emails) => emails.length > 0, {
        message: 'At least one E-Mail address must be added',
      }),
    password: z
      .object({
        pw1: z
          .string({ message: 'A password is required' })
          .min(8, {
            message: 'A password must be at least 8 characters long',
          })
          .regex(/^.*[!@#$%^&*(),.?":{}|<>\[\]\\/~`_+=;'\-].*$/, {
            message: 'The password must contain at least one special character',
          }),
        pw2: z.string({
          message: 'A password confirmation is required',
        }),
      })
      .refine((data: { pw1: string; pw2: string }) => data.pw1 === data.pw2, {
        message: 'Passwords do not match',
        path: ['pw2'],
      }),
    newsletter: z.boolean(),
    newsletterTopics: z.array(z.string()),
    agreeToTermsAndConditions: z.boolean().refine((val: boolean) => val, {
      message: 'You must agree to the terms and conditions',
    }),
  })
  .superRefine((data: RegisterFormData, ctx: any) => {
    if (data.newsletter && data.newsletterTopics.length === 0) {
      ctx.addIssue({
        path: ['newsletterTopics'],
        code: 'noTopicSelected',
        message: 'Select at least one newsletter topic',
      });
    }
  });

export const formSchema = schema<RegisterFormData>((fieldPath) => {
  validateStandardSchema(fieldPath, zodSchema);
});

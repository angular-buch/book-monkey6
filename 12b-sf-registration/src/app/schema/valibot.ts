import {
  object,
  string,
  minLength,
  minValue,
  number,
  maxLength,
  email,
  array,
  regex,
  boolean,
  pipe,
  forward,
  partialCheck,
  InferInput,
  date,
} from 'valibot';
import { schema } from '@angular/forms/signal-experimental';
import { validateStandardSchema } from '@angular/forms/standard_schema';

export const valibotSchema = pipe(
  object({
    username: pipe(
      string('Username is required'),
      minLength(3, 'A username must be at least 3 characters long'),
      maxLength(12, 'A username can be max. 12 characters long')
    ),
    age: pipe(number(), minValue(18, 'You must be >=18 years old')),
    birthday: date(),
    email: pipe(
      array(pipe(string(), email('E-Mail format is invalid'))),
      minLength(1, 'At least one E-Mail address must be added')
    ),
    password: pipe(
      object({
        pw1: pipe(
          string('A password is required'),
          minLength(8, 'A password must be at least 8 characters long'),
          regex(
            /^.*[!@#$%^&*(),.?":{}|<>\[\]\\/~`_+=;'\-].*$/,
            'The password must contain at least one special character'
          )
        ),
        pw2: string('A password confirmation is required'),
      }),
      forward(
        partialCheck(
          [['pw1'], ['pw2']],
          (input) => input.pw1 === input.pw2,
          'Passwords do not match'
        ),
        ['pw2']
      )
    ),
    newsletter: boolean(),
    newsletterTopics: array(string()),
    agreeToTermsAndConditions: boolean(
      'You must agree to the terms and conditions'
    ),
  }),
  forward(
    partialCheck(
      [['newsletter'], ['newsletterTopics']],
      (data) => {
        return data.newsletter && data.newsletterTopics.length !== 0;
      },
      'Select at least one newsletter topic'
    ),
    ['newsletterTopics']
  )
);

export type RegisterFormData = InferInput<typeof valibotSchema>;

export const formSchema = schema<RegisterFormData>((fieldPath) => {
  validateStandardSchema(fieldPath, valibotSchema);
});
